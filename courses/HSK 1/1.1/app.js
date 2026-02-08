/* eslint-disable */
// HSK 1 - Module 1.1: Introduction & Asking Names
// Modular application logic

// --- ENGINE ---

const fixMojibake = (value) => {
    if (typeof value !== 'string') return value;
    if (!/[\u00C0-\u00FF]/.test(value)) return value;
    if (/[\u3400-\u9FFF]/.test(value)) return value;
    try {
        return decodeURIComponent(escape(value));
    } catch (err) {
        return value;
    }
};

const normalizeValue = (value) => {
    if (typeof value === 'string') return fixMojibake(value);
    if (Array.isArray(value)) {
        for (let i = 0; i < value.length; i++) {
            value[i] = normalizeValue(value[i]);
        }
        return value;
    }
    if (value && typeof value === 'object') {
        Object.keys(value).forEach((key) => {
            value[key] = normalizeValue(value[key]);
        });
    }
    return value;
};

if (typeof slides !== 'undefined') {
    slides.forEach((s) => normalizeValue(s));
}

if (typeof quizBank !== 'undefined') {
    quizBank.forEach((q) => normalizeValue(q));
}

const App = {
    state: {
        view: 'dashboard', 
        slideIdx: 0,
        qIdx: 0,
        score: 0,
        timer: 15,
        timerInterval: null,
        mode: 'practice',
        hearts: Infinity,
        streak: 0,
        questions: [],
        learningMode: 'full',
        pinyin: 'full',
        assessmentFocus: 'balanced',
        slideOrder: slides.map((_, i) => i)
    },

    init() {
        try {
            // Try to use lucide if available, otherwise fall back to styling
            if(window.lucide && window.lucide.createIcons) {
                window.lucide.createIcons();
            } else {
                // Fallback: replace lucide icons with simple symbols
                document.querySelectorAll('[data-lucide]').forEach(el => {
                    const iconName = el.getAttribute('data-lucide');
                    const symbols = {
                        'book-open': '📖',
                        'pen-tool': '✏️',
                        'arrow-right': '→',
                        'arrow-left': '←',
                        'chevron-right': '›',
                        'award': '🏆',
                        'sparkles': '✨'
                    };
                    if (symbols[iconName]) {
                        el.textContent = symbols[iconName];
                        el.style.fontFamily = 'Arial, sans-serif';
                        el.style.display = 'inline';
                    }
                });
            }
        } catch(e) {
            console.warn('Icon initialization issue:', e);
        }
        this.goHome();
    },

    // --- NAVIGATION ---
    goHome() {
        this.switchView('view-dashboard');
        this.updateSidebar('sb-home');
        this.state.slideIdx = 0;
        this.state.learningMode = 'full';
        this.state.pinyin = 'full';
        this.state.slideOrder = slides.map((_, i) => i);
    },

    startModule() {
        const selMode = document.getElementById('learning-mode-select');
        const mode = selMode ? selMode.value : 'full';
        this.state.learningMode = mode;
        this.state.pinyin = 'full'; // Always show pinyin in learning materials
        this.state.slideOrder = this.getLearningPath(mode);
        this.state.slideIdx = 0;
        this.switchView('view-learning');
        this.updateSidebar('sb-learning');
        this.renderSlide();
    },

    startQuiz() {
        const modeSelect = document.getElementById('mode-select');
        const focusSelect = document.getElementById('assessment-focus-select');
        const pinyinSelect = document.getElementById('quiz-pinyin-select');
        const countSelect = document.getElementById('question-count-select');
        const selectedMode = modeSelect ? modeSelect.value : 'practice';
        const selectedFocus = focusSelect ? focusSelect.value : 'balanced';
        const selectedPinyin = pinyinSelect ? pinyinSelect.value : 'full';
        const selectedCount = countSelect ? parseInt(countSelect.value) : 20;
        const cfg = this.getModeConfig(selectedMode);

        this.state.mode = selectedMode;
        this.state.assessmentFocus = selectedFocus;
        this.state.pinyin = selectedPinyin;
        this.state.hearts = cfg.hearts;
        this.state.qIdx = 0;
        this.state.score = 0;
        this.state.streak = 0;
        this.state.questions = this.shuffle(this.getFilteredQuizBank(selectedFocus))
            .slice(0, selectedCount)
            .map(q => this.applyPinyinFilter(q));

        this.switchView('view-quiz');
        this.updateSidebar('sb-quiz');
        this.updateHeartsUI();
        this.updateModeBadge();
        this.updateQuestionCount();
        this.renderQuizQuestion();
    },

    switchView(viewId) {
        ['view-dashboard', 'view-learning', 'view-quiz', 'view-result'].forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.classList.add('hidden');
                el.style.pointerEvents = '';
                el.style.visibility = '';
            }
        });
        
        const activeView = document.getElementById(viewId);
        if (activeView) {
            activeView.classList.remove('hidden');
            activeView.style.pointerEvents = '';
            activeView.style.visibility = '';
        }
        window.scrollTo(0,0);
    },

    updateSidebar(activeId) {
        ['sb-home', 'sb-learning', 'sb-quiz'].forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.classList.add('hidden');
                el.style.pointerEvents = '';
            }
        });
        const activeElement = document.getElementById(activeId);
        if (activeElement) {
            activeElement.classList.remove('hidden');
            activeElement.style.pointerEvents = '';
        }
    },

    getModeConfig(mode) {
        const modes = {
            practice: { hearts: Infinity, label: 'Practice' },
            easy: { hearts: 5, label: 'Easy' },
            medium: { hearts: 3, label: 'Medium' },
            hard: { hearts: 1, label: 'Hard' },
            deathmarch: { hearts: 1, label: 'Deathmarch' }
        };
        return modes[mode] || modes.practice;
    },

    shuffle(arr) {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    },

    updateHeartsUI() {
        const wrap = document.getElementById('hearts-wrap');
        const container = document.getElementById('hearts-container');
        if (!wrap || !container) return;
        if (this.state.mode === 'practice') {
            wrap.classList.add('hidden');
            return;
        }
        wrap.classList.remove('hidden');
        container.innerHTML = '';
        const hearts = this.state.hearts;
        for (let i = 0; i < hearts; i++) {
            const span = document.createElement('span');
            span.textContent = '❤';
            span.className = 'text-[#C0945E] text-lg';
            container.appendChild(span);
        }
    },

    updateModeBadge() {
        const badge = document.getElementById('mode-badge');
        if (badge) badge.textContent = `Mode: ${this.getModeConfig(this.state.mode).label}`;
    },

    updateQuestionCount() {
        const qc = document.getElementById('question-count');
        if (qc) qc.textContent = `${this.state.qIdx + 1} / ${this.state.questions.length}`;
    },

    getLearningPath(mode) {
        const full = slides.map((_, i) => i);
        const vocab = [0,1,2,7,8,10];
        const grammar = [3,4,5,8,9,10];
        const fasttrack = [0,2,8,9,11,12];
        const map = { full, vocab, grammar, fasttrack };
        return map[mode] || full;
    },

    applyPinyinFilter(q) {
        const pinyin = this.state.pinyin;
        if (pinyin === 'full') return q;
        if (pinyin === 'none') {
            const qCopy = JSON.parse(JSON.stringify(q));
            if (qCopy.opts) {
                qCopy.opts = qCopy.opts.map(opt => opt.replace(/[áǎàāéěèēíǐìīóǒòōúǔùūǘǚǜü]/g, '').replace(/\([^)]*\)/g, ''));
            }
            return qCopy;
        }
        if (pinyin === 'some') {
            const qCopy = JSON.parse(JSON.stringify(q));
            if (qCopy.opts && Math.random() > 0.5) {
                qCopy.opts = qCopy.opts.map(opt => opt.replace(/[áǎàāéěèēíǐìīóǒòōúǔùūǘǚǜü]/g, '').replace(/\([^)]*\)/g, ''));
            }
            return qCopy;
        }
        return q;
    },

    getFilteredQuizBank(focus) {
        if (focus === 'balanced') return quizBank;
        if (focus === 'vocab') return quizBank.filter(q => q.category === 'vocab');
        if (focus === 'grammar') return quizBank.filter(q => q.category === 'grammar');
        return quizBank;
    },

    // --- LEARNING LOGIC ---
    renderSlide() {
        const order = this.state.slideOrder || slides.map((_, i) => i);
        const slideIdx = order[this.state.slideIdx] ?? 0;
        const slide = slides[slideIdx];
        
        const slideTitle = fixMojibake(slide.title || "Module");
        const slideSubtitle = fixMojibake(slide.subtitle || "");
        const slideNumber = fixMojibake(slide.number || String(slideIdx + 1).padStart(2, '0'));

        document.getElementById('slide-title').innerText = slideTitle;
        document.getElementById('slide-subtitle').innerText = slideSubtitle;
        document.getElementById('slide-number').innerText = slideNumber;
        
        const contentDiv = document.getElementById('slide-content');
        
        if (slide.type === 'mini-quiz') {
            const questionText = fixMojibake(slide.question || '');
            const feedbackText = fixMojibake(slide.feedback || '');
            contentDiv.innerHTML = `
                <div class="h-full flex flex-col justify-center max-w-2xl mx-auto slide-up">
                    <div class="border-l-4 border-[#6A2C3C] pl-6 py-2 mb-8">
                        <span class="text-xs font-bold text-[#999999] uppercase tracking-widest">Knowledge Check</span>
                        <h3 class="text-2xl font-serif font-bold text-[#333333] mt-2">${questionText}</h3>
                    </div>
                    <div class="grid grid-cols-1 gap-3">
                        ${slide.options.map((opt, idx) => {
                            const optText = fixMojibake(opt.text || '');
                            return `
                            <button onclick="App.checkMiniQuiz(${idx})" class="group flex items-center justify-between w-full p-4 border border-[#e0e0e0] hover:border-[#6A2C3C] hover:bg-[#f9f9f9] transition text-left mq-btn rounded" data-correct="${opt.correct}">
                                <span class="font-medium text-[#666666] group-hover:text-[#333333]">${optText}</span>
                                <i data-lucide="circle" class="w-4 h-4 text-[#d1d5db] group-hover:text-[#6A2C3C]"></i>
                            </button>
                        `;
                        }).join('')}
                    </div>
                    <div id="mq-feedback" class="hidden mt-6 p-4 bg-[#6A2C3C] text-white text-sm rounded shadow-lg slide-up">
                        <strong class="uppercase text-xs tracking-widest text-[#C0945E] block mb-1">Analysis</strong>
                        ${feedbackText}
                    </div>
                </div>
            `;
        } else {
            const slideHtml = fixMojibake(slide.html || '');
            contentDiv.innerHTML = `<div class="slide-up">${slideHtml}</div>`;
        }

        document.getElementById('current-module-text').innerText = slideTitle;
        const total = (this.state.slideOrder || slides).length;
        const pct = Math.round(((this.state.slideIdx + 1) / total) * 100);
        document.getElementById('progress-bar').style.width = `${pct}%`;
        document.getElementById('progress-text').innerText = `${pct}%`;

        document.getElementById('btn-prev').disabled = this.state.slideIdx === 0;
        const nextBtn = document.getElementById('btn-next');
        if (this.state.slideIdx === slides.length - 1) {
            nextBtn.innerHTML = `Complete <i data-lucide="check-circle" class="w-4 h-4 text-white"></i>`;
        } else {
            nextBtn.innerHTML = `Next Phase <i data-lucide="chevron-right" class="w-4 h-4"></i>`;
        }
        
        if(window.lucide) lucide.createIcons();
    },

    checkMiniQuiz(idx) {
        const btns = document.querySelectorAll('.mq-btn');
        const selected = btns[idx];
        const isCorrect = selected.dataset.correct === 'true';

        btns.forEach(b => {
            b.disabled = true;
            if(b.dataset.correct === 'true') {
                b.classList.add('bg-[#6A2C3C]', 'text-white', 'border-[#6A2C3C]');
                b.querySelector('i').setAttribute('data-lucide', 'check-circle');
                b.querySelector('i').classList.add('text-[#C0945E]');
            }
        });

        if(!isCorrect) {
            selected.classList.add('bg-red-50', 'border-red-200');
            selected.querySelector('i').setAttribute('data-lucide', 'x-circle');
            selected.querySelector('i').classList.add('text-red-500');
        } else {
            if (typeof confetti === 'function') {
                 confetti({ particleCount: 30, spread: 50, origin: { y: 0.6 }, colors: ['#6A2C3C', '#C0945E'] });
            }
        }

        document.getElementById('mq-feedback').classList.remove('hidden');
        if(window.lucide) lucide.createIcons();
    },

    nextSlide() {
        const total = (this.state.slideOrder || slides).length;
        if (this.state.slideIdx < total - 1) {
            this.state.slideIdx++;
            this.renderSlide();
        } else {
            this.goHome(); 
        }
    },

    prevSlide() {
        if (this.state.slideIdx > 0) {
            this.state.slideIdx--;
            this.renderSlide();
        }
    },

    // --- QUIZ LOGIC ---
    renderQuizQuestion() {
        const q = this.state.questions[this.state.qIdx];
        const optsDiv = document.getElementById('quiz-options');
        const actions = document.getElementById('interactive-actions');
        const hint = document.getElementById('interactive-hint');
        document.getElementById('q-current-side').innerText = this.state.qIdx + 1;
        document.getElementById('q-number-quiz').innerText = this.state.qIdx + 1;
        document.getElementById('quiz-question').innerText = q.q;
        this.updateQuestionCount();

        optsDiv.innerHTML = '';
        actions.classList.add('hidden');
        hint.textContent = '';
        const submitBtn = document.getElementById('interactive-submit');
        if (submitBtn) submitBtn.disabled = false;

        if (q.type === 'multi') {
            optsDiv.innerHTML = q.opts.map((opt, i) => `
                <button onclick="App.handleQuizAnswer(${i})" class="w-full text-left p-5 border border-[#e0e0e0] hover:border-[#C0945E] hover:shadow-md transition bg-white group quiz-opt-btn flex items-center slide-up rounded" style="animation-delay: ${i*0.05}s">
                    <span class="w-8 h-8 flex items-center justify-center border border-[#d1d5db] text-[#999999] font-serif mr-4 group-hover:border-[#C0945E] group-hover:text-[#C0945E] transition-colors rounded-full">${String.fromCharCode(65+i)}</span>
                    <span class="text-[#666666] font-medium group-hover:text-[#333333] transition-colors">${opt}</span>
                </button>
            `).join('');
        }

        if (q.type === 'drag-order') {
            const shuffledItems = this.shuffle(q.items);
            optsDiv.innerHTML = `
                <div class="text-sm text-[#666666] mb-2">Drag the tiles to form the correct sentence order.</div>
                <div id="drag-list" class="flex flex-wrap gap-2 bg-[#f9f9f9] border border-[#e0e0e0] p-3 rounded">
                    ${shuffledItems.map(item => `<div class="drag-item cursor-move px-3 py-2 bg-white border border-[#e0e0e0] rounded shadow-sm" draggable="true" data-key="${item}">${item}</div>`).join('')}
                </div>
            `;
            actions.classList.remove('hidden');
            hint.textContent = 'Ensure the polite structure is perfectly ordered.';
            this.bindDragAndDrop();
        }

        if (q.type === 'match') {
            const rights = this.shuffle(q.pairs.map(p => p.right));
            optsDiv.innerHTML = `
                <div class="text-sm text-[#666666] mb-4">Tap a card on the left, then tap a card on the right to match pairs.</div>
                <div class="grid grid-cols-2 gap-4">
                    <div class="space-y-2">
                        ${q.pairs.map((pair, idx) => `
                            <div class="match-card-left cursor-pointer p-4 border-2 border-[#d1d5db] rounded-lg bg-[#f0f9ff] hover:bg-[#e0f2fe] transition text-center font-serif text-sm text-[#333333]" data-left-idx="${idx}" data-left="${pair.left}">
                                ${pair.left}
                            </div>
                        `).join('')}
                    </div>
                    <div class="space-y-2">
                        ${rights.map((right, idx) => `
                            <div class="match-card-right cursor-pointer p-4 border-2 border-[#d1d5db] rounded-lg bg-[#f0f0f0] hover:bg-[#e5e5e5] transition text-center text-sm text-[#333333]" data-right-idx="${idx}" data-right="${right}">
                                ${right}
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            
            this.state.matchPairs = q.pairs;
            this.state.matchRights = rights;
            this.state.selectedLeft = null;
            this.state.matchedPairs = new Map();
            
            setTimeout(() => this.bindMatchCards(), 100);
            actions.classList.remove('hidden');
            hint.textContent = 'Match all pairs correctly. Cards will turn green (correct) or red (incorrect).';
        }

        this.state.currentQuestion = q;
        this.startTimer();
    },

    startTimer() {
        clearInterval(this.state.timerInterval);
        this.state.timer = 15;
        const txt = document.getElementById('timer-text-side');
        const bar = document.getElementById('quiz-timer-bar');
        
        txt.innerText = 15;
        bar.style.width = '100%';

        this.state.timerInterval = setInterval(() => {
            this.state.timer--;
            txt.innerText = this.state.timer;
            bar.style.width = `${(this.state.timer/15)*100}%`;
            
            if(this.state.timer <= 0) {
                this.handleQuizAnswer(-1);
            }
        }, 1000);
    },

    handleQuizAnswer(idx) {
        clearInterval(this.state.timerInterval);
        const q = this.state.questions[this.state.qIdx];
        const isCorrect = idx === q.ans;
        
        const btns = document.querySelectorAll('.quiz-opt-btn');
        btns.forEach((btn, i) => {
            btn.disabled = true;
            if(i === q.ans) {
                btn.classList.add('bg-[#fffbf0]', 'border-[#C0945E]');
                btn.querySelector('span:first-child').classList.add('bg-[#C0945E]', 'text-white', 'border-[#C0945E]');
            } else if (i === idx && !isCorrect) {
                btn.classList.add('bg-red-50', 'border-red-200');
                btn.querySelector('span:first-child').classList.add('text-red-500', 'border-red-500');
            } else {
                btn.classList.add('opacity-40');
            }
        });

        setTimeout(() => {
            this.applyAnswerResult(isCorrect);
        }, 800);
    },

    bindDragAndDrop() {
        const list = document.getElementById('drag-list');
        if (!list) return;
        const items = list.querySelectorAll('.drag-item');
        let dragSrc = null;

        items.forEach(item => {
            item.addEventListener('dragstart', function (e) {
                dragSrc = this;
                this.classList.add('opacity-60');
                e.dataTransfer.effectAllowed = 'move';
            });
            item.addEventListener('dragover', function (e) {
                e.preventDefault();
                e.dataTransfer.dropEffect = 'move';
            });
            item.addEventListener('drop', function (e) {
                e.preventDefault();
                if (!dragSrc || dragSrc === this) return;
                const nodes = Array.from(list.children);
                const srcIndex = nodes.indexOf(dragSrc);
                const destIndex = nodes.indexOf(this);
                if (srcIndex < destIndex) {
                    list.insertBefore(dragSrc, this.nextSibling);
                } else {
                    list.insertBefore(dragSrc, this);
                }
            });
            item.addEventListener('dragend', function () {
                this.classList.remove('opacity-60');
            });
        });
    },

    bindMatchCards() {
        const leftCards = document.querySelectorAll('.match-card-left');
        const rightCards = document.querySelectorAll('.match-card-right');
        
        leftCards.forEach(card => {
            card.addEventListener('click', () => {
                leftCards.forEach(c => {
                    c.classList.remove('border-[#3b82f6]', 'bg-[#dbeafe]');
                    c.classList.add('border-[#d1d5db]', 'bg-[#f0f9ff]');
                });
                card.classList.remove('border-[#d1d5db]', 'bg-[#f0f9ff]');
                card.classList.add('border-[#3b82f6]', 'bg-[#dbeafe]');
                this.state.selectedLeft = {
                    idx: card.dataset.leftIdx,
                    left: card.dataset.left,
                    card: card
                };
            });
        });
        
        rightCards.forEach(card => {
            card.addEventListener('click', () => {
                if (!this.state.selectedLeft) return;
                
                const isCorrect = this.state.matchPairs[this.state.selectedLeft.idx].right === card.dataset.right;
                
                if (isCorrect) {
                    card.classList.add('border-[#10b981]', 'bg-[#d1fae5]', 'font-semibold');
                    card.classList.remove('border-[#d1d5db]', 'bg-[#f0f0f0]');
                    card.style.pointerEvents = 'none';
                    
                    this.state.selectedLeft.card.classList.add('border-[#10b981]', 'bg-[#d1fae5]', 'font-semibold');
                    this.state.selectedLeft.card.classList.remove('border-[#3b82f6]', 'bg-[#dbeafe]');
                    this.state.selectedLeft.card.style.pointerEvents = 'none';
                    
                    this.state.matchedPairs.set(this.state.selectedLeft.idx, card.dataset.right);
                    this.state.selectedLeft = null;
                    
                    if (this.state.matchedPairs.size === this.state.matchPairs.length) {
                        setTimeout(() => this.applyAnswerResult(true), 500);
                    }
                } else {
                    card.classList.add('border-[#ef4444]', 'bg-[#fee2e2]');
                    card.classList.remove('border-[#d1d5db]', 'bg-[#f0f0f0]');
                    card.style.animation = 'shake 0.4s';
                    
                    this.state.selectedLeft.card.classList.add('border-[#ef4444]', 'bg-[#fee2e2]');
                    this.state.selectedLeft.card.classList.remove('border-[#3b82f6]', 'bg-[#dbeafe]');
                    this.state.selectedLeft.card.style.animation = 'shake 0.4s';
                    
                    setTimeout(() => {
                        card.classList.remove('border-[#ef4444]', 'bg-[#fee2e2]');
                        card.classList.add('border-[#d1d5db]', 'bg-[#f0f0f0]');
                        card.style.animation = '';
                        
                        this.state.selectedLeft.card.classList.remove('border-[#ef4444]', 'bg-[#fee2e2]');
                        this.state.selectedLeft.card.classList.add('border-[#3b82f6]', 'bg-[#dbeafe]');
                        this.state.selectedLeft.card.style.animation = '';
                    }, 400);
                }
            });
        });
    },

    submitInteractiveAnswer() {
        clearInterval(this.state.timerInterval);
        const q = this.state.currentQuestion;
        if (!q) return;

        const submitBtn = document.getElementById('interactive-submit');
        if (submitBtn) submitBtn.disabled = true;

        if (q.type === 'drag-order') {
            const list = document.getElementById('drag-list');
            if (!list) return;
            const userOrder = Array.from(list.querySelectorAll('.drag-item')).map(el => el.dataset.key);
            const isCorrect = JSON.stringify(userOrder) === JSON.stringify(q.answer);
            this.applyAnswerResult(isCorrect);
            return;
        }

        if (q.type === 'match') {
            const map = new Map(q.pairs.map(p => [p.left, p.right]));
            let isCorrect = true;
            this.state.matchedPairs.forEach((right, leftIdx) => {
                if (right !== map.get(q.pairs[leftIdx].left)) isCorrect = false;
            });
            this.applyAnswerResult(isCorrect);
        }
    },

    applyAnswerResult(isCorrect) {
        if (isCorrect) {
            this.state.score++;
            if (this.state.mode === 'deathmarch') {
                this.state.streak++;
            }
        } else {
            this.state.streak = 0;
            if (this.state.mode !== 'practice') {
                this.state.hearts -= 1;
                this.updateHeartsUI();
                if (this.state.hearts <= 0) {
                    this.restartQuiz('Out of hearts. Retake required.');
                    return;
                }
            }
        }

        const atEnd = this.state.qIdx >= this.state.questions.length - 1;

        if (atEnd) {
            if (this.state.mode === 'deathmarch' && this.state.streak < 3) {
                this.restartQuiz('Deathmarch requires a 3-correct streak. Restarting.');
                return;
            }
            this.showResults();
        } else {
            this.state.qIdx++;
            this.updateQuestionCount();
            this.renderQuizQuestion();
        }
    },

    restartQuiz(reason = 'Restarting quiz') {
        alert(reason);
        const cfg = this.getModeConfig(this.state.mode);
        this.state.hearts = cfg.hearts;
        this.state.streak = 0;
        this.state.score = 0;
        this.state.qIdx = 0;
        this.state.questions = this.shuffle(quizBank);
        this.updateHeartsUI();
        this.updateModeBadge();
        this.updateQuestionCount();
        this.renderQuizQuestion();
    },

    showResults() {
        this.switchView('view-result');
        const total = this.state.questions.length || 1;
        const final = Math.round((this.state.score / total) * 100);
        
        let d = 0;
        const int = setInterval(() => {
            if(d < final) {
                d++;
                document.getElementById('final-score').innerText = d;
            } else {
                clearInterval(int);
                if(final >= 80 && typeof confetti === 'function') {
                    confetti({ particleCount: 150, spread: 100, colors: ['#6A2C3C', '#C0945E'] });
                }
            }
        }, 20);

        document.getElementById('correct-count').innerText = this.state.score;
        document.getElementById('wrong-count').innerText = total - this.state.score;
    }
};

// Initialize the app
if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            try {
                if (typeof App !== 'undefined' && App && App.init) {
                    App.init();
                }
            } catch(e) {
                console.error('Failed to initialize App:', e);
            }
        });
    } else {
        try {
            if (typeof App !== 'undefined' && App && App.init) {
                App.init();
            }
        } catch(e) {
            console.error('Failed to initialize App:', e);
        }
    }
}
