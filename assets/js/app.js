/* eslint-disable */
// --- DATA CONTENT ---

const slides = [
    // Slide 1: Etymology of You/Nin
    {
        title: 'The Philosophy of Respect',
        subtitle: 'Pronoun Etymology',
        number: '01',
        html: `
           <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center h-full">
                <div>
                    <p class="text-[#666666] mb-6 leading-relaxed">
                        In Mandarin, hierarchy is embedded in the script itself. To address a superior, a client, or a teacher, we transform the standard "You" into something more profound.
                    </p>
                    
                    <div class="bg-[#fffbf0] border border-[#e0e0e0] p-8 text-center relative rounded shadow-sm">
                        <div class="absolute top-2 left-2 text-[10px] text-[#C0945E] uppercase tracking-widest font-bold">Character Anatomy</div>
                        
                        <div class="flex items-center justify-center gap-4 text-4xl md:text-5xl font-black text-[#333333] mb-2 zh">
                            <div class="flex flex-col items-center">
                                <span>你</span>
                                <span class="text-xs font-normal text-[#999999] mt-2 font-sans">Nǐ (You)</span>
                            </div>
                            <span class="text-[#C0945E]">+</span>
                            <div class="flex flex-col items-center">
                                <span>心</span>
                                <span class="text-xs font-normal text-[#999999] mt-2 font-sans">Xīn (Heart)</span>
                            </div>
                            <span class="text-[#C0945E]">=</span>
                            <div class="flex flex-col items-center relative">
                                <span class="text-[#6A2C3C]">您</span>
                                <div class="absolute -top-4 -right-4">
                                    <i data-lucide="sparkles" class="w-5 h-5 text-[#C0945E]"></i>
                                </div>
                                <span class="text-xs font-bold text-[#6A2C3C] mt-2 font-sans">Nín</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="prose">
                    <h3 class="font-serif text-xl font-bold text-[#333333] mb-4 border-l-4 border-[#6A2C3C] pl-4">The Logic</h3>
                    <p class="text-[#666666] mb-4 text-justify">
                        Notice that <strong>Nín (您)</strong> is literally <strong>Nǐ (你)</strong> placed on top of <strong>Heart (心)</strong>. 
                    </p>
                    <p class="text-[#666666] text-justify">
                        This symbolizes "putting the other person above your own heart." It is the requisite form of address for professional settings.
                    </p>
                    <div class="mt-6 p-4 bg-[#f9f9f9] border-l-2 border-[#C0945E] text-xs text-[#555]">
                        <strong>Usage Rule:</strong> Never use "Nín" for children or close friends. It creates awkward distance.
                    </div>
                </div>
           </div>
        `
    },
    
    // Slide 2: Similarization / Anatomy
    {
        title: 'Visual Logic',
        subtitle: 'Character Similarization',
        number: '02',
        html: `
            <div class="space-y-8">
                <p class="text-[#666666] max-w-2xl">Chinese characters often tell a story. Understanding the components (radicals) makes memorization easier.</p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    <div class="border border-[#e0e0e0] p-6 hover:shadow-lg transition-all bg-white group rounded">
                        <div class="flex justify-between items-start mb-4">
                            <div class="zh text-5xl font-black text-[#6A2C3C]">好</div>
                            <span class="text-sm font-bold text-[#C0945E] font-serif">Hǎo (Good)</span>
                        </div>
                        <div class="flex items-center gap-2 text-xl text-[#333333] mb-3 zh">
                            <span class="char-component px-2 rounded">女 (Woman)</span> 
                            <span class="char-plus">+</span>
                            <span class="char-component px-2 rounded">子 (Child)</span>
                        </div>
                        <p class="text-xs text-[#666666] leading-relaxed">
                            A woman holding a child represents well-being and goodness. Used in greetings like <em>Nǐ hǎo</em>.
                        </p>
                    </div>

                    <div class="border border-[#e0e0e0] p-6 hover:shadow-lg transition-all bg-white group rounded">
                        <div class="flex justify-between items-start mb-4">
                            <div class="zh text-5xl font-black text-[#6A2C3C]">姓</div>
                            <span class="text-sm font-bold text-[#C0945E] font-serif">Xìng (Surname)</span>
                        </div>
                        <div class="flex items-center gap-2 text-xl text-[#333333] mb-3 zh">
                            <span class="char-component px-2 rounded">女 (Woman)</span> 
                            <span class="char-plus">+</span>
                            <span class="char-component px-2 rounded">生 (Born)</span>
                        </div>
                        <p class="text-xs text-[#666666] leading-relaxed">
                            Historically, surnames were matrilineal ("born of woman"). Now used to state one's family name.
                        </p>
                    </div>

                    <div class="border border-[#e0e0e0] p-6 hover:shadow-lg transition-all bg-white group md:col-span-2 rounded">
                        <div class="flex items-center gap-6">
                            <div class="zh text-5xl font-black text-[#6A2C3C]">名</div>
                            <div>
                                <div class="text-sm font-bold text-[#C0945E] font-serif mb-1">Míng (Name)</div>
                                <div class="flex items-center gap-2 text-sm text-[#333333] mb-2 zh">
                                    <span class="char-component px-1">夕 (Sunset/Dark)</span> 
                                    <span class="char-plus">+</span>
                                    <span class="char-component px-1">口 (Mouth)</span>
                                </div>
                                <p class="text-xs text-[#666666]">
                                    Philosophy: When it is dark (sunset) and you cannot see, you must use your mouth to say your name to identify yourself.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        `
    },

    // Slide 3: Vocabulary Matrix
    {
        title: 'Core Vocabulary',
        subtitle: 'Essential Terminology',
        number: '03',
        html: `
            <div class="space-y-6">
                <p class="text-[#666666] text-sm">Review these key terms before constructing sentences. Hover over items for details.</p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    <div class="bg-white border border-[#e0e0e0] p-4 rounded">
                        <h4 class="text-xs font-bold text-[#6A2C3C] uppercase tracking-widest mb-3 border-b pb-2">Persons</h4>
                        <ul class="space-y-2">
                            <li class="vocab-card flex justify-between p-2 rounded cursor-default">
                                <span class="zh font-bold text-[#333333] text-lg">你 / 您</span>
                                <span class="text-[#666666] text-sm">Nǐ / Nín <span class="text-xs text-[#C0945E] ml-1">(You)</span></span>
                            </li>
                            <li class="vocab-card flex justify-between p-2 rounded cursor-default">
                                <span class="zh font-bold text-[#333333] text-lg">我</span>
                                <span class="text-[#666666] text-sm">Wǒ <span class="text-xs text-[#999999] ml-1">(I, Me)</span></span>
                            </li>
                            <li class="vocab-card flex justify-between p-2 rounded cursor-default">
                                <span class="zh font-bold text-[#333333] text-lg">老师</span>
                                <span class="text-[#666666] text-sm">Lǎoshī <span class="text-xs text-[#999999] ml-1">(Teacher)</span></span>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-white border border-[#e0e0e0] p-4 rounded">
                        <h4 class="text-xs font-bold text-[#6A2C3C] uppercase tracking-widest mb-3 border-b pb-2">Actions</h4>
                        <ul class="space-y-2">
                            <li class="vocab-card flex justify-between p-2 rounded cursor-default">
                                <span class="zh font-bold text-[#333333] text-lg">叫</span>
                                <span class="text-[#666666] text-sm">Jiào <span class="text-xs text-[#999999] ml-1">(Called)</span></span>
                            </li>
                            <li class="vocab-card flex justify-between p-2 rounded cursor-default">
                                <span class="zh font-bold text-[#333333] text-lg">姓</span>
                                <span class="text-[#666666] text-sm">Xìng <span class="text-xs text-[#999999] ml-1">(Surname)</span></span>
                            </li>
                            <li class="vocab-card flex justify-between p-2 rounded cursor-default">
                                <span class="zh font-bold text-[#333333] text-lg">认识</span>
                                <span class="text-[#666666] text-sm">Rènshi <span class="text-xs text-[#999999] ml-1">(To meet)</span></span>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-white border border-[#e0e0e0] p-4 md:col-span-2 rounded">
                        <h4 class="text-xs font-bold text-[#6A2C3C] uppercase tracking-widest mb-3 border-b pb-2">Modifiers & Essentials</h4>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="vocab-card p-2 rounded">
                                <div class="zh font-bold text-[#333333] text-lg">很</div>
                                <div class="text-xs text-[#666666]">Hěn (Very)</div>
                            </div>
                            <div class="vocab-card p-2 rounded">
                                <div class="zh font-bold text-[#333333] text-lg">也</div>
                                <div class="text-xs text-[#666666]">Yě (Also)</div>
                            </div>
                            <div class="vocab-card p-2 rounded">
                                <div class="zh font-bold text-[#333333] text-lg">什么</div>
                                <div class="text-xs text-[#666666]">Shénme (What)</div>
                            </div>
                            <div class="vocab-card p-2 rounded">
                                <div class="zh font-bold text-[#333333] text-lg">高兴</div>
                                <div class="text-xs text-[#666666]">Gāoxìng (Happy)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    // Slide 4: Grammar Logic (New)
    {
        title: 'Grammar Logic',
        subtitle: 'Structure & Placement',
        number: '04',
        html: `
            <div class="flex flex-col h-full space-y-8">
                
                <div>
                    <h4 class="font-serif font-bold text-[#333333] mb-3">1. Basic Sentence Order</h4>
                    <p class="text-sm text-[#666666] mb-3">Unlike some languages, Chinese follows a strict S-V-O (Subject + Verb + Object) order, even for questions.</p>
                    
                    <div class="bg-[#f9f9f9] p-4 border border-[#e0e0e0] rounded">
                        <div class="flex flex-wrap items-center gap-2 text-center text-sm font-mono mb-2">
                            <div class="g-block bg-blue-100 text-blue-800">Nǐ (Subj)</div>
                            <div class="text-[#999]">+</div>
                            <div class="g-block bg-red-100 text-red-800">Jiào (Verb)</div>
                            <div class="text-[#999]">+</div>
                            <div class="g-block bg-green-100 text-green-800">Shénme míngzi? (Obj)</div>
                        </div>
                        <div class="text-xs text-[#666666] italic">"You are called what name?"</div>
                    </div>
                </div>

                <div>
                    <h4 class="font-serif font-bold text-[#333333] mb-3">2. Modifier Placement</h4>
                    <p class="text-sm text-[#666666] mb-3">Adverbs like <strong>Hěn (Very)</strong> and <strong>Yě (Also)</strong> must be placed <em>before</em> the verb or adjective.</p>
                    
                    <div class="mb-4">
                        <div class="flex items-center gap-2 mb-1">
                            <span class="zh font-bold text-lg text-[#333333]">我很高兴</span>
                            <span class="text-xs text-[#999]">(I very happy)</span>
                        </div>
                        <div class="flex gap-1 text-xs">
                            <span class="bg-[#e0e0e0] px-2 py-1 rounded">Wǒ (Subj)</span>
                            <span class="bg-[#C0945E] text-white px-2 py-1 rounded">Hěn (Adv)</span>
                            <span class="bg-white border border-[#e0e0e0] px-2 py-1 rounded">Gāoxìng (Adj)</span>
                        </div>
                    </div>

                    <div>
                        <div class="flex items-center gap-2 mb-1">
                            <span class="zh font-bold text-lg text-[#333333]">我也很高兴</span>
                            <span class="text-xs text-[#999]">(I also very happy)</span>
                        </div>
                        <div class="flex gap-1 text-xs">
                            <span class="bg-[#e0e0e0] px-2 py-1 rounded">Wǒ (Subj)</span>
                            <span class="bg-[#6A2C3C] text-white px-2 py-1 rounded">Yě (Adv)</span>
                            <span class="bg-[#C0945E] text-white px-2 py-1 rounded">Hěn (Adv)</span>
                            <span class="bg-white border border-[#e0e0e0] px-2 py-1 rounded">Gāoxìng (Adj)</span>
                        </div>
                    </div>
                </div>

            </div>
        `
    },

    // Slide 5: Formal Inquiry
    {
        title: 'The "Honorable" Inquiry',
        subtitle: 'Formal Protocols',
        number: '05',
        html: `
            <div class="flex flex-col h-full justify-center max-w-2xl mx-auto">
                <div class="border-l-4 border-[#6A2C3C] pl-6 py-2 mb-8">
                    <h3 class="text-2xl font-serif font-bold text-[#333333]">Asking a Name</h3>
                    <p class="text-[#666666] text-sm mt-2">There is a strict divide between inquiring the name of a peer vs. a superior.</p>
                </div>

                <div class="mb-8 relative group">
                    <div class="absolute -left-4 top-0 bottom-0 w-1 bg-[#C0945E] group-hover:bg-[#6A2C3C] transition-colors"></div>
                    <div class="pl-4">
                        <span class="text-[10px] font-bold uppercase tracking-widest text-[#C0945E] mb-1 block">The Gold Standard (Formal)</span>
                        <div class="zh text-3xl font-bold text-[#333333] mb-2">请问，您贵姓？</div>
                        <div class="font-mono text-sm text-[#666666] mb-2">Qǐngwèn, nín guì xìng?</div>
                        <p class="text-xs text-[#999999] italic">
                            Lit: "Please ask, [what is] your honorable surname?"
                        </p>
                    </div>
                </div>

                <div class="grid grid-cols-3 gap-2 mb-8">
                    <div class="bg-[#f9f9f9] p-3 text-center border border-[#e0e0e0] rounded">
                        <div class="zh font-bold text-[#6A2C3C]">请 (Qǐng)</div>
                        <div class="text-[10px] text-[#666666]">Please</div>
                    </div>
                    <div class="bg-[#f9f9f9] p-3 text-center border border-[#e0e0e0] rounded">
                        <div class="zh font-bold text-[#6A2C3C]">问 (Wèn)</div>
                        <div class="text-[10px] text-[#666666]">To Ask</div>
                    </div>
                    <div class="bg-[#fffbf0] p-3 text-center border border-[#C0945E] rounded">
                        <div class="zh font-bold text-[#C0945E]">贵 (Guì)</div>
                        <div class="text-[10px] text-[#666666]">Honorable</div>
                    </div>
                </div>

                <div class="flex items-start gap-3 p-4 bg-red-50 rounded border border-red-100">
                    <i data-lucide="alert-triangle" class="w-5 h-5 text-red-500 shrink-0"></i>
                    <div class="text-xs text-red-800">
                        <strong>Cultural Trap:</strong> Never use <em>Guì</em> (Honorable) to refer to yourself.
                        <br>Correct Reply: "Wǒ xìng Pān" (My surname is Pan).
                    </div>
                </div>
            </div>
        `
    },

    // Slide 6: Titles & Names
    {
        title: 'Nomenclature Logic',
        subtitle: 'Order of Operations',
        number: '06',
        html: `
            <div>
                <h4 class="font-serif font-bold text-[#333333] mb-6">The "Big to Small" Rule</h4>
                <p class="text-[#666666] text-sm mb-8">
                    Chinese culture places the group (Family) before the individual. Therefore, the Surname always precedes the Given Name.
                </p>

                <div class="flex items-center justify-center mb-10 font-serif">
                    <div class="text-center">
                        <span class="block text-[10px] uppercase tracking-widest text-[#999999] mb-1">Family</span>
                        <span class="text-3xl font-bold text-[#6A2C3C]">Wáng</span>
                        <span class="block text-xs text-[#C0945E] mt-1">(Surname)</span>
                    </div>
                    <div class="px-6 text-[#e0e0e0] text-3xl font-light">|</div>
                    <div class="text-center">
                        <span class="block text-[10px] uppercase tracking-widest text-[#999999] mb-1">Individual</span>
                        <span class="text-3xl font-bold text-[#333333]">Pèi</span>
                        <span class="block text-xs text-[#999999] mt-1">(Given)</span>
                    </div>
                </div>

                <div class="bg-[#f9f9f9] border border-[#e0e0e0] p-6 rounded">
                    <h5 class="text-xs font-bold text-[#333333] uppercase mb-4 flex items-center gap-2">
                        <i data-lucide="briefcase" class="w-4 h-4 text-[#C0945E]"></i> Professional Addressing
                    </h5>
                    <p class="text-sm text-[#666666] mb-4">
                        Titles also follow the "Big to Small" logic. You clarify <em>who</em> (Surname) before you clarify <em>what rank</em> (Title).
                    </p>
                    
                    <div class="flex items-center gap-4 text-sm font-mono bg-white p-3 border border-[#e0e0e0] rounded">
                        <div class="flex-1 text-center">
                            <span class="text-[#6A2C3C] font-bold">Pān</span> 
                            <span class="text-[#333333]">Lǎoshī</span>
                            <div class="text-[10px] text-[#999999] mt-1">Surname + Teacher</div>
                        </div>
                        <div class="text-xl text-[#C0945E]">✔</div>
                    </div>
                     <div class="flex items-center gap-4 text-sm font-mono bg-white p-3 border border-[#e0e0e0] mt-2 opacity-50 rounded">
                        <div class="flex-1 text-center line-through">
                            <span class="text-[#333333]">Lǎoshī</span>
                            <span class="text-[#6A2C3C] font-bold">Pān</span> 
                            <div class="text-[10px] text-[#999999] mt-1">Teacher + Surname</div>
                        </div>
                        <div class="text-xl text-[#999999]">✘</div>
                    </div>
                </div>
            </div>
        `
    },

    // Slide 7: Mini Quiz
    {
        type: 'mini-quiz',
        title: 'Checkpoint',
        question: 'Which component is found at the bottom of the formal "You" (Nín)?',
        number: 'Q1',
        options: [
            { text: 'Kǒu (Mouth) - 口', correct: false },
            { text: 'Xīn (Heart) - 心', correct: true },
            { text: 'Rén (Person) - 人', correct: false }
        ],
        feedback: 'Correct. Putting the other person "above your heart" creates the formal Nín.'
    },

    // Slide 8: Core Vocabulary Reference
    {
        title: 'Core Vocabulary',
        subtitle: 'Mapped to Quiz Items',
        number: '07',
        html: `
            <div class="space-y-6">
                <p class="text-[#666666]">These are the exact items you will see in assessments. Review characters, pinyin, and meanings.</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div class="border border-[#e0e0e0] rounded p-4 bg-white">
                        <h4 class="text-xs uppercase tracking-widest text-[#6A2C3C] mb-3 font-bold">People & Titles</h4>
                        <ul class="space-y-2">
                            <li class="flex justify-between"><span class="zh font-semibold">你 / 您</span><span>Nǐ / Nín — you / polite you</span></li>
                            <li class="flex justify-between"><span class="zh font-semibold">我</span><span>Wǒ — I / me</span></li>
                            <li class="flex justify-between"><span class="zh font-semibold">老师</span><span>Lǎoshī — teacher</span></li>
                            <li class="flex justify-between"><span class="zh font-semibold">先生 / 女士</span><span>Xiānsheng / Nǚshì — Mr. / Ms.</span></li>
                            <li class="flex justify-between"><span class="zh font-semibold">同学</span><span>Tóngxué — classmate</span></li>
                        </ul>
                    </div>
                    <div class="border border-[#e0e0e0] rounded p-4 bg-white">
                        <h4 class="text-xs uppercase tracking-widest text-[#6A2C3C] mb-3 font-bold">Actions & Essentials</h4>
                        <ul class="space-y-2">
                            <li class="flex justify-between"><span class="zh font-semibold">叫</span><span>Jiào — to be called</span></li>
                            <li class="flex justify-between"><span class="zh font-semibold">姓 / 贵姓</span><span>Xìng / Guìxìng — surname / honorable surname</span></li>
                            <li class="flex justify-between"><span class="zh font-semibold">认识</span><span>Rènshi — to meet / know</span></li>
                            <li class="flex justify-between"><span class="zh font-semibold">请 / 问</span><span>Qǐng / Wèn — please / to ask</span></li>
                            <li class="flex justify-between"><span class="zh font-semibold">很 / 也</span><span>Hěn / Yě — very / also</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    },

    // Slide 9: Key Sentences
    {
        title: 'Key Sentences',
        subtitle: 'Informal vs Formal',
        number: '08',
        html: `
            <div class="space-y-6">
                <div class="border-l-4 border-[#6A2C3C] pl-4">
                    <h4 class="font-serif font-bold text-[#333333] mb-2">Informal (Peers / Friends)</h4>
                    <p class="zh text-xl font-semibold text-[#6A2C3C] mb-1">你叫什么名字？</p>
                    <p class="text-sm text-[#666666] mb-2">Nǐ jiào shénme míngzi? — What is your name?</p>
                    <p class="text-xs text-[#777777]">Structure: Subject + 叫 + 什么名字 (you are called what name).</p>
                </div>
                <div class="border-l-4 border-[#C0945E] pl-4">
                    <h4 class="font-serif font-bold text-[#333333] mb-2">Formal (Elders / Teachers / Clients)</h4>
                    <p class="zh text-xl font-semibold text-[#6A2C3C] mb-1">请问，您贵姓？</p>
                    <p class="text-sm text-[#666666] mb-2">Qǐngwèn, nín guì xìng? — May I ask, what is your honorable surname?</p>
                    <ul class="text-xs text-[#777777] space-y-1">
                        <li>请问 = may I ask (polite opener)</li>
                        <li>贵 = honorable; never used to describe your own surname</li>
                        <li>Answer pattern: 我姓 + Surname (e.g., 我姓王)</li>
                    </ul>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div class="p-3 bg-[#f9f9f9] border border-[#e0e0e0] rounded">
                        <div class="zh font-semibold text-[#6A2C3C]">很高兴认识你/您。</div>
                        <div class="text-xs text-[#777777]">Hěn gāoxìng rènshi nǐ / nín. — Nice to meet you (formal/informal).</div>
                    </div>
                    <div class="p-3 bg-[#f9f9f9] border border-[#e0e0e0] rounded">
                        <div class="zh font-semibold text-[#6A2C3C]">认识你我也很高兴。</div>
                        <div class="text-xs text-[#777777]">Rènshi nǐ wǒ yě hěn gāoxìng. — Meeting you, I am also very happy (uses 也).</div>
                    </div>
                </div>
            </div>
        `
    },

    // Slide 10: Chinese Names
    {
        title: 'Chinese Name Logic',
        subtitle: 'Surname First, Then Given',
        number: '09',
        html: `
            <div class="space-y-6">
                <p class="text-[#666666]">Order matters: Family name first, then personal name. This underpins quiz items about ordering and titles.</p>
                <div class="flex items-center gap-6">
                    <div class="text-center border border-[#e0e0e0] rounded p-4 bg-white flex-1">
                        <div class="text-[10px] uppercase tracking-widest text-[#999999]">Family</div>
                        <div class="zh text-3xl font-bold text-[#6A2C3C]">王</div>
                        <div class="text-xs text-[#C0945E] mt-1">Wáng (Surname)</div>
                    </div>
                    <div class="text-center border border-[#e0e0e0] rounded p-4 bg-white flex-1">
                        <div class="text-[10px] uppercase tracking-widest text-[#999999]">Individual</div>
                        <div class="zh text-3xl font-bold text-[#333333]">佩</div>
                        <div class="text-xs text-[#999999] mt-1">Pèi (Given)</div>
                    </div>
                </div>
                <div class="p-4 bg-[#fff7ed] border border-[#f3d8b0] rounded text-sm text-[#8a5a32]">
                    <strong class="text-[#6A2C3C]">Professional address:</strong> Say 姓 + Title → e.g., 王老师 (Wáng Lǎoshī). Do not reverse.
                </div>
                <div class="text-xs text-[#777777]">Common surnames: 李, 刘, 王, 张. You will see these patterns in matching / ordering questions.</div>
            </div>
        `
    },

    // Slide 11: Dialogue & Practice
    {
        title: 'Dialogue Practice',
        subtitle: 'First Meeting Script',
        number: '10',
        html: `
            <div class="space-y-4">
                <div class="border-l-4 border-[#6A2C3C] pl-4">
                    <p class="zh text-lg font-semibold text-[#6A2C3C]">您好！</p>
                    <p class="text-xs text-[#777777] mb-2">Nín hǎo — Hello (polite)</p>
                    <p class="zh text-lg font-semibold text-[#6A2C3C]">请问，您贵姓？</p>
                    <p class="text-xs text-[#777777] mb-2">Qǐngwèn, nín guì xìng? — May I ask your honorable surname?</p>
                    <p class="zh text-lg font-semibold text-[#6A2C3C]">我姓潘。你叫什么名字？</p>
                    <p class="text-xs text-[#777777] mb-2">Wǒ xìng Pān. Nǐ jiào shénme míngzi? — My surname is Pan. What is your name?</p>
                    <p class="zh text-lg font-semibold text-[#6A2C3C]">我叫咖喱。潘老师，很高兴认识您！</p>
                    <p class="text-xs text-[#777777]">Wǒ jiào Gālí. Pān lǎoshī, hěn gāoxìng rènshi nín! — I am called Gali. Nice to meet you!</p>
                </div>
                <div class="p-4 bg-[#f9f9f9] border border-[#e0e0e0] rounded text-sm">
                    <strong class="text-[#6A2C3C]">Try it:</strong> Introduce yourself with 我叫 + Name, then reply politely with 认识你我也很高兴 using 也 to show reciprocity.
                </div>
            </div>
        `
    },

    // Slide 12: Pre-Quiz 1
    {
        type: 'mini-quiz',
        title: 'Pre-Quiz: Forms of Address',
        question: 'Pick the correct formal opener when asking a teacher their surname.',
        number: 'Q2',
        options: [
            { text: 'Nǐ jiào shénme míngzi?', correct: false },
            { text: 'Qǐngwèn, nín guì xìng?', correct: true },
            { text: 'Nǐ hǎo ma?', correct: false }
        ],
        feedback: 'Use 请问 to open politely and 贵姓 to show respect. This matches the assessment item on honorable surname.'
    },

    // Slide 13: Pre-Quiz 2
    {
        type: 'mini-quiz',
        title: 'Pre-Quiz: Order & Adverbs',
        question: 'Which sentence correctly uses 也 (also) and preserves S-V-O order?',
        number: 'Q3',
        options: [
            { text: '我很也高兴', correct: false },
            { text: '我也很高兴', correct: true },
            { text: '也我很高兴', correct: false }
        ],
        feedback: 'Adverbs like 也 and 很 come before the adjective/verb. This maps to the quiz item about word order.'
    }
];

