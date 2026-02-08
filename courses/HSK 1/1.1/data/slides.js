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
                                <span>ä½ </span>
                                <span class="text-xs font-normal text-[#999999] mt-2 font-sans">NÇ (You)</span>
                            </div>
                            <span class="text-[#C0945E]">+</span>
                            <div class="flex flex-col items-center">
                                <span>å¿ƒ</span>
                                <span class="text-xs font-normal text-[#999999] mt-2 font-sans">XÄ«n (Heart)</span>
                            </div>
                            <span class="text-[#C0945E]">=</span>
                            <div class="flex flex-col items-center relative">
                                <span class="text-[#6A2C3C]">æ‚¨</span>
                                <div class="absolute -top-4 -right-4">
                                    <i data-lucide="sparkles" class="w-5 h-5 text-[#C0945E]"></i>
                                </div>
                                <span class="text-xs font-bold text-[#6A2C3C] mt-2 font-sans">NÃ­n</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="prose">
                    <h3 class="font-serif text-xl font-bold text-[#333333] mb-4 border-l-4 border-[#6A2C3C] pl-4">The Logic</h3>
                    <p class="text-[#666666] mb-4 text-justify">
                        Notice that <strong>NÃ­n (æ‚¨)</strong> is literally <strong>NÇ (ä½ )</strong> placed on top of <strong>Heart (å¿ƒ)</strong>. 
                    </p>
                    <p class="text-[#666666] text-justify">
                        This symbolizes "putting the other person above your own heart." It is the requisite form of address for professional settings.
                    </p>
                    <div class="mt-6 p-4 bg-[#f9f9f9] border-l-2 border-[#C0945E] text-xs text-[#555]">
                        <strong>Usage Rule:</strong> Never use "NÃ­n" for children or close friends. It creates awkward distance.
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
                            <div class="zh text-5xl font-black text-[#6A2C3C]">å¥½</div>
                            <span class="text-sm font-bold text-[#C0945E] font-serif">HÇŽo (Good)</span>
                        </div>
                        <div class="flex items-center gap-2 text-xl text-[#333333] mb-3 zh">
                            <span class="char-component px-2 rounded">å¥³ (Woman)</span> 
                            <span class="char-plus">+</span>
                            <span class="char-component px-2 rounded">å­ (Child)</span>
                        </div>
                        <p class="text-xs text-[#666666] leading-relaxed">
                            A woman holding a child represents well-being and goodness. Used in greetings like <em>NÇ hÇŽo</em>.
                        </p>
                    </div>

                    <div class="border border-[#e0e0e0] p-6 hover:shadow-lg transition-all bg-white group rounded">
                        <div class="flex justify-between items-start mb-4">
                            <div class="zh text-5xl font-black text-[#6A2C3C]">å§“</div>
                            <span class="text-sm font-bold text-[#C0945E] font-serif">XÃ¬ng (Surname)</span>
                        </div>
                        <div class="flex items-center gap-2 text-xl text-[#333333] mb-3 zh">
                            <span class="char-component px-2 rounded">å¥³ (Woman)</span> 
                            <span class="char-plus">+</span>
                            <span class="char-component px-2 rounded">ç”Ÿ (Born)</span>
                        </div>
                        <p class="text-xs text-[#666666] leading-relaxed">
                            Historically, surnames were matrilineal ("born of woman"). Now used to state one's family name.
                        </p>
                    </div>

                    <div class="border border-[#e0e0e0] p-6 hover:shadow-lg transition-all bg-white group md:col-span-2 rounded">
                        <div class="flex items-center gap-6">
                            <div class="zh text-5xl font-black text-[#6A2C3C]">å</div>
                            <div>
                                <div class="text-sm font-bold text-[#C0945E] font-serif mb-1">MÃ­ng (Name)</div>
                                <div class="flex items-center gap-2 text-sm text-[#333333] mb-2 zh">
                                    <span class="char-component px-1">å¤• (Sunset/Dark)</span> 
                                    <span class="char-plus">+</span>
                                    <span class="char-component px-1">å£ (Mouth)</span>
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
                                <span class="zh font-bold text-[#333333] text-lg">ä½  / æ‚¨</span>
                                <span class="text-[#666666] text-sm">NÇ / NÃ­n <span class="text-xs text-[#C0945E] ml-1">(You)</span></span>
                            </li>
                            <li class="vocab-card flex justify-between p-2 rounded cursor-default">
                                <span class="zh font-bold text-[#333333] text-lg">æˆ‘</span>
                                <span class="text-[#666666] text-sm">WÇ’ <span class="text-xs text-[#999999] ml-1">(I, Me)</span></span>
                            </li>
                            <li class="vocab-card flex justify-between p-2 rounded cursor-default">
                                <span class="zh font-bold text-[#333333] text-lg">è€å¸ˆ</span>
                                <span class="text-[#666666] text-sm">LÇŽoshÄ« <span class="text-xs text-[#999999] ml-1">(Teacher)</span></span>
                            </li>
                        </ul>
                        ;

                        if (typeof normalizeMandarinPayload === 'function') {
                            normalizeMandarinPayload(slides);
                        }
                                <div class="zh font-bold text-[#333333] text-lg">ä»€ä¹ˆ</div>
                                <div class="text-xs text-[#666666]">ShÃ©nme (What)</div>
                            </div>
                            <div class="vocab-card p-2 rounded">
                                <div class="zh font-bold text-[#333333] text-lg">é«˜å…´</div>
                                <div class="text-xs text-[#666666]">GÄoxÃ¬ng (Happy)</div>
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
                            <div class="g-block bg-blue-100 text-blue-800">NÇ (Subj)</div>
                            <div class="text-[#999]">+</div>
                            <div class="g-block bg-red-100 text-red-800">JiÃ o (Verb)</div>
                            <div class="text-[#999]">+</div>
                            <div class="g-block bg-green-100 text-green-800">ShÃ©nme mÃ­ngzi? (Obj)</div>
                        </div>
                        <div class="text-xs text-[#666666] italic">"You are called what name?"</div>
                    </div>
                </div>

                <div>
                    <h4 class="font-serif font-bold text-[#333333] mb-3">2. Modifier Placement</h4>
                    <p class="text-sm text-[#666666] mb-3">Adverbs like <strong>HÄ›n (Very)</strong> and <strong>YÄ› (Also)</strong> must be placed <em>before</em> the verb or adjective.</p>
                    
                    <div class="mb-4">
                        <div class="flex items-center gap-2 mb-1">
                            <span class="zh font-bold text-lg text-[#333333]">æˆ‘å¾ˆé«˜å…´</span>
                            <span class="text-xs text-[#999]">(I very happy)</span>
                        </div>
                        <div class="flex gap-1 text-xs">
                            <span class="bg-[#e0e0e0] px-2 py-1 rounded">WÇ’ (Subj)</span>
                            <span class="bg-[#C0945E] text-white px-2 py-1 rounded">HÄ›n (Adv)</span>
                            <span class="bg-white border border-[#e0e0e0] px-2 py-1 rounded">GÄoxÃ¬ng (Adj)</span>
                        </div>
                    </div>

                    <div>
                        <div class="flex items-center gap-2 mb-1">
                            <span class="zh font-bold text-lg text-[#333333]">æˆ‘ä¹Ÿå¾ˆé«˜å…´</span>
                            <span class="text-xs text-[#999]">(I also very happy)</span>
                        </div>
                        <div class="flex gap-1 text-xs">
                            <span class="bg-[#e0e0e0] px-2 py-1 rounded">WÇ’ (Subj)</span>
                            <span class="bg-[#6A2C3C] text-white px-2 py-1 rounded">YÄ› (Adv)</span>
                            <span class="bg-[#C0945E] text-white px-2 py-1 rounded">HÄ›n (Adv)</span>
                            <span class="bg-white border border-[#e0e0e0] px-2 py-1 rounded">GÄoxÃ¬ng (Adj)</span>
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
                        <div class="zh text-3xl font-bold text-[#333333] mb-2">è¯·é—®ï¼Œæ‚¨è´µå§“ï¼Ÿ</div>
                        <div class="font-mono text-sm text-[#666666] mb-2">QÇngwÃ¨n, nÃ­n guÃ¬ xÃ¬ng?</div>
                        <p class="text-xs text-[#999999] italic">
                            Lit: "Please ask, [what is] your honorable surname?"
                        </p>
                    </div>
                </div>

                <div class="grid grid-cols-3 gap-2 mb-8">
                    <div class="bg-[#f9f9f9] p-3 text-center border border-[#e0e0e0] rounded">
                        <div class="zh font-bold text-[#6A2C3C]">è¯· (QÇng)</div>
                        <div class="text-[10px] text-[#666666]">Please</div>
                    </div>
                    <div class="bg-[#f9f9f9] p-3 text-center border border-[#e0e0e0] rounded">
                        <div class="zh font-bold text-[#6A2C3C]">é—® (WÃ¨n)</div>
                        <div class="text-[10px] text-[#666666]">To Ask</div>
                    </div>
                    <div class="bg-[#fffbf0] p-3 text-center border border-[#C0945E] rounded">
                        <div class="zh font-bold text-[#C0945E]">è´µ (GuÃ¬)</div>
                        <div class="text-[10px] text-[#666666]">Honorable</div>
                    </div>
                </div>

                <div class="flex items-start gap-3 p-4 bg-red-50 rounded border border-red-100">
                    <i data-lucide="alert-triangle" class="w-5 h-5 text-red-500 shrink-0"></i>
                    <div class="text-xs text-red-800">
                        <strong>Cultural Trap:</strong> Never use <em>GuÃ¬</em> (Honorable) to refer to yourself.
                        <br>Correct Reply: "WÇ’ xÃ¬ng PÄn" (My surname is Pan).
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
                        <span class="text-3xl font-bold text-[#6A2C3C]">WÃ¡ng</span>
                        <span class="block text-xs text-[#C0945E] mt-1">(Surname)</span>
                    </div>
                    <div class="px-6 text-[#e0e0e0] text-3xl font-light">|</div>
                    <div class="text-center">
                        <span class="block text-[10px] uppercase tracking-widest text-[#999999] mb-1">Individual</span>
                        <span class="text-3xl font-bold text-[#333333]">PÃ¨i</span>
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
                            <span class="text-[#6A2C3C] font-bold">PÄn</span> 
                            <span class="text-[#333333]">LÇŽoshÄ«</span>
                            <div class="text-[10px] text-[#999999] mt-1">Surname + Teacher</div>
                        </div>
                        <div class="text-xl text-[#C0945E]">âœ”</div>
                    </div>
                     <div class="flex items-center gap-4 text-sm font-mono bg-white p-3 border border-[#e0e0e0] mt-2 opacity-50 rounded">
                        <div class="flex-1 text-center line-through">
                            <span class="text-[#333333]">LÇŽoshÄ«</span>
                            <span class="text-[#6A2C3C] font-bold">PÄn</span> 
                            <div class="text-[10px] text-[#999999] mt-1">Teacher + Surname</div>
                        </div>
                        <div class="text-xl text-[#999999]">âœ˜</div>
                    </div>
                </div>
            </div>
        `
    },

    // Slide 7: Mini Quiz
    {
        type: 'mini-quiz',
        title: 'Checkpoint',
        question: 'Which component is found at the bottom of the formal "You" (NÃ­n)?',
        number: 'Q1',
        options: [
            { text: 'KÇ’u (Mouth) - å£', correct: false },
            { text: 'XÄ«n (Heart) - å¿ƒ', correct: true },
            { text: 'RÃ©n (Person) - äºº', correct: false }
        ],
        feedback: 'Correct. Putting the other person "above your heart" creates the formal NÃ­n.'
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
                            <li class="flex justify-between"><span class="zh font-semibold">ä½  / æ‚¨</span><span>NÇ / NÃ­n â€” you / polite you</span></li>
                            <li class="flex justify-between"><span class="zh font-semibold">æˆ‘</span><span>WÇ’ â€” I / me</span></li>
                            <li class="flex justify-between"><span class="zh font-semibold">è€å¸ˆ</span><span>LÇŽoshÄ« â€” teacher</span></li>
                            <li class="flex justify-between"><span class="zh font-semibold">å…ˆç”Ÿ / å¥³å£«</span><span>XiÄnsheng / NÇšshÃ¬ â€” Mr. / Ms.</span></li>
                            <li class="flex justify-between"><span class="zh font-semibold">åŒå­¦</span><span>TÃ³ngxuÃ© â€” classmate</span></li>
                        </ul>
                    </div>
                    <div class="border border-[#e0e0e0] rounded p-4 bg-white">
                        <h4 class="text-xs uppercase tracking-widest text-[#6A2C3C] mb-3 font-bold">Actions & Essentials</h4>
                        <ul class="space-y-2">
                            <li class="flex justify-between"><span class="zh font-semibold">å«</span><span>JiÃ o â€” to be called</span></li>
                            <li class="flex justify-between"><span class="zh font-semibold">å§“ / è´µå§“</span><span>XÃ¬ng / GuÃ¬xÃ¬ng â€” surname / honorable surname</span></li>
                            <li class="flex justify-between"><span class="zh font-semibold">è®¤è¯†</span><span>RÃ¨nshi â€” to meet / know</span></li>
                            <li class="flex justify-between"><span class="zh font-semibold">è¯· / é—®</span><span>QÇng / WÃ¨n â€” please / to ask</span></li>
                            <li class="flex justify-between"><span class="zh font-semibold">å¾ˆ / ä¹Ÿ</span><span>HÄ›n / YÄ› â€” very / also</span></li>
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
                    <p class="zh text-xl font-semibold text-[#6A2C3C] mb-1">ä½ å«ä»€ä¹ˆåå­—ï¼Ÿ</p>
                    <p class="text-sm text-[#666666] mb-2">NÇ jiÃ o shÃ©nme mÃ­ngzi? â€” What is your name?</p>
                    <p class="text-xs text-[#777777]">Structure: Subject + å« + ä»€ä¹ˆåå­— (you are called what name).</p>
                </div>
                <div class="border-l-4 border-[#C0945E] pl-4">
                    <h4 class="font-serif font-bold text-[#333333] mb-2">Formal (Elders / Teachers / Clients)</h4>
                    <p class="zh text-xl font-semibold text-[#6A2C3C] mb-1">è¯·é—®ï¼Œæ‚¨è´µå§“ï¼Ÿ</p>
                    <p class="text-sm text-[#666666] mb-2">QÇngwÃ¨n, nÃ­n guÃ¬ xÃ¬ng? â€” May I ask, what is your honorable surname?</p>
                    <ul class="text-xs text-[#777777] space-y-1">
                        <li>è¯·é—® = may I ask (polite opener)</li>
                        <li>è´µ = honorable; never used to describe your own surname</li>
                        <li>Answer pattern: æˆ‘å§“ + Surname (e.g., æˆ‘å§“çŽ‹)</li>
                    </ul>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div class="p-3 bg-[#f9f9f9] border border-[#e0e0e0] rounded">
                        <div class="zh font-semibold text-[#6A2C3C]">å¾ˆé«˜å…´è®¤è¯†ä½ /æ‚¨ã€‚</div>
                        <div class="text-xs text-[#777777]">HÄ›n gÄoxÃ¬ng rÃ¨nshi nÇ / nÃ­n. â€” Nice to meet you (formal/informal).</div>
                    </div>
                    <div class="p-3 bg-[#f9f9f9] border border-[#e0e0e0] rounded">
                        <div class="zh font-semibold text-[#6A2C3C]">è®¤è¯†ä½ æˆ‘ä¹Ÿå¾ˆé«˜å…´ã€‚</div>
                        <div class="text-xs text-[#777777]">RÃ¨nshi nÇ wÇ’ yÄ› hÄ›n gÄoxÃ¬ng. â€” Meeting you, I am also very happy (uses ä¹Ÿ).</div>
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
                        <div class="zh text-3xl font-bold text-[#6A2C3C]">çŽ‹</div>
                        <div class="text-xs text-[#C0945E] mt-1">WÃ¡ng (Surname)</div>
                    </div>
                    <div class="text-center border border-[#e0e0e0] rounded p-4 bg-white flex-1">
                        <div class="text-[10px] uppercase tracking-widest text-[#999999]">Individual</div>
                        <div class="zh text-3xl font-bold text-[#333333]">ä½©</div>
                        <div class="text-xs text-[#999999] mt-1">PÃ¨i (Given)</div>
                    </div>
                </div>
                <div class="p-4 bg-[#fff7ed] border border-[#f3d8b0] rounded text-sm text-[#8a5a32]">
                    <strong class="text-[#6A2C3C]">Professional address:</strong> Say å§“ + Title â†’ e.g., çŽ‹è€å¸ˆ (WÃ¡ng LÇŽoshÄ«). Do not reverse.
                </div>
                <div class="text-xs text-[#777777]">Common surnames: æŽ, åˆ˜, çŽ‹, å¼ . You will see these patterns in matching / ordering questions.</div>
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
                    <p class="zh text-lg font-semibold text-[#6A2C3C]">æ‚¨å¥½ï¼</p>
                    <p class="text-xs text-[#777777] mb-2">NÃ­n hÇŽo â€” Hello (polite)</p>
                    <p class="zh text-lg font-semibold text-[#6A2C3C]">è¯·é—®ï¼Œæ‚¨è´µå§“ï¼Ÿ</p>
                    <p class="text-xs text-[#777777] mb-2">QÇngwÃ¨n, nÃ­n guÃ¬ xÃ¬ng? â€” May I ask your honorable surname?</p>
                    <p class="zh text-lg font-semibold text-[#6A2C3C]">æˆ‘å§“æ½˜ã€‚ä½ å«ä»€ä¹ˆåå­—ï¼Ÿ</p>
                    <p class="text-xs text-[#777777] mb-2">WÇ’ xÃ¬ng PÄn. NÇ jiÃ o shÃ©nme mÃ­ngzi? â€” My surname is Pan. What is your name?</p>
                    <p class="zh text-lg font-semibold text-[#6A2C3C]">æˆ‘å«å’–å–±ã€‚æ½˜è€å¸ˆï¼Œå¾ˆé«˜å…´è®¤è¯†æ‚¨ï¼</p>
                    <p class="text-xs text-[#777777]">WÇ’ jiÃ o GÄlÃ­. PÄn lÇŽoshÄ«, hÄ›n gÄoxÃ¬ng rÃ¨nshi nÃ­n! â€” I am called Gali. Nice to meet you!</p>
                </div>
                <div class="p-4 bg-[#f9f9f9] border border-[#e0e0e0] rounded text-sm">
                    <strong class="text-[#6A2C3C]">Try it:</strong> Introduce yourself with æˆ‘å« + Name, then reply politely with è®¤è¯†ä½ æˆ‘ä¹Ÿå¾ˆé«˜å…´ using ä¹Ÿ to show reciprocity.
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
            { text: 'NÇ jiÃ o shÃ©nme mÃ­ngzi?', correct: false },
            { text: 'QÇngwÃ¨n, nÃ­n guÃ¬ xÃ¬ng?', correct: true },
            { text: 'NÇ hÇŽo ma?', correct: false }
        ],
        feedback: 'Use è¯·é—® to open politely and è´µå§“ to show respect. This matches the assessment item on honorable surname.'
    },

    // Slide 13: Pre-Quiz 2
    {
        type: 'mini-quiz',
        title: 'Pre-Quiz: Order & Adverbs',
        question: 'Which sentence correctly uses ä¹Ÿ (also) and preserves S-V-O order?',
        number: 'Q3',
        options: [
            { text: 'æˆ‘å¾ˆä¹Ÿé«˜å…´', correct: false },
            { text: 'æˆ‘ä¹Ÿå¾ˆé«˜å…´', correct: true },
            { text: 'ä¹Ÿæˆ‘å¾ˆé«˜å…´', correct: false }
        ],
        feedback: 'Adverbs like ä¹Ÿ and å¾ˆ come before the adjective/verb. This maps to the quiz item about word order.'
    }
];

(() => {
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

    slides.forEach((s) => normalizeValue(s));
})();
