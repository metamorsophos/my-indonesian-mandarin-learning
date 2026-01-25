const slides = [
    // Slide 1: Long Time No See
    {
        title: 'Greeting an Old Friend',
        subtitle: 'Reconnecting After Time',
        number: '01',
        html: `
           <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center h-full">
                <div>
                    <p class="text-[#666666] mb-6 leading-relaxed">
                        When you meet someone you haven't seen in a while, the natural greeting is not the formal "你好" but something more expressive that acknowledges the time apart.
                    </p>
                    
                    <div class="bg-[#fffbf0] border border-[#e0e0e0] p-8 text-center relative rounded shadow-sm">
                        <div class="absolute top-2 left-2 text-[10px] text-[#C0945E] uppercase tracking-widest font-bold">Key Phrase</div>
                        
                        <div class="flex items-center justify-center gap-4 text-4xl md:text-5xl font-black text-[#333333] mb-2 zh">
                            <div class="flex flex-col items-center">
                                <span>好久不见</span>
                                <span class="text-xs font-normal text-[#999999] mt-2 font-sans">Hǎo jiǔ bú jiàn</span>
                            </div>
                        </div>
                        <p class="text-sm text-[#666666] mt-4">Literally: "Good-long-not-see"</p>
                    </div>
                </div>

                <div class="prose">
                    <h3 class="font-serif text-xl font-bold text-[#333333] mb-4 border-l-4 border-[#6A2C3C] pl-4">Usage & Context</h3>
                    <p class="text-[#666666] mb-4 text-justify">
                        This phrase is used when you see someone you haven't met with for a <strong>significant time</strong>. It's warm, natural, and shows genuine pleasure at reconnecting.
                    </p>
                    <p class="text-[#666666] text-justify">
                        It's much more common than repeatedly saying "你好" and works for both casual friends and professional contexts where time has passed.
                    </p>
                    <div class="mt-6 p-4 bg-[#f9f9f9] border-l-2 border-[#C0945E] text-xs text-[#555]">
                        <strong>Perfect Reply:</strong> "是啊，好久不见!" (Yes, it's been a while!) or simply "好久不见!" back to them.
                    </div>
                </div>
           </div>
        `
    },
    
    // Slide 2: Recent Well-Being
    {
        title: 'How Have You Been?',
        subtitle: 'Asking About Recent Life',
        number: '02',
        html: `
            <div class="space-y-8">
                <p class="text-[#666666] max-w-2xl">When greeting someone recently, the focus shifts from acknowledging time passed to inquiring about their current state.</p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    <div class="border border-[#e0e0e0] p-6 hover:shadow-lg transition-all bg-white group rounded">
                        <div class="flex justify-between items-start mb-4">
                            <div class="zh text-5xl font-black text-[#6A2C3C]">最近</div>
                            <span class="text-sm font-bold text-[#C0945E] font-serif">Zuì jìn</span>
                        </div>
                        <p class="text-lg text-[#333333] mb-3 zh font-bold">最近怎么样?</p>
                        <p class="text-xs text-[#666666] leading-relaxed">
                            "How have [you/things] been recently?" Used to ask about someone's recent state or life situation.
                        </p>
                    </div>

                    <div class="border border-[#e0e0e0] p-6 hover:shadow-lg transition-all bg-white group rounded">
                        <div class="flex justify-between items-start mb-4">
                            <div class="zh text-5xl font-black text-[#6A2C3C]">不错</div>
                            <span class="text-sm font-bold text-[#C0945E] font-serif">Bú cuò</span>
                        </div>
                        <p class="text-lg text-[#333333] mb-3 zh font-bold">不错!</p>
                        <p class="text-xs text-[#666666] leading-relaxed">
                            "Not bad!" A natural, enthusiastic response indicating things are going well. Literally: "no mistake."
                        </p>
                    </div>

                    <div class="border border-[#e0e0e0] p-6 hover:shadow-lg transition-all bg-white md:col-span-2 rounded">
                        <div class="flex items-center gap-4 mb-3">
                            <div class="zh text-3xl font-black text-[#6A2C3C]">很好</div>
                            <div>
                                <div class="text-sm font-bold text-[#C0945E] font-serif mb-1">Hěn hǎo</div>
                                <p class="text-xs text-[#666666]">Very good / I'm doing well</p>
                            </div>
                        </div>
                        <p class="text-xs text-[#666666] leading-relaxed">
                            A direct, positive response to "怎么样?" Shows contentment and well-being.
                        </p>
                    </div>
                </div>

                <div class="bg-[#f0f5f9] p-4 border border-[#dfe3ff] rounded">
                    <p class="text-xs font-bold text-[#333333] uppercase tracking-widest mb-2">Conversation Pattern</p>
                    <div class="space-y-2 text-xs text-[#666666]">
                        <p><strong>A:</strong> <span class="zh">最近怎么样?</span> (How have you been recently?)</p>
                        <p><strong>B:</strong> <span class="zh">不错，你呢?</span> (Not bad, how about you?)</p>
                    </div>
                </div>
            </div>
        `
    },

    // Slide 3: Vocabulary - Professions
    {
        title: 'Professions & Identities',
        subtitle: 'Essential Occupations',
        number: '03',
        html: `
            <div class="space-y-6">
                <p class="text-[#666666] text-sm">When introducing yourself, stating your profession is a key element. These are the most common HSK 1 professions.</p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    <div class="bg-white border border-[#e0e0e0] p-4 rounded">
                        <h4 class="text-xs font-bold text-[#6A2C3C] uppercase tracking-widest mb-3 border-b pb-2">Professions</h4>
                        <ul class="space-y-2">
                            <li class="vocab-card flex justify-between p-2 rounded cursor-default">
                                <span class="zh font-bold text-[#333333] text-lg">学生</span>
                                <span class="text-[#666666] text-sm">Xuésheng <span class="text-xs text-[#C0945E] ml-1">(Student)</span></span>
                            </li>
                            <li class="vocab-card flex justify-between p-2 rounded cursor-default">
                                <span class="zh font-bold text-[#333333] text-lg">老师</span>
                                <span class="text-[#666666] text-sm">Lǎoshī <span class="text-xs text-[#999999] ml-1">(Teacher)</span></span>
                            </li>
                            <li class="vocab-card flex justify-between p-2 rounded cursor-default">
                                <span class="zh font-bold text-[#333333] text-lg">医生</span>
                                <span class="text-[#666666] text-sm">Yīshēng <span class="text-xs text-[#999999] ml-1">(Doctor)</span></span>
                            </li>
                            <li class="vocab-card flex justify-between p-2 rounded cursor-default">
                                <span class="zh font-bold text-[#333333] text-lg">警察</span>
                                <span class="text-[#666666] text-sm">Jǐngchá <span class="text-xs text-[#999999] ml-1">(Police Officer)</span></span>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-white border border-[#e0e0e0] p-4 rounded">
                        <h4 class="text-xs font-bold text-[#6A2C3C] uppercase tracking-widest mb-3 border-b pb-2">Essential Verbs</h4>
                        <ul class="space-y-2">
                            <li class="vocab-card flex justify-between p-2 rounded cursor-default">
                                <span class="zh font-bold text-[#333333] text-lg">是</span>
                                <span class="text-[#666666] text-sm">Shì <span class="text-xs text-[#999999] ml-1">(To be)</span></span>
                            </li>
                            <li class="vocab-card flex justify-between p-2 rounded cursor-default">
                                <span class="zh font-bold text-[#333333] text-lg">叫</span>
                                <span class="text-[#666666] text-sm">Jiào <span class="text-xs text-[#999999] ml-1">(To be called)</span></span>
                            </li>
                            <li class="vocab-card flex justify-between p-2 rounded cursor-default">
                                <span class="zh font-bold text-[#333333] text-lg">认识</span>
                                <span class="text-[#666666] text-sm">Rènshi <span class="text-xs text-[#999999] ml-1">(To know/meet)</span></span>
                            </li>
                            <li class="vocab-card flex justify-between p-2 rounded cursor-default">
                                <span class="zh font-bold text-[#333333] text-lg">吗</span>
                                <span class="text-[#666666] text-sm">Ma <span class="text-xs text-[#999999] ml-1">(Question particle)</span></span>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-white border border-[#e0e0e0] p-4 md:col-span-2 rounded">
                        <h4 class="text-xs font-bold text-[#6A2C3C] uppercase tracking-widest mb-3 border-b pb-2">Modifiers & Utilities</h4>
                        <div class="grid grid-cols-3 gap-4">
                            <div class="vocab-card p-2 rounded">
                                <div class="zh font-bold text-[#333333] text-lg">很</div>
                                <div class="text-xs text-[#666666]">Hěn (Very)</div>
                            </div>
                            <div class="vocab-card p-2 rounded">
                                <div class="zh font-bold text-[#333333] text-lg">也</div>
                                <div class="text-xs text-[#666666]">Yě (Also)</div>
                            </div>
                            <div class="vocab-card p-2 rounded">
                                <div class="zh font-bold text-[#333333] text-lg">不</div>
                                <div class="text-xs text-[#666666]">Bù (Not)</div>
                            </div>
                            <div class="vocab-card p-2 rounded">
                                <div class="zh font-bold text-[#333333] text-lg">什么</div>
                                <div class="text-xs text-[#666666]">Shénme (What)</div>
                            </div>
                            <div class="vocab-card p-2 rounded">
                                <div class="zh font-bold text-[#333333] text-lg">呢</div>
                                <div class="text-xs text-[#666666]">Ne (And you?)</div>
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

    // Slide 4: The 是 Verb
    {
        title: 'The "是" Verb',
        subtitle: 'Statement of Being & Identity',
        number: '04',
        html: `
            <div class="flex flex-col h-full space-y-8">
                
                <div>
                    <h4 class="font-serif font-bold text-[#333333] mb-3">What is 是 (Shì)?</h4>
                    <p class="text-sm text-[#666666] mb-3">The verb 是 connects a subject to a noun describing identity, profession, or nationality. Unlike English "to be," it has unique Chinese characteristics.</p>
                    
                    <div class="bg-[#f9f9f9] p-4 border border-[#e0e0e0] rounded">
                        <p class="text-sm font-bold text-[#333333] mb-2">⚡ Key Differences from English:</p>
                        <ul class="text-xs text-[#666666] space-y-1 ml-4">
                            <li>✓ No tense changes (always 是)</li>
                            <li>✓ No plural changes (same for all subjects)</li>
                            <li>✓ Links subject + profession/identity ONLY</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h4 class="font-serif font-bold text-[#333333] mb-3">Basic Structure</h4>
                    
                    <div class="mb-4">
                        <div class="flex items-center gap-2 mb-2">
                            <span class="zh font-bold text-lg text-[#333333]">我是老师</span>
                            <span class="text-xs text-[#999]">(I am a teacher)</span>
                        </div>
                        <div class="flex gap-1 text-xs">
                            <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded">我 (Subject)</span>
                            <span class="bg-red-100 text-red-800 px-2 py-1 rounded">是 (Verb)</span>
                            <span class="bg-green-100 text-green-800 px-2 py-1 rounded">老师 (Profession)</span>
                        </div>
                    </div>

                    <div class="mb-4">
                        <div class="flex items-center gap-2 mb-2">
                            <span class="zh font-bold text-lg text-[#333333]">她是学生</span>
                            <span class="text-xs text-[#999]">(She is a student)</span>
                        </div>
                        <div class="flex gap-1 text-xs">
                            <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded">她 (Subject)</span>
                            <span class="bg-red-100 text-red-800 px-2 py-1 rounded">是 (Verb)</span>
                            <span class="bg-green-100 text-green-800 px-2 py-1 rounded">学生 (Identity)</span>
                        </div>
                    </div>
                </div>

                <div class="bg-[#fdf6f0] p-4 border border-[#f3e4d6] rounded">
                    <p class="text-[10px] font-bold uppercase tracking-widest text-[#6A2C3C] mb-2">Common Mistakes</p>
                    <p class="text-xs text-[#666666]">❌ Don't say "我是很高兴" (I am very happy). Use 我很高兴 instead.</p>
                    <p class="text-xs text-[#666666] mt-1">✓ 是 only works with nouns, not adjectives like 高兴.</p>
                </div>
            </div>
        `
    },

    // Slide 5: Yes/No Questions with 吗
    {
        title: 'Asking Yes/No Questions',
        subtitle: 'The 吗 (Ma) Particle',
        number: '05',
        html: `
            <div class="flex flex-col h-full justify-center max-w-2xl mx-auto">
                <div class="border-l-4 border-[#6A2C3C] pl-6 py-2 mb-8">
                    <h3 class="text-2xl font-serif font-bold text-[#333333]">The Question Particle 吗</h3>
                    <p class="text-[#666666] text-sm mt-2">The simplest way to ask a yes/no question in Mandarin is to add 吗 to the end of a statement.</p>
                </div>

                <div class="mb-8 relative group">
                    <div class="absolute -left-4 top-0 bottom-0 w-1 bg-[#C0945E] group-hover:bg-[#6A2C3C] transition-colors"></div>
                    <div class="pl-4">
                        <span class="text-[10px] font-bold uppercase tracking-widest text-[#C0945E] mb-1 block">How It Works</span>
                        <div class="zh text-3xl font-bold text-[#333333] mb-2">你是学生吗?</div>
                        <div class="font-mono text-sm text-[#666666] mb-2">Nǐ shì xuésheng ma?</div>
                        <p class="text-xs text-[#999999] italic">
                            Lit: "You are a student [question mark]?"
                        </p>
                    </div>
                </div>

                <div class="grid grid-cols-4 gap-2 mb-8">
                    <div class="bg-[#f9f9f9] p-3 text-center border border-[#e0e0e0] rounded">
                        <div class="zh font-bold text-[#6A2C3C]">你</div>
                        <div class="text-[10px] text-[#666666]">You</div>
                    </div>
                    <div class="bg-[#f9f9f9] p-3 text-center border border-[#e0e0e0] rounded">
                        <div class="zh font-bold text-[#6A2C3C]">是</div>
                        <div class="text-[10px] text-[#666666]">Are</div>
                    </div>
                    <div class="bg-[#f9f9f9] p-3 text-center border border-[#e0e0e0] rounded">
                        <div class="zh font-bold text-[#6A2C3C]">学生</div>
                        <div class="text-[10px] text-[#666666]">Student</div>
                    </div>
                    <div class="bg-[#fffbf0] p-3 text-center border border-[#C0945E] rounded">
                        <div class="zh font-bold text-[#C0945E]">吗</div>
                        <div class="text-[10px] text-[#666666]">?</div>
                    </div>
                </div>

                <div class="space-y-3 mb-6">
                    <div class="bg-blue-50 p-3 rounded border border-blue-100">
                        <p class="text-xs font-bold text-blue-900 mb-1">Positive Reply:</p>
                        <p class="text-sm text-blue-800 zh">是的，我是学生。(Yes, I am a student.)</p>
                    </div>
                    <div class="bg-amber-50 p-3 rounded border border-amber-100">
                        <p class="text-xs font-bold text-amber-900 mb-1">Negative Reply:</p>
                        <p class="text-sm text-amber-800 zh">不，我不是学生。(No, I am not a student.)</p>
                    </div>
                </div>

                <div class="text-xs text-[#666666] bg-[#f0f5f9] p-3 rounded border border-[#dfe3ff]">
                    <strong>🎯 Quick Pattern:</strong> Statement + 吗 = Question. Remove 吗 and change the sense for the reply.
                </div>
            </div>
        `
    },

    // Slide 6: Negation with 不
    {
        title: 'Saying "Not"',
        subtitle: 'Negation with 不 (Bù)',
        number: '06',
        html: `
            <div class="space-y-8">
                <p class="text-[#666666] max-w-2xl">Negation in Mandarin is straightforward: place 不 directly before the verb or adjective you want to negate.</p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    <div class="border border-[#e0e0e0] p-6 hover:shadow-lg transition-all bg-white rounded">
                        <div class="flex justify-between items-start mb-4">
                            <div class="zh text-5xl font-black text-[#6A2C3C]">不是</div>
                            <span class="text-sm font-bold text-[#C0945E] font-serif">Bú shì</span>
                        </div>
                        <div class="text-lg text-[#333333] mb-3 zh font-bold">我不是警察</div>
                        <p class="text-xs text-[#666666] leading-relaxed">
                            "I am not a police officer." Negates the verb 是.
                        </p>
                    </div>

                    <div class="border border-[#e0e0e0] p-6 hover:shadow-lg transition-all bg-white rounded">
                        <div class="flex justify-between items-start mb-4">
                            <div class="zh text-5xl font-black text-[#6A2C3C]">不好</div>
                            <span class="text-sm font-bold text-[#C0945E] font-serif">Bù hǎo</span>
                        </div>
                        <div class="text-lg text-[#333333] mb-3 zh font-bold">最近不好</div>
                        <p class="text-xs text-[#666666] leading-relaxed">
                            "Recently [it's] not good." Negates the adjective 好.
                        </p>
                    </div>

                    <div class="border border-[#e0e0e0] p-6 hover:shadow-lg transition-all bg-white md:col-span-2 rounded">
                        <h4 class="text-sm font-bold text-[#333333] mb-3">⚠️ Important: Tone Changes</h4>
                        <div class="flex items-start gap-3">
                            <div>
                                <p class="text-xs text-[#666666] mb-2">When 不 comes before a 4th tone (falling tone), it changes to 2nd tone:</p>
                                <p class="text-sm zh mb-2"><span class="text-[#C0945E]">不是</span> is pronounced "BÚ shì" (not "Bù shì")</p>
                                <p class="text-xs text-[#999999]">Listen carefully to distinguish this natural pronunciation pattern!</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-[#f0f5f9] p-4 border border-[#dfe3ff] rounded">
                    <p class="text-xs font-bold text-[#333333] uppercase tracking-widest mb-2">More Examples</p>
                    <div class="space-y-2 text-xs text-[#666666]">
                        <p><span class="zh">他不是医生，他是警察。</span> (He is not a doctor; he is a police officer.)</p>
                        <p><span class="zh">她不高兴。</span> (She is not happy.)</p>
                    </div>
                </div>
            </div>
        `
    },

    // Slide 7: Reciprocal Questions with 呢
    {
        title: 'Reciprocal Questions',
        subtitle: 'Using 呢 (Ne)',
        number: '07',
        html: `
            <div class="flex flex-col h-full space-y-8">
                
                <div>
                    <h4 class="font-serif font-bold text-[#333333] mb-3">What Does 呢 Do?</h4>
                    <p class="text-sm text-[#666666] mb-3">The particle 呢 turns a conversation back to the listener. It's like saying "And you?" or "What about you?" in English.</p>
                    
                    <div class="bg-[#f9f9f9] p-4 border border-[#e0e0e0] rounded">
                        <p class="text-sm font-bold text-[#333333] mb-2">Key Function:</p>
                        <ul class="text-xs text-[#666666] space-y-1 ml-4">
                            <li>✓ Turns the conversation to the listener</li>
                            <li>✓ Shows interest in reciprocal information</li>
                            <li>✓ Can omit the subject (understood from context)</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h4 class="font-serif font-bold text-[#333333] mb-3">Usage Examples</h4>
                    
                    <div class="mb-4">
                        <div class="flex items-center gap-2 mb-2">
                            <span class="zh font-bold text-lg text-[#333333]">A: 我是老师。你呢?</span>
                            <span class="text-xs text-[#999]">(I'm a teacher. How about you?)</span>
                        </div>
                        <div class="bg-[#f0f5f9] p-3 rounded border border-[#dfe3ff]">
                            <p class="text-xs text-[#666666]">Notice: The subject 你 is optional here - it's understood from context.</p>
                        </div>
                    </div>

                    <div class="mb-4">
                        <div class="flex items-center gap-2 mb-2">
                            <span class="zh font-bold text-lg text-[#333333]">B: 我是学生。</span>
                            <span class="text-xs text-[#999]">(I'm a student.)</span>
                        </div>
                    </div>
                </div>

                <div class="bg-[#fffbf0] p-4 border border-[#f3e4d6] rounded">
                    <p class="text-[10px] font-bold uppercase tracking-widest text-[#6A2C3C] mb-2">呢 vs 吗</p>
                    <div class="text-xs text-[#666666] space-y-1">
                        <p><strong>吗</strong> creates a direct yes/no question: <span class="zh">你是学生吗?</span></p>
                        <p><strong>呢</strong> is conversational, reciprocal: <span class="zh">我是学生。你呢?</span></p>
                    </div>
                </div>
            </div>
        `
    },

    // Slide 8: Common Dialogues
    {
        title: 'Real Conversations',
        subtitle: 'Practical Dialogue Patterns',
        number: '08',
        html: `
            <div class="space-y-6">
                <p class="text-[#666666] text-sm">Study these natural conversation flows that combine greetings, introductions, and professions.</p>

                <div class="space-y-4">
                    
                    <div class="border border-[#e0e0e0] p-6 rounded bg-white">
                        <h4 class="text-sm font-bold text-[#333333] mb-4 border-b pb-2">Meeting an Old Friend</h4>
                        <div class="space-y-2 text-sm">
                            <div class="flex gap-3">
                                <span class="text-[#C0945E] font-bold min-w-[60px]">A:</span>
                                <span class="zh">好久不见！最近怎么样?</span>
                            </div>
                            <div class="text-xs text-[#999999] ml-[72px] mb-2">Long time no see! How have you been recently?</div>
                            
                            <div class="flex gap-3">
                                <span class="text-[#6A2C3C] font-bold min-w-[60px]">B:</span>
                                <span class="zh">不错！你呢?</span>
                            </div>
                            <div class="text-xs text-[#999999] ml-[72px]">Not bad! How about you?</div>
                        </div>
                    </div>

                    <div class="border border-[#e0e0e0] p-6 rounded bg-white">
                        <h4 class="text-sm font-bold text-[#333333] mb-4 border-b pb-2">Professional Introduction</h4>
                        <div class="space-y-2 text-sm">
                            <div class="flex gap-3">
                                <span class="text-[#C0945E] font-bold min-w-[60px]">A:</span>
                                <span class="zh">你好！你是老师吗?</span>
                            </div>
                            <div class="text-xs text-[#999999] ml-[72px] mb-2">Hello! Are you a teacher?</div>
                            
                            <div class="flex gap-3">
                                <span class="text-[#6A2C3C] font-bold min-w-[60px]">B:</span>
                                <span class="zh">不，我是医生。你呢?</span>
                            </div>
                            <div class="text-xs text-[#999999] ml-[72px]">No, I'm a doctor. How about you?</div>
                            
                            <div class="flex gap-3">
                                <span class="text-[#C0945E] font-bold min-w-[60px]">A:</span>
                                <span class="zh">我是警察。</span>
                            </div>
                            <div class="text-xs text-[#999999] ml-[72px]">I'm a police officer.</div>
                        </div>
                    </div>

                    <div class="border border-[#e0e0e0] p-6 rounded bg-white">
                        <h4 class="text-sm font-bold text-[#333333] mb-4 border-b pb-2">Casual Peer Introduction</h4>
                        <div class="space-y-2 text-sm">
                            <div class="flex gap-3">
                                <span class="text-[#C0945E] font-bold min-w-[60px]">A:</span>
                                <span class="zh">你最近怎么样?</span>
                            </div>
                            <div class="text-xs text-[#999999] ml-[72px] mb-2">How are you doing recently?</div>
                            
                            <div class="flex gap-3">
                                <span class="text-[#6A2C3C] font-bold min-w-[60px]">B:</span>
                                <span class="zh">很好。我是学生。你呢?</span>
                            </div>
                            <div class="text-xs text-[#999999] ml-[72px]">Very well. I'm a student. How about you?</div>
                        </div>
                    </div>

                </div>
            </div>
        `
    },

    // Slide 9: Grammar Summary
    {
        title: 'Grammar Patterns',
        subtitle: 'Structures from This Module',
        number: '09',
        html: `
            <div class="space-y-8">
                <p class="text-[#666666] text-sm">A summary of the key grammatical structures you've learned in this module.</p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    <div class="border border-[#e0e0e0] p-6 rounded bg-[#fffbf0]">
                        <h4 class="text-sm font-bold text-[#333333] mb-4">Pattern 1: Identity with 是</h4>
                        <div class="space-y-3">
                            <div>
                                <p class="text-xs text-[#999999] mb-1">Structure: Subject + 是 + Profession</p>
                                <p class="zh text-sm font-bold text-[#333333]">我是老师</p>
                                <p class="text-xs text-[#666666]">I am a teacher</p>
                            </div>
                            <div class="text-xs text-[#666666] bg-white p-2 rounded border border-[#e0e0e0]">
                                Also: 他是医生 / 她不是警察 / 你是学生吗?
                            </div>
                        </div>
                    </div>

                    <div class="border border-[#e0e0e0] p-6 rounded bg-[#fffbf0]">
                        <h4 class="text-sm font-bold text-[#333333] mb-4">Pattern 2: Yes/No Questions</h4>
                        <div class="space-y-3">
                            <div>
                                <p class="text-xs text-[#999999] mb-1">Structure: Statement + 吗</p>
                                <p class="zh text-sm font-bold text-[#333333]">你是学生吗?</p>
                                <p class="text-xs text-[#666666]">Are you a student?</p>
                            </div>
                            <div class="text-xs text-[#666666] bg-white p-2 rounded border border-[#e0e0e0]">
                                Also: 你最近怎么样吗?
                            </div>
                        </div>
                    </div>

                    <div class="border border-[#e0e0e0] p-6 rounded bg-[#f0f5f9]">
                        <h4 class="text-sm font-bold text-[#333333] mb-4">Pattern 3: Negation with 不</h4>
                        <div class="space-y-3">
                            <div>
                                <p class="text-xs text-[#999999] mb-1">Structure: Subject + 不 + Verb/Adj</p>
                                <p class="zh text-sm font-bold text-[#333333]">我不是警察</p>
                                <p class="text-xs text-[#666666]">I am not a police officer</p>
                            </div>
                            <div class="text-xs text-[#666666] bg-white p-2 rounded border border-[#e0e0e0]">
                                Also: 我不高兴 / 他不认识她
                            </div>
                        </div>
                    </div>

                    <div class="border border-[#e0e0e0] p-6 rounded bg-[#f0f5f9]">
                        <h4 class="text-sm font-bold text-[#333333] mb-4">Pattern 4: Reciprocal with 呢</h4>
                        <div class="space-y-3">
                            <div>
                                <p class="text-xs text-[#999999] mb-1">Structure: Subject + [Info]. 呢?</p>
                                <p class="zh text-sm font-bold text-[#333333]">我是学生。你呢?</p>
                                <p class="text-xs text-[#666666]">I'm a student. How about you?</p>
                            </div>
                            <div class="text-xs text-[#666666] bg-white p-2 rounded border border-[#e0e0e0]">
                                Also: 最近很好。你呢?
                            </div>
                        </div>
                    </div>

                </div>

                <div class="bg-[#fdf6f0] p-4 border border-[#f3e4d6] rounded">
                    <p class="text-xs font-bold text-[#6A2C3C] uppercase tracking-widest mb-2">Key Rule</p>
                    <p class="text-xs text-[#666666]">In Mandarin, question formation doesn't change word order. Simply add 吗 to make a statement into a question, or use 呢 for reciprocal inquiry.</p>
                </div>
            </div>
        `
    },

    // Slide 10: Pronunciation Tips
    {
        title: 'Pronunciation Guide',
        subtitle: 'Key Sounds in This Module',
        number: '10',
        html: `
            <div class="space-y-6">
                <p class="text-[#666666] text-sm">Master these challenging pronunciation points from Module 1.2.</p>

                <div class="space-y-4">
                    
                    <div class="border border-[#e0e0e0] p-4 rounded hover:shadow-lg transition-all">
                        <div class="flex justify-between items-start mb-3">
                            <div class="zh text-3xl font-bold text-[#6A2C3C]">学生</div>
                            <span class="text-xs font-mono text-[#C0945E]">xuésheng</span>
                        </div>
                        <p class="text-xs text-[#666666] mb-2">The key is the "ue" sound - like "ü" in French "tu" combined with "eh"</p>
                        <div class="bg-[#f0f5f9] p-2 rounded text-xs text-[#555]">Listen: <strong>XUE</strong>-shung (Second tone on first syllable)</div>
                    </div>

                    <div class="border border-[#e0e0e0] p-4 rounded hover:shadow-lg transition-all">
                        <div class="flex justify-between items-start mb-3">
                            <div class="zh text-3xl font-bold text-[#6A2C3C]">医生</div>
                            <span class="text-xs font-mono text-[#C0945E]">yīshēng</span>
                        </div>
                        <p class="text-xs text-[#666666] mb-2">Both are high tones. "Yi" = "ee" sound with lips relaxed</p>
                        <div class="bg-[#f0f5f9] p-2 rounded text-xs text-[#555]">Listen: <strong>YEE</strong>-shung (Both high tones)</div>
                    </div>

                    <div class="border border-[#e0e0e0] p-4 rounded hover:shadow-lg transition-all">
                        <div class="flex justify-between items-start mb-3">
                            <div class="zh text-3xl font-bold text-[#6A2C3C]">不</div>
                            <span class="text-xs font-mono text-[#C0945E]">bù / bú</span>
                        </div>
                        <p class="text-xs text-[#666666] mb-2">Tone changes! It's 4th tone, but before 4th tone it becomes 2nd tone</p>
                        <div class="bg-[#fdf6f0] p-2 rounded text-xs text-[#555]"><strong>⚠️</strong> 不是 = "bú shì" (not "bù shì")</div>
                    </div>

                    <div class="border border-[#e0e0e0] p-4 rounded hover:shadow-lg transition-all">
                        <div class="flex justify-between items-start mb-3">
                            <div class="zh text-3xl font-bold text-[#6A2C3C]">好久不见</div>
                            <span class="text-xs font-mono text-[#C0945E]">hǎo jiǔ bú jiàn</span>
                        </div>
                        <p class="text-xs text-[#666666] mb-2">Common phrase - practice the tone flow: 3-3-2-4</p>
                        <div class="bg-[#f0f5f9] p-2 rounded text-xs text-[#555]">Listen: HOW-jee-OO bú-JYENN (natural rhythm)</div>
                    </div>

                </div>

                <div class="bg-[#f0f5f9] p-4 border border-[#dfe3ff] rounded">
                    <p class="text-xs font-bold text-[#333333] uppercase tracking-widest mb-2">💡 Pro Tip</p>
                    <p class="text-xs text-[#666666]">Record yourself saying these phrases and compare with native speakers. Tone accuracy is crucial in Mandarin!</p>
                </div>
            </div>
        `
    },

    // Slide 11: Practice Scenarios
    {
        title: 'Practice Scenarios',
        subtitle: 'Real-World Applications',
        number: '11',
        html: `
            <div class="space-y-6">
                <p class="text-[#666666] text-sm">Try these scenarios to practice your new skills in realistic contexts.</p>

                <div class="space-y-4">
                    
                    <div class="border-l-4 border-[#6A2C3C] p-5 bg-[#fffbf0] rounded">
                        <h4 class="text-sm font-bold text-[#333333] mb-3">Scenario 1: University Campus</h4>
                        <p class="text-xs text-[#666666] mb-3">You meet a classmate you haven't seen in a semester. Greet them and ask about their well-being and what they're studying.</p>
                        <div class="text-xs text-[#999999] italic bg-white p-2 rounded border border-[#e0e0e0]">
                            Consider using: 好久不见 / 最近怎么样 / 你是学生吗 / 你呢
                        </div>
                    </div>

                    <div class="border-l-4 border-[#C0945E] p-5 bg-[#f0f5f9] rounded">
                        <h4 class="text-sm font-bold text-[#333333] mb-3">Scenario 2: Job Interview</h4>
                        <p class="text-xs text-[#666666] mb-3">An interviewer asks about your background. Confirm your profession and provide a brief response about your recent experiences.</p>
                        <div class="text-xs text-[#999999] italic bg-white p-2 rounded border border-[#e0e0e0]">
                            Consider using: 我是 / 不是 / 很好 / 吗 to answer questions
                        </div>
                    </div>

                    <div class="border-l-4 border-[#6A2C3C] p-5 bg-[#fffbf0] rounded">
                        <h4 class="text-sm font-bold text-[#333333] mb-3">Scenario 3: Social Gathering</h4>
                        <p class="text-xs text-[#666666] mb-3">At a party, you meet new people. Introduce yourself, ask about their professions, and continue the conversation naturally.</p>
                        <div class="text-xs text-[#999999] italic bg-white p-2 rounded border border-[#e0e0e0]">
                            Consider using: 呢 / 你是 / 最近 / All question patterns
                        </div>
                    </div>

                </div>

                <div class="bg-[#fdf6f0] p-4 border border-[#f3e4d6] rounded">
                    <p class="text-[10px] font-bold uppercase tracking-widest text-[#6A2C3C] mb-2">Challenge Yourself</p>
                    <p class="text-xs text-[#666666]">Try to have a 30-second conversation using all the patterns from this module without referring to notes!</p>
                </div>
            </div>
        `
    },

    // Slide 12: Module Review
    {
        title: 'Module Review',
        subtitle: 'Key Takeaways',
        number: '12',
        html: `
            <div class="space-y-6">
                <p class="text-[#666666] text-sm">Master these essential concepts before moving to the next module.</p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    <div class="bg-blue-50 border border-blue-200 p-4 rounded">
                        <h4 class="text-sm font-bold text-blue-900 mb-3">Greetings</h4>
                        <ul class="text-xs text-blue-800 space-y-1">
                            <li class="zh">✓ 好久不见！(Long time no see)</li>
                            <li class="zh">✓ 最近怎么样？(How have you been?)</li>
                            <li class="zh">✓ 不错！(Not bad!)</li>
                        </ul>
                    </div>

                    <div class="bg-green-50 border border-green-200 p-4 rounded">
                        <h4 class="text-sm font-bold text-green-900 mb-3">Professions</h4>
                        <ul class="text-xs text-green-800 space-y-1">
                            <li class="zh">✓ 学生 (Student)</li>
                            <li class="zh">✓ 老师 (Teacher)</li>
                            <li class="zh">✓ 医生 (Doctor)</li>
                            <li class="zh">✓ 警察 (Police Officer)</li>
                        </ul>
                    </div>

                    <div class="bg-amber-50 border border-amber-200 p-4 rounded">
                        <h4 class="text-sm font-bold text-amber-900 mb-3">Grammar Patterns</h4>
                        <ul class="text-xs text-amber-800 space-y-1">
                            <li>✓ Subject + 是 + Profession</li>
                            <li>✓ Statement + 吗 = Question</li>
                            <li>✓ Subject + 不 + Verb = Negation</li>
                            <li>✓ Info + 呢? = Reciprocal</li>
                        </ul>
                    </div>

                    <div class="bg-purple-50 border border-purple-200 p-4 rounded">
                        <h4 class="text-sm font-bold text-purple-900 mb-3">Question Particles</h4>
                        <ul class="text-xs text-purple-800 space-y-1">
                            <li class="zh">✓ 吗 (yes/no question)</li>
                            <li class="zh">✓ 呢 (what about you?)</li>
                            <li class="zh">✓ 不 (negation)</li>
                        </ul>
                    </div>

                </div>

                <div class="bg-[#f9f9f9] p-5 border-2 border-[#e0e0e0] rounded">
                    <h4 class="text-sm font-bold text-[#333333] mb-3">Ready for Assessment?</h4>
                    <p class="text-xs text-[#666666] mb-3">You should be able to:</p>
                    <ul class="text-xs text-[#666666] space-y-1 ml-4">
                        <li>✅ Greet people in casual and formal contexts</li>
                        <li>✅ Introduce your profession</li>
                        <li>✅ Ask yes/no questions using 吗</li>
                        <li>✅ Make statements negative with 不</li>
                        <li>✅ Turn conversations around with 呢</li>
                        <li>✅ Understand basic dialogues</li>
                    </ul>
                </div>
            </div>
        `
    },

    // Slide 13: Final Wrap-up
    {
        title: 'Wrap-Up',
        subtitle: 'You\'ve Completed HSK 1 - Module 1.2!',
        number: '13',
        html: `
            <div class="h-full flex flex-col justify-center items-center text-center space-y-8">
                <div class="text-6xl">🎉</div>
                
                <div>
                    <h2 class="text-4xl font-serif font-bold text-[#6A2C3C] mb-2">Excellent Progress!</h2>
                    <p class="text-[#666666] text-lg">You've mastered greetings, introductions, and core conversation patterns.</p>
                </div>

                <div class="grid grid-cols-3 gap-6 text-center max-w-2xl">
                    <div class="bg-blue-50 p-4 rounded border border-blue-200">
                        <div class="text-2xl font-bold text-blue-600 mb-1">5</div>
                        <p class="text-xs text-blue-800">Greeting Patterns</p>
                    </div>
                    <div class="bg-green-50 p-4 rounded border border-green-200">
                        <div class="text-2xl font-bold text-green-600 mb-1">4</div>
                        <p class="text-xs text-green-800">Grammar Rules</p>
                    </div>
                    <div class="bg-amber-50 p-4 rounded border border-amber-200">
                        <div class="text-2xl font-bold text-amber-600 mb-1">4</div>
                        <p class="text-xs text-amber-800">Key Professions</p>
                    </div>
                </div>

                <div class="max-w-2xl bg-[#fffbf0] p-6 border border-[#f3e4d6] rounded">
                    <p class="text-[#333333] font-serif text-lg font-bold mb-3">What's Next?</p>
                    <p class="text-[#666666] text-sm mb-4">Continue to Module 1.3 to expand your conversational abilities with:</p>
                    <ul class="text-[#666666] text-xs space-y-1 ml-4">
                        <li>✓ More complex sentence structures</li>
                        <li>✓ Time expressions and dates</li>
                        <li>✓ Additional question patterns</li>
                        <li>✓ Real-world dialogue scenarios</li>
                    </ul>
                </div>

                <p class="text-[#999999] text-xs italic">Take the assessment to test your knowledge and move forward with confidence!</p>
            </div>
        `
    }
];