const quizBank = [
    // VOCAB: Pronouns & Titles
    { type: 'multi', category: 'vocab', q: 'What is the formal way to say "You"?', opts: ['你 (nǐ)', '您 (nín)', '他 (tā)', '我 (wǒ)'], ans: 1 },
    { type: 'multi', category: 'vocab', q: 'What does "贵 (guì)" mean literally?', opts: ['Expensive/Honorable', 'Name', 'Teacher', 'Please'], ans: 0 },
    { type: 'multi', category: 'vocab', q: 'Which word means "Teacher"?', opts: ['老师 (lǎoshī)', '先生 (xiānsheng)', '女士 (nǚshì)', '同学 (tóngxué)'], ans: 0 },
    { type: 'multi', category: 'vocab', q: 'Which title is used for "Mr."?', opts: ['老师 (lǎoshī)', '先生 (xiānsheng)', '女士 (nǚshì)', '同学 (tóngxué)'], ans: 1 },
    { type: 'multi', category: 'vocab', q: 'What does "女士 (nǚshì)" mean?', opts: ['Teacher', 'Mr.', 'Ms./Mrs.', 'Classmate'], ans: 2 },
    { type: 'multi', category: 'vocab', q: 'Which term means "Classmate"?', opts: ['老师 (lǎoshī)', '先生 (xiānsheng)', '女士 (nǚshì)', '同学 (tóngxué)'], ans: 3 },
    
    // VOCAB: Character Components & Radicals
    { type: 'multi', category: 'vocab', q: 'The character 您 (nín) contains which radical?', opts: ['Water', 'Fire', 'Heart (心)', 'Wood'], ans: 2 },
    { type: 'multi', category: 'vocab', q: 'Which component creates the formal 您 (nín)?', opts: ['口 (kǒu - Mouth)', '心 (xīn - Heart)', '目 (mù - Eye)', '手 (shǒu - Hand)'], ans: 1 },
    { type: 'multi', category: 'vocab', q: 'The character 好 (hǎo) is composed of which two elements?', opts: ['女 (Woman) + 子 (Child)', '女 (Woman) + 生 (Birth)', '口 (Mouth) + 心 (Heart)', '火 (Fire) + 水 (Water)'], ans: 0 },
    { type: 'multi', category: 'vocab', q: 'The character 姓 (xìng) originally meant:', opts: ['To ask', 'Born of woman', 'To speak', 'To know'], ans: 1 },
    
    // VOCAB: Core Verbs & Actions
    { type: 'multi', category: 'vocab', q: 'What is the verb "to be called"?', opts: ['姓 (xìng)', '叫 (jiào)', '名字 (míngzi)', '什么 (shénme)'], ans: 1 },
    { type: 'multi', category: 'vocab', q: 'Which word indicates "to ask" a question?', opts: ['请 (qǐng)', '问 (wèn)', '叫 (jiào)', '姓 (xìng)'], ans: 1 },
    { type: 'multi', category: 'vocab', q: 'What verb means "to know" or "to meet"?', opts: ['认识 (rènshi)', '叫 (jiào)', '姓 (xìng)', '请 (qǐng)'], ans: 0 },
    { type: 'multi', category: 'vocab', q: 'The verb 姓 (xìng) primarily means:', opts: ['To ask', 'To know', 'To be surnamed', 'To call'], ans: 2 },
    
    // VOCAB: Modifiers & Emotions
    { type: 'multi', category: 'vocab', q: 'Which word means "very"?', opts: ['也 (yě)', '很 (hěn)', '高兴 (gāoxìng)', '认识 (rènshi)'], ans: 1 },
    { type: 'multi', category: 'vocab', q: 'What does "高兴 (gāoxìng)" mean?', opts: ['Teacher', 'Happy', 'Name', 'Please'], ans: 1 },
    { type: 'multi', category: 'vocab', q: 'Which adverb means "also" or "too"?', opts: ['很 (hěn)', '也 (yě)', '认识 (rènshi)', '名字 (míngzi)'], ans: 1 },
    { type: 'multi', category: 'vocab', q: '"非常高兴 (fēicháng gāoxìng)" emphasizes:', opts: ['Politeness', 'Very much happiness', 'Surprise', 'Formality'], ans: 1 },
    
    // VOCAB: Nouns
    { type: 'multi', category: 'vocab', q: 'What does "名字 (míngzi)" mean?', opts: ['Surname', 'Teacher', 'Name', 'Please'], ans: 2 },
    { type: 'multi', category: 'vocab', q: 'Which noun refers to "honorable surname"?', opts: ['名字 (míngzi)', '贵姓 (guìxìng)', '老师 (lǎoshī)', '同学 (tóngxué)'], ans: 1 },
    { type: 'multi', category: 'vocab', q: 'What is the interrogative pronoun "what"?', opts: ['谁 (shuí)', '什么 (shénme)', '哪个 (nǎge)', '如何 (rúhé)'], ans: 1 },
    
    // GRAMMAR: Word Order
    { type: 'multi', category: 'grammar', q: 'Correct order for "I am also very happy."', opts: ['我 (wǒ) 很 (hěn) 高兴 (gāoxìng) 也 (yě)', '我 (wǒ) 也 (yě) 很 (hěn) 高兴 (gāoxìng)', '也 (yě) 我 (wǒ) 很 (hěn) 高兴 (gāoxìng)', '我 (wǒ) 很 (hěn) 也 (yě) 高兴 (gāoxìng)'], ans: 1 },
    { type: 'multi', category: 'grammar', q: 'Which sentence correctly uses 也 (yě) (also)?', opts: ['我 (wǒ) 也 (yě) 很 (hěn) 高兴 (gāoxìng)', '我 (wǒ) 很 (hěn) 也 (yě) 高兴 (gāoxìng)', '也 (yě) 我 (wǒ) 很 (hěn) 高兴 (gāoxìng)', '很 (hěn) 我 (wǒ) 也 (yě) 高兴 (gāoxìng)'], ans: 0 },
    { type: 'multi', category: 'grammar', q: 'In the sentence "我很高兴", where does the adverb go?', opts: ['After subject', 'Before adjective', 'After adjective', 'At the end'], ans: 1 },
    
    // GRAMMAR: Formal Phrases
    { type: 'multi', category: 'grammar', q: 'Which phrase means "May I ask your honorable surname?"', opts: ['你 (nǐ) 叫 (jiào) 什么 (shénme)?', '请 (qǐng) 问 (wèn)，您 (nín) 贵 (guì) 姓 (xìng)?', '你 (nǐ) 好 (hǎo) 吗 (ma)?', '很 (hěn) 高兴 (gāoxìng)'], ans: 1 },
    { type: 'multi', category: 'grammar', q: 'Translate: "很高兴认识您 (hěn gāoxìng rènshi nín)"', opts: ['What is your name?', 'Nice to meet you (formal)', 'Are you a teacher?', 'My surname is Pan'], ans: 1 },
    { type: 'multi', category: 'grammar', q: 'Pick the polite reply to "请问，您 贵 姓?"', opts: ['我 (wǒ) 叫 (jiào) 李 (lǐ) 明 (míng)', '我 (wǒ) 姓 (xìng) 李 (lǐ)', '你 (nǐ) 好 (hǎo) 吗 (ma)?', '很 (hěn) 高兴 (gāoxìng)'], ans: 1 },
    
    // GRAMMAR: Title Placement
    { type: 'multi', category: 'grammar', q: 'How do you say "Teacher Pan"?', opts: ['老师 潘 (lǎoshī pān)', '潘 老师 (pān lǎoshī)', 'Teacher Pān', 'Mr. Pān'], ans: 1 },
    { type: 'multi', category: 'grammar', q: 'In professional address, order is:', opts: ['Given Name → Title → Surname', 'Surname → Title → Given Name', 'Title → Surname → Given Name', 'Title → Given Name → Surname'], ans: 1 },
    { type: 'multi', category: 'grammar', q: 'Correct way to address someone formally:', opts: ['Title Surname', 'Surname Title', 'Given Name Title', 'Title Given Name'], ans: 0 },
    
    // GRAMMAR: Name Order
    { type: 'multi', category: 'grammar', q: 'What comes first in a Chinese name?', opts: ['Given Name', 'Middle Name', 'Surname', 'Title'], ans: 2 },
    { type: 'multi', category: 'grammar', q: 'Chinese name structure is:', opts: ['Given + Surname', 'Surname + Given', 'Title + Surname', 'Surname + Title'], ans: 1 },
    { type: 'multi', category: 'grammar', q: 'Select the correct order for a formal introduction.', opts: ['Given Name → Title → Surname', 'Surname → Title → Given Name', 'Title → Surname → Given Name', 'Title → Given Name → Surname'], ans: 1 },
    
    // GRAMMAR: Question Formation
    { type: 'multi', category: 'grammar', q: 'How to ask someone\'s name informally?', opts: ['你 (nǐ) 贵 (guì) 姓 (xìng)?', '你 (nǐ) 叫 (jiào) 什么 (shénme) 名字 (míngzi)?', '你 (nǐ) 好 (hǎo) 吗 (ma)?', '你 (nǐ) 是 (shì) 谁 (shuí)?'], ans: 1 },
    { type: 'multi', category: 'grammar', q: 'What is the sentence structure for asking a name?', opts: ['Subject + Verb + Object', 'Verb + Subject + Object', 'Object + Subject + Verb', 'Adverb + Subject + Verb'], ans: 0 },
    
    // MATCHING: Titles
    { type: 'match', category: 'vocab', q: 'Match the title to its meaning.', pairs: [
        { left: '老师 (lǎoshī)', right: 'Teacher' },
        { left: '先生 (xiānsheng)', right: 'Mr.' },
        { left: '女士 (nǚshì)', right: 'Ms./Mrs.' },
        { left: '同学 (tóngxué)', right: 'Classmate' }
    ]},
    
    // MATCHING: Vocabulary
    { type: 'match', category: 'vocab', q: 'Match the Mandarin to English meaning.', pairs: [
        { left: '认识 (rènshi)', right: 'To meet/know' },
        { left: '很高兴 (hěn gāoxìng)', right: 'Very happy' },
        { left: '名字 (míngzi)', right: 'Name' },
        { left: '请 (qǐng)', right: 'Please' }
    ]},
    
    // MATCHING: Verbs & Actions
    { type: 'match', category: 'vocab', q: 'Match the action verb to its meaning.', pairs: [
        { left: '叫 (jiào)', right: 'To be called' },
        { left: '姓 (xìng)', right: 'To be surnamed' },
        { left: '问 (wèn)', right: 'To ask' },
        { left: '认识 (rènshi)', right: 'To know/meet' }
    ]},
    
    // DRAG-ORDER: Formal Inquiry
    { type: 'drag-order', category: 'grammar', q: 'Arrange the polite question: "请问，您 贵 姓?" (May I ask your honorable surname?)', items: ['请', '问，', '您', '贵', '姓', '？'], answer: ['请', '问，', '您', '贵', '姓', '？'] },
    
    // DRAG-ORDER: Self-Introduction
    { type: 'drag-order', category: 'grammar', q: 'Arrange the self-introduction: "我 叫 李 明" (My name is Li Ming)', items: ['我', '叫', '李', '明', '。'], answer: ['我', '叫', '李', '明', '。'] },
    
    // DRAG-ORDER: Greeting
    { type: 'drag-order', category: 'grammar', q: 'Arrange: "很 高兴 认识 你" (Very happy to meet you)', items: ['很', '高兴', '认识', '你', '。'], answer: ['很', '高兴', '认识', '你', '。'] },
    
    // DRAG-ORDER: Formal Reply
    { type: 'drag-order', category: 'grammar', q: 'Arrange: "我 姓 王" (My surname is Wang)', items: ['我', '姓', '王', '。'], answer: ['我', '姓', '王', '。'] },
    
    // DRAG-ORDER: Polite Greeting Reply
    { type: 'drag-order', category: 'grammar', q: 'Arrange: "认识 你 我 也 很 高兴" (Meeting you, I am also very happy)', items: ['认识', '你', '我', '也', '很', '高兴', '。'], answer: ['认识', '你', '我', '也', '很', '高兴', '。'] },
    
    // Additional VOCAB questions
    { type: 'multi', category: 'vocab', q: 'What does "礼貌 (lǐmào)" mean?', opts: ['Friend', 'Politeness/Manner', 'Knowledge', 'Respect'], ans: 1 },
    { type: 'multi', category: 'vocab', q: 'Which word means "colleague"?', opts: ['同事 (tóngshì)', '朋友 (péngyou)', '家人 (jiārén)', '同学 (tóngxué)'], ans: 0 },
    { type: 'multi', category: 'vocab', q: 'What is "朋友 (péngyou)"?', opts: ['Colleague', 'Family', 'Friend', 'Stranger'], ans: 2 },
    { type: 'multi', category: 'vocab', q: 'The word "家人 (jiārén)" refers to:', opts: ['Friends', 'Colleagues', 'Family', 'Teachers'], ans: 2 },
    { type: 'multi', category: 'vocab', q: 'What does "谢谢 (xièxiè)" mean?', opts: ['Sorry', 'Thank you', 'Please', 'You\'re welcome'], ans: 1 },
    { type: 'multi', category: 'vocab', q: 'Which term means "you\'re welcome"?', opts: ['不客气 (búkèqi)', '谢谢 (xièxiè)', '请 (qǐng)', '不 (búi)'], ans: 0 },
    { type: 'multi', category: 'vocab', q: 'What does "对不起 (duìbùqǐ)" mean?', opts: ['Thank you', 'I\'m sorry', 'Good morning', 'Goodbye'], ans: 1 },
    { type: 'multi', category: 'vocab', q: 'The term "哥哥 (gēge)" means:', opts: ['Sister', 'Older brother', 'Younger brother', 'Father'], ans: 1 },
    { type: 'multi', category: 'vocab', q: 'What is "妹妹 (mèimei)"?', opts: ['Older sister', 'Older brother', 'Younger sister', 'Mother'], ans: 2 },
    { type: 'multi', category: 'vocab', q: 'Which kinship term means "mother"?', opts: ['妈妈 (māma)', '爸爸 (bàba)', '哥哥 (gēge)', '弟弟 (dìdi)'], ans: 0 },
    
    // Additional GRAMMAR questions
    { type: 'multi', category: 'grammar', q: 'Complete: "你 好 吗?" The correct response is:', opts: ['我 (wǒ) 是 (shì) 学生 (xuésheng)', '我 (wǒ) 很 (hěn) 好 (hǎo)，谢谢 (xièxiè)', '你 (nǐ) 叫 (jiào) 什么 (shénme)?', '很 (hěn) 高兴 (gāoxìng) 认识 (rènshi) 你 (nǐ)'], ans: 1 },
    { type: 'multi', category: 'grammar', q: 'In "我 叫 李 伟 (wǒ jiào lǐ wěi)", the verb 叫 (jiào) means:', opts: ['To meet', 'To be called', 'To ask', 'To know'], ans: 1 },
    { type: 'multi', category: 'grammar', q: 'Correct sentence: "She is very happy."', opts: ['她 (tā) 很 (hěn) 高兴 (gāoxìng)', '很 (hěn) 她 (tā) 高兴 (gāoxìng)', '高兴 (gāoxìng) 她 (tā) 很 (hěn)', '很 (hěn) 高兴 (gāoxìng) 她 (tā)'], ans: 0 },
    { type: 'multi', category: 'grammar', q: 'Which response fits "你 是 谁?"', opts: ['我 (wǒ) 很 (hěn) 好 (hǎo)', '我 (wǒ) 是 (shì) 王 (wáng) 老师 (lǎoshī)', '我 (wǒ) 叫 (jiào) 什么 (shénme)?', '谢谢 (xièxiè) 你 (nǐ)'], ans: 1 },
    { type: 'multi', category: 'grammar', q: 'To make a yes-no question, where does "吗 (ma)" go?', opts: ['At the beginning', 'Before the verb', 'At the end', 'After the object'], ans: 2 },
    { type: 'multi', category: 'grammar', q: 'The phrase "非常感谢 (fēicháng gǎnxiè)" means:', opts: ['Very polite', 'Very grateful/thankful', 'Very formal', 'Very kind'], ans: 1 },
    { type: 'multi', category: 'grammar', q: 'Complete: "你 是 学生 吗?" Correct response:', opts: ['我 (wǒ) 很 (hěn) 高兴 (gāoxìng)', '是 (shì) 的 (de)，我 (wǒ) 是 (shì) 学生 (xuésheng)', '我 (wǒ) 叫 (jiào) 李 (lǐ) 明 (míng)', '谢谢 (xièxiè) 你 (nǐ)'], ans: 1 },
    { type: 'multi', category: 'grammar', q: 'In "我 也 是 (wǒ yě shì)", the adverb 也 (yě) means:', opts: ['Too', 'Also', 'Even', 'Too/Also'], ans: 3 },
    { type: 'multi', category: 'grammar', q: 'When should you use the formal 您 (nín) instead of 你 (nǐ)?', opts: ['With close friends', 'With children', 'With strangers/superiors', 'With family'], ans: 2 },
    { type: 'multi', category: 'grammar', q: 'Construct: "My surname is Li and given name is Wei"', opts: ['我 (wǒ) 李 (lǐ) 魏 (wěi)', '我 (wǒ) 是 (shì) 李 (lǐ) 伟 (wěi)', '我 (wǒ) 叫 (jiào) 李 (lǐ) 伟 (wěi)', '李 (lǐ) 伟 (wěi) 是 (shì) 我 (wǒ)'], ans: 2 },
    
    // Additional MATCHING questions
    { type: 'match', category: 'vocab', q: 'Match Mandarin to English.', pairs: [
        { left: '妈妈 (māma)', right: 'Mother' },
        { left: '爸爸 (bàba)', right: 'Father' },
        { left: '哥哥 (gēge)', right: 'Older brother' },
        { left: '妹妹 (mèimei)', right: 'Younger sister' }
    ]},
    
    { type: 'match', category: 'vocab', q: 'Match common expressions.', pairs: [
        { left: '谢谢 (xièxiè)', right: 'Thank you' },
        { left: '不客气 (búkèqi)', right: 'You\'re welcome' },
        { left: '对不起 (duìbùqǐ)', right: 'I\'m sorry' },
        { left: '没关系 (méiguānxi)', right: 'No worries' }
    ]},
    
    { type: 'match', category: 'vocab', q: 'Match occupations and roles.', pairs: [
        { left: '学生 (xuésheng)', right: 'Student' },
        { left: '医生 (yīshēng)', right: 'Doctor' },
        { left: '工程师 (gōngchéngshī)', right: 'Engineer' },
        { left: '律师 (lǜshī)', right: 'Lawyer' }
    ]},
    
    { type: 'match', category: 'grammar', q: 'Match questions to appropriate responses.', pairs: [
        { left: '你 好 吗?', right: '我 很 好，谢谢' },
        { left: '你 叫 什么?', right: '我 叫 李 伟' },
        { left: '很 高兴 认识 你', right: '我 也 是' },
        { left: '你 是 学生 吗?', right: '是 的，我 是' }
    ]},
    
    // Additional DRAG-ORDER questions
    { type: 'drag-order', category: 'grammar', q: 'Arrange: "你 也 是 老师 (nǐ yě shì lǎoshī)" (You are also a teacher)', items: ['你', '也', '是', '老师', '。'], answer: ['你', '也', '是', '老师', '。'] },
    
    { type: 'drag-order', category: 'grammar', q: 'Arrange: "请 问，你 的 名字 是？" (May I ask your name?)', items: ['请', '问，', '你', '的', '名字', '是', '？'], answer: ['请', '问，', '你', '的', '名字', '是', '？'] },
    
    { type: 'drag-order', category: 'grammar', q: 'Arrange: "我 很 对不起 (wǒ hěn duìbùqǐ)" (I am very sorry)', items: ['我', '很', '对不起', '。'], answer: ['我', '很', '对不起', '。'] },
    
    { type: 'drag-order', category: 'grammar', q: 'Arrange: "非常 感谢 你 (fēicháng gǎnxiè nǐ)" (Thank you very much)', items: ['非常', '感谢', '你', '。'], answer: ['非常', '感谢', '你', '。'] },
    
    { type: 'drag-order', category: 'grammar', q: 'Arrange: "我 的 朋友 是 医生 (wǒ de péngyou shì yīshēng)" (My friend is a doctor)', items: ['我', '的', '朋友', '是', '医生', '。'], answer: ['我', '的', '朋友', '是', '医生', '。'] }
];

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
        
        document.getElementById('slide-title').innerText = slide.title || "Module";
        document.getElementById('slide-subtitle').innerText = slide.subtitle || "";
        document.getElementById('slide-number').innerText = slide.number || String(slideIdx + 1).padStart(2, '0');
        
        const contentDiv = document.getElementById('slide-content');
        
        if (slide.type === 'mini-quiz') {
            contentDiv.innerHTML = `
                <div class="h-full flex flex-col justify-center max-w-2xl mx-auto slide-up">
                    <div class="border-l-4 border-[#6A2C3C] pl-6 py-2 mb-8">
                        <span class="text-xs font-bold text-[#999999] uppercase tracking-widest">Knowledge Check</span>
                        <h3 class="text-2xl font-serif font-bold text-[#333333] mt-2">${slide.question}</h3>
                    </div>
                    <div class="grid grid-cols-1 gap-3">
                        ${slide.options.map((opt, idx) => `
                            <button onclick="App.checkMiniQuiz(${idx})" class="group flex items-center justify-between w-full p-4 border border-[#e0e0e0] hover:border-[#6A2C3C] hover:bg-[#f9f9f9] transition text-left mq-btn rounded" data-correct="${opt.correct}">
                                <span class="font-medium text-[#666666] group-hover:text-[#333333]">${opt.text}</span>
                                <i data-lucide="circle" class="w-4 h-4 text-[#d1d5db] group-hover:text-[#6A2C3C]"></i>
                            </button>
                        `).join('')}
                    </div>
                    <div id="mq-feedback" class="hidden mt-6 p-4 bg-[#6A2C3C] text-white text-sm rounded shadow-lg slide-up">
                        <strong class="uppercase text-xs tracking-widest text-[#C0945E] block mb-1">Analysis</strong>
                        ${slide.feedback}
                    </div>
                </div>
            `;
        } else {
            contentDiv.innerHTML = `<div class="slide-up">${slide.html}</div>`;
        }

        document.getElementById('current-module-text').innerText = slide.title;
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
                <div class="text-sm text-[#666666] mb-3">Match each left term to its correct meaning on the right.</div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    ${q.pairs.map(pair => `
                        <div class="p-3 border border-[#e0e0e0] rounded bg-[#fafafa] flex itemscenter justify-between gap-3">
                            <span class="font-serif text-[#333333]">${pair.left}</span>
                            <select class="match-select border border-[#d1d5db] rounded px-2 py-1 text-sm" data-left="${pair.left}">
                                <option value="">Select</option>
                                ${rights.map(r => `<option value="${r}">${r}</option>`).join('')}
                            </select>
                        </div>
                    `).join('')}
                </div>
            `;
            actions.classList.remove('hidden');
            hint.textContent = 'Every left term must map to the correct right meaning.';
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
            const selects = document.querySelectorAll('.match-select');
            const map = new Map(q.pairs.map(p => [p.left, p.right]));
            let isCorrect = true;
            selects.forEach(sel => {
                if (sel.value !== map.get(sel.dataset.left)) isCorrect = false;
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
