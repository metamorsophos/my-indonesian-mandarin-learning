/* eslint-disable */
// HSK 1 - Module 1.2: Greetings & Introductions
// Modular application logic

// --- ENGINE ---

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
        slideOrder: slides.map((_, i) => i),
        startTime: null
    },

    init() {
        try {
            if(window.lucide && window.lucide.createIcons) {
                window.lucide.createIcons();
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
        this.state.pinyin = 'full';
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
        this.state.startTime = Date.now();
        this.state.questions = this.shuffle(this.getFilteredQuizBank(selectedFocus))
            .slice(0, selectedCount)
            .map(q => this.applyPinyinFilter(q));

        this.switchView('view-quiz');
        this.updateSidebar('sb-quiz');
        this.updateQuestionCount();
        this.renderQuizQuestion();
    },

    switchView(viewId) {
        ['view-dashboard', 'view-learning', 'view-quiz', 'view-result'].forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.classList.add('hidden');
            }
        });
        
        const activeView = document.getElementById(viewId);
        if (activeView) {
            activeView.classList.remove('hidden');
        }
        window.scrollTo(0, 0);
    },

    updateSidebar(activeId) {
        ['sb-home', 'sb-learning', 'sb-quiz'].forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.classList.add('hidden');
            }
        });
        const activeElement = document.getElementById(activeId);
        if (activeElement) {
            activeElement.classList.remove('hidden');
        }
    },

    getModeConfig(mode) {
        const modes = {
            practice: { hearts: Infinity, label: 'Practice' },
            review: { hearts: 5, label: 'Review' },
            challenge: { hearts: 3, label: 'Challenge' }
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

    updateQuestionCount() {
        const qc = document.getElementById('q-num');
        if (qc) qc.textContent = `${this.state.qIdx + 1}`;
        const qt = document.getElementById('q-total');
        if (qt) qt.textContent = `${this.state.questions.length}`;
    },

    getLearningPath(mode) {
        const full = slides.map((_, i) => i);
        const vocab = [0, 1, 2, 3, 9, 10, 12];
        const grammar = [0, 3, 4, 5, 6, 7, 12];
        const fasttrack = [0, 1, 3, 6, 12];
        const map = { full, vocab, grammar, fasttrack };
        return map[mode] || full;
    },

    applyPinyinFilter(q) {
        const pinyin = this.state.pinyin;
        if (pinyin === 'full') return q;
        if (pinyin === 'none') {
            const qCopy = JSON.parse(JSON.stringify(q));
            if (qCopy.opts) {
                qCopy.opts = qCopy.opts.map(opt => opt.replace(/[\u0100-\u01FF]/g, ''));
            }
            return qCopy;
        }
        return q;
    },

    getFilteredQuizBank(focus) {
        if (focus === 'balanced') return quizBank;
        if (focus === 'vocab') return quizBank.filter(q => q.category === 'vocab');
        if (focus === 'grammar') return quizBank.filter(q => q.category === 'grammar');
        if (focus === 'dialogue') return quizBank.filter(q => q.category === 'dialogue');
        return quizBank;
    },

    // --- LEARNING LOGIC ---
    renderSlide() {
        const order = this.state.slideOrder || slides.map((_, i) => i);
        const slideIdx = order[this.state.slideIdx] ?? 0;
        const slide = slides[slideIdx];
        
        document.getElementById('slide-title').innerText = slide.title || "Module";
        document.getElementById('slide-num').innerText = this.state.slideIdx + 1;
        document.getElementById('slide-total').innerText = order.length;
        
        const contentDiv = document.getElementById('slide-content');
        contentDiv.innerHTML = slide.html;

        const total = order.length;
        const pct = Math.round(((this.state.slideIdx + 1) / total) * 100);
        document.getElementById('progress-fill').style.width = `${pct}%`;
        document.getElementById('progress-text').innerText = `${pct}%`;

        document.getElementById('btn-prev').disabled = this.state.slideIdx === 0;
        const nextBtn = document.getElementById('btn-next');
        if (this.state.slideIdx === total - 1) {
            nextBtn.innerHTML = 'Complete ✓';
        } else {
            nextBtn.innerHTML = 'Next →';
        }
    },

    nextSlide() {
        const order = this.state.slideOrder || slides.map((_, i) => i);
        const total = order.length;
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
        const optsDiv = document.getElementById('quiz-content');
        
        document.getElementById('q-num').innerText = this.state.qIdx + 1;
        document.getElementById('q-total').innerText = this.state.questions.length;
        
        optsDiv.innerHTML = '';

        if (q.type === 'multi') {
            const questionHtml = `
                <div class="quiz-question">
                    <div class="question-text">${q.q}</div>
                    ${q.opts.map((opt, i) => `
                        <button onclick="App.handleQuizAnswer(${i})" class="option">
                            ${String.fromCharCode(65 + i)}) ${opt}
                        </button>
                    `).join('')}
                </div>
            `;
            optsDiv.innerHTML = questionHtml;
        }

        if (q.type === 'drag-order') {
            const shuffledItems = this.shuffle([...q.items]);
            optsDiv.innerHTML = `
                <div class="quiz-question">
                    <div class="question-text">${q.q}</div>
                    <p style="font-size: 0.9rem; color: #666; margin-bottom: 1rem;">Drag to arrange in correct order:</p>
                    <div id="drag-list" style="display: flex; flex-wrap: wrap; gap: 0.75rem; padding: 1rem; background: #f9f9f9; border-radius: 6px;">
                        ${shuffledItems.map(item => `
                            <div class="drag-item" draggable="true" data-key="${item}" style="padding: 0.75rem 1.25rem; background: white; border: 2px solid #e0e0e0; border-radius: 6px; cursor: move; user-select: none;">
                                ${item}
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            this.bindDragAndDrop();
        }

        if (q.type === 'match') {
            const rights = this.shuffle([...q.pairs]);
            optsDiv.innerHTML = `
                <div class="quiz-question">
                    <div class="question-text">${q.q}</div>
                    <p style="font-size: 0.9rem; color: #666; margin-bottom: 1rem;">Click a term on left, then its match on right:</p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
                        <div id="match-left" style="display: flex; flex-direction: column; gap: 0.75rem;"></div>
                        <div id="match-right" style="display: flex; flex-direction: column; gap: 0.75rem;"></div>
                    </div>
                </div>
            `;
            
            const leftDiv = document.getElementById('match-left');
            const rightDiv = document.getElementById('match-right');
            
            q.pairs.forEach((pair, idx) => {
                const leftText = pair.cn ?? pair.left;
                leftDiv.innerHTML += `
                    <button onclick="App.selectMatchLeft(${idx})" class="option match-left" data-idx="${idx}">
                        ${leftText}
                    </button>
                `;
            });
            
            rights.forEach((pair, idx) => {
                const rightText = pair.en ?? pair.right;
                rightDiv.innerHTML += `
                    <button onclick="App.selectMatchRight('${rightText}')" class="option match-right">
                        ${rightText}
                    </button>
                `;
            });
            
            this.state.matchPairs = q.pairs;
            this.state.selectedLeft = null;
        }

        this.state.currentQuestion = q;
        this.startTimer();
    },

    startTimer() {
        clearInterval(this.state.timerInterval);
        this.state.timer = 15;
        const timerEl = document.getElementById('timer');
        
        if (timerEl) {
            timerEl.innerText = 15;
            this.state.timerInterval = setInterval(() => {
                this.state.timer--;
                timerEl.innerText = this.state.timer;
                
                if(this.state.timer <= 0) {
                    this.skipQuestion();
                }
            }, 1000);
        }
    },

    handleQuizAnswer(idx) {
        clearInterval(this.state.timerInterval);
        const q = this.state.questions[this.state.qIdx];
        const isCorrect = idx === q.ans;
        
        const btns = document.querySelectorAll('.option');
        btns.forEach((btn, i) => {
            btn.disabled = true;
            if(i === q.ans) {
                btn.classList.add('correct');
            } else if (i === idx && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });

        setTimeout(() => {
            this.applyAnswerResult(isCorrect);
        }, 800);
    },

    selectMatchLeft(idx) {
        const btns = document.querySelectorAll('.match-left');
        btns.forEach(b => b.classList.remove('selected'));
        btns[idx].classList.add('selected');
        this.state.selectedLeft = idx;
    },

    selectMatchRight(answer) {
        if (this.state.selectedLeft === null) return;
        
        const q = this.state.questions[this.state.qIdx];
        const correctAnswer = q.pairs[this.state.selectedLeft].en ?? q.pairs[this.state.selectedLeft].right;
        const isCorrect = answer === correctAnswer;
        
        this.applyAnswerResult(isCorrect);
        this.state.selectedLeft = null;
    },

    bindDragAndDrop() {
        const list = document.getElementById('drag-list');
        if (!list) return;
        
        const items = list.querySelectorAll('.drag-item');
        let dragSrc = null;

        items.forEach(item => {
            item.addEventListener('dragstart', function() {
                dragSrc = this;
                this.style.opacity = '0.5';
            });
            item.addEventListener('dragover', (e) => {
                e.preventDefault();
            });
            item.addEventListener('drop', function(e) {
                e.preventDefault();
                if (!dragSrc || dragSrc === this) return;
                
                const srcPos = Array.from(items).indexOf(dragSrc);
                const destPos = Array.from(items).indexOf(this);
                
                if (srcPos < destPos) {
                    this.parentNode.insertBefore(dragSrc, this.nextSibling);
                } else {
                    this.parentNode.insertBefore(dragSrc, this);
                }
            });
            item.addEventListener('dragend', function() {
                this.style.opacity = '1';
            });
        });
    },

    submitAnswer() {
        clearInterval(this.state.timerInterval);
        const q = this.state.currentQuestion;
        if (!q) return;

        if (q.type === 'drag-order') {
            const list = document.getElementById('drag-list');
            if (!list) return;
            const userOrder = Array.from(list.querySelectorAll('.drag-item')).map(el => el.dataset.key);
            const isCorrect = JSON.stringify(userOrder) === JSON.stringify(q.items);
            this.applyAnswerResult(isCorrect);
        }
    },

    skipQuestion() {
        clearInterval(this.state.timerInterval);
        this.applyAnswerResult(false);
    },

    applyAnswerResult(isCorrect) {
        if (isCorrect) {
            this.state.score++;
        }

        const atEnd = this.state.qIdx >= this.state.questions.length - 1;

        if (atEnd) {
            this.showResults();
        } else {
            this.state.qIdx++;
            this.updateQuestionCount();
            this.renderQuizQuestion();
        }
    },

    showResults() {
        this.switchView('view-result');
        const total = this.state.questions.length || 1;
        const scorePercent = Math.round((this.state.score / total) * 100);
        
        let currentScore = 0;
        const int = setInterval(() => {
            if (currentScore < scorePercent) {
                currentScore++;
                document.getElementById('result-score').innerText = currentScore + '%';
            } else {
                clearInterval(int);
                if (scorePercent >= 80) {
                    if (typeof confetti === 'function') {
                        confetti({ particleCount: 150, spread: 100 });
                    }
                }
            }
        }, 15);

        let message = 'Keep practicing!';
        if (scorePercent >= 90) message = 'Perfect! You\'ve mastered this!';
        else if (scorePercent >= 80) message = 'Excellent work!';
        else if (scorePercent >= 70) message = 'Good job! Review challenging areas.';
        else if (scorePercent >= 60) message = 'You\'re getting there! More practice needed.';
        
        document.getElementById('result-message').innerText = message;
        document.getElementById('result-answered').innerText = this.state.questions.length;
        document.getElementById('result-correct').innerText = this.state.score;
        document.getElementById('result-accuracy').innerText = scorePercent + '%';
        
        const timeElapsed = Math.round((Date.now() - this.state.startTime) / 1000);
        const mins = Math.floor(timeElapsed / 60);
        const secs = timeElapsed % 60;
        document.getElementById('result-time').innerText = `${mins}m ${secs}s`;
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
