/* HSK 1 - Module 1.2: Greetings & Introductions
   Quiz Questions Bank - 70+ Questions */

const quizBank = [
    /* ===== VOCABULARY QUESTIONS ===== */
    
    // Word meaning - Greetings
    { type: 'multi', category: 'vocab', q: 'What does "好久不见" mean?', opts: ['Long time no see', 'See you later', 'Nice to meet you', 'How are you?'], ans: 0 },
    { type: 'multi', category: 'vocab', q: 'Which word means "recently"?', opts: ['最近', '最后', '最好', '最大'], ans: 0 },
    { type: 'multi', category: 'vocab', q: '"怎么样" translates to:', opts: ['How about...? / How are you?', 'Where?', 'When?', 'Why?'], ans: 0 },
    { type: 'multi', category: 'vocab', q: '"不错" literally means:', opts: ['Not bad', 'Very good', 'Bad', 'No mistake'], ans: 3 },

    // Professions
    { type: 'multi', category: 'vocab', q: 'Which word means "student"?', opts: ['老师', '学生', '医生', '警察'], ans: 1 },
    { type: 'multi', category: 'vocab', q: '"警察" means:', opts: ['Teacher', 'Doctor', 'Policeman', 'Lawyer'], ans: 2 },
    { type: 'multi', category: 'vocab', q: 'What does "老师" mean?', opts: ['Student', 'Teacher', 'Doctor', 'Policeman'], ans: 1 },
    { type: 'multi', category: 'vocab', q: '"医生" refers to a:', opts: ['Teacher', 'Policeman', 'Doctor', 'Lawyer'], ans: 2 },

    // Question particles
    { type: 'multi', category: 'vocab', q: 'Which particle turns a statement into a Yes/No question?', opts: ['呢', '吗', '了', '啊'], ans: 1 },
    { type: 'multi', category: 'vocab', q: 'The particle "呢" is used to ask:', opts: ['What?', 'Where?', 'And you?', 'How many?'], ans: 2 },
    { type: 'multi', category: 'vocab', q: '"是" (shì) means:', opts: ['Have', 'To be', 'Go', 'Do'], ans: 1 },
    { type: 'multi', category: 'vocab', q: '"不是" means:', opts: ['Is', 'Is not', 'Are', 'Are not'], ans: 1 },

    // Negation
    { type: 'multi', category: 'vocab', q: 'How do you negate a verb in this module?', opts: ['Put 没 before it', 'Put 不 before it', 'Change the verb', 'Use the word 否'], ans: 1 },
    { type: 'multi', category: 'vocab', q: '"不" means:', opts: ['Good', 'Not', 'Yes', 'Also'], ans: 1 },

    // Formal you (from 1.1, reinforcement)
    { type: 'multi', category: 'vocab', q: 'Which is the formal/respectful "you"?', opts: ['我', '你', '您', '他'], ans: 2 },

    // Additional professions
    { type: 'multi', category: 'vocab', q: '"医生" means:', opts: ['Engineer', 'Doctor', 'Lawyer', 'Artist'], ans: 1 },
    { type: 'multi', category: 'vocab', q: '"工程师" means:', opts: ['Teacher', 'Engineer', 'Doctor', 'Accountant'], ans: 1 },
    { type: 'multi', category: 'vocab', q: 'Which means "boy/male student"?', opts: ['女生', '男生', '女', '男'], ans: 1 },
    { type: 'multi', category: 'vocab', q: '"女生" means:', opts: ['Woman', 'Girl/Female student', 'Female', 'Daughter'], ans: 1 },

    /* ===== GRAMMAR QUESTIONS ===== */

    // 是 (shì) verb
    { type: 'multi', category: 'grammar', q: 'Complete: 我 _____ 老师', opts: ['有', '做', '是', '去'], ans: 2 },
    { type: 'multi', category: 'grammar', q: 'Which is correct? (I am a student)', opts: ['我有学生', '我是学生', '我做学生', '我去学生'], ans: 1 },
    { type: 'multi', category: 'grammar', q: 'Does 是 change based on the subject?', opts: ['Yes, always', 'Yes, sometimes', 'No, never', 'Only for plural'], ans: 2 },
    { type: 'multi', category: 'grammar', q: 'Which is correct? (He is a policeman)', opts: ['他是警察', '他有警察', '他做警察', '他去警察'], ans: 0 },

    // Negation with 不是
    { type: 'multi', category: 'grammar', q: 'How do you negate "我是学生"?', opts: ['我有不学生', '我做不学生', '我不是学生', '不我是学生'], ans: 2 },
    { type: 'multi', category: 'grammar', q: 'Which is correct? (I am not a teacher)', opts: ['我不老师', '我不是老师', '我没是老师', '我不有老师'], ans: 1 },
    { type: 'multi', category: 'grammar', q: 'In "不是", what tone does 不 have?', opts: ['1st tone (high)', '2nd tone (rising)', '3rd tone (low)', '4th tone (falling)'], ans: 1 },
    { type: 'multi', category: 'grammar', q: 'Why does 不 change tone in "不是"?', opts: ['It always changes', 'Before 4th tone words', 'Before 1st tone words', 'In questions only'], ans: 1 },

    // 吗 questions
    { type: 'multi', category: 'grammar', q: 'To make a Yes/No question, you add what to the end?', opts: ['呢', '吗', '啊', '的'], ans: 1 },
    { type: 'multi', category: 'grammar', q: 'Which is correct? (Are you a student?)', opts: ['你学生吗?', '你是学生吗?', '你有学生吗?', '吗你是学生?'], ans: 1 },
    { type: 'multi', category: 'grammar', q: 'How do you answer "你是老师吗?" affirmatively?', opts: ['不', '不是', '是 or 是的', '有'], ans: 2 },
    { type: 'multi', category: 'grammar', q: 'How do you answer "你是老师吗?" negatively?', opts: ['是', '是的', '不 or 我不是', '有'], ans: 2 },

    // 呢 questions
    { type: 'multi', category: 'grammar', q: 'The particle 呢 is used when:', opts: ['Starting a conversation', 'Context is already clear', 'Asking for something', 'Giving orders'], ans: 1 },
    { type: 'multi', category: 'grammar', q: 'In dialogue, A says "我是学生", then asks "你呢?". This means:', opts: ['You are a student too', 'Are you a student?', 'What about you?', 'Do you like students?'], ans: 2 },
    { type: 'multi', category: 'grammar', q: 'Which is correct use of 呢?', opts: ['我是老师呢?', '你呢?', '他呢吗?', '是呢老师'], ans: 1 },

    // Tone sandhi
    { type: 'multi', category: 'grammar', q: '"不错" is pronounced as:', opts: ['bù cuò', 'bú cuò', 'bu cuò', 'bù cuò'], ans: 1 },
    { type: 'multi', category: 'grammar', q: 'The tone change of 不 happens before which tone?', opts: ['1st', '2nd', '3rd', '4th'], ans: 3 },

    // Sentence structure
    { type: 'multi', category: 'grammar', q: 'What is the basic word order?', opts: ['Verb-Subject-Object', 'Subject-Object-Verb', 'Subject-Verb-Object', 'Object-Subject-Verb'], ans: 2 },

    /* ===== VOCABULARY + CONTEXT ===== */

    { type: 'multi', category: 'dialogue', q: 'If someone says "好久不见", they are:', opts: ['Greeting a stranger', 'Greeting an old acquaintance', 'Saying goodbye', 'Asking for help'], ans: 1 },
    { type: 'multi', category: 'dialogue', q: '"最近怎么样?" is most appropriate when:', opts: ['Meeting for the first time', 'Seeing someone you know recently', 'Formal presentation', 'Emergency situation'], ans: 1 },
    { type: 'multi', category: 'dialogue', q: 'After someone says "我是学生", you ask "你呢?" to:', opts: ['Confirm they are a student', 'Ask them to introduce themselves', 'Ask about their profession', 'Ask them to sit down'], ans: 2 },

    /* ===== MATCHING QUESTIONS ===== */

    { type: 'match', category: 'vocab', q: 'Match Chinese to English', pairs: [
        { cn: '学生', en: 'Student' },
        { cn: '警察', en: 'Policeman' },
        { cn: '老师', en: 'Teacher' },
        { cn: '医生', en: 'Doctor' }
    ], answer: [0, 1, 2, 3] },

    { type: 'match', category: 'vocab', q: 'Match phrases to meanings', pairs: [
        { cn: '好久不见', en: 'Long time no see' },
        { cn: '最近怎么样', en: 'How are you recently?' },
        { cn: '不错', en: 'Not bad / Good' },
        { cn: '最近', en: 'Recently' }
    ], answer: [0, 1, 2, 3] },

    { type: 'match', category: 'grammar', q: 'Match sentences to their meanings', pairs: [
        { cn: '我是老师', en: 'I am a teacher' },
        { cn: '我不是学生', en: 'I am not a student' },
        { cn: '你是医生吗?', en: 'Are you a doctor?' },
        { cn: '你呢?', en: 'And you?' }
    ], answer: [0, 1, 2, 3] },

    /* ===== DRAG-ORDER QUESTIONS (Sentence Construction) ===== */

    { type: 'drag-order', category: 'grammar', q: 'Put words in correct order: I / am / student / a', items: ['我', '是', '学生'], answer: [0, 1, 2] },
    { type: 'drag-order', category: 'grammar', q: 'Arrange to make: Are you a teacher?', items: ['你', '是', '老师', '吗?'], answer: [0, 1, 2, 3] },
    { type: 'drag-order', category: 'grammar', q: 'Arrange correctly: He is not a policeman', items: ['他', '不是', '警察'], answer: [0, 1, 2] },
    { type: 'drag-order', category: 'dialogue', q: 'Complete dialogue: A: "你是学生吗?" B: ___', items: ['是的', '你呢?'], answer: [0, 1] },
    { type: 'drag-order', category: 'dialogue', q: 'Arrange greeting: Teacher / long time / no see / Pan', items: ['潘老师', '好久', '不见'], answer: [0, 2, 1] },

    /* ===== MORE VOCAB QUESTIONS ===== */

    { type: 'multi', category: 'vocab', q: 'What is the formal way to say "yes" to a question?', opts: ['是', '对', '是的', '好'], ans: 2 },
    { type: 'multi', category: 'vocab', q: 'When listing professions, "工程师" means:', opts: ['Engineer', 'Programmer', 'Architect', 'Scientist'], ans: 0 },
    { type: 'multi', category: 'vocab', q: '"律师" is:', opts: ['Lawyer', 'Doctor', 'Teacher', 'Police'], ans: 0 },
    { type: 'multi', category: 'vocab', q: '"会计" means:', opts: ['Teacher', 'Accountant', 'Doctor', 'Engineer'], ans: 1 },

    /* ===== LISTENING/COMPREHENSION ===== */

    { type: 'multi', category: 'dialogue', q: 'In the dialogue, when Gali asks "你是学生吗?", she is:', opts: ['Greeting', 'Asking about Fan Er\'s profession', 'Saying goodbye', 'Apologizing'], ans: 1 },
    { type: 'multi', category: 'dialogue', q: 'Fan Er responds "我不是学生，我是警察" to indicate:', opts: ['He has two jobs', 'He used to be a student', 'He is a policeman, not a student', 'He doesn\'t like students'], ans: 2 },
    { type: 'multi', category: 'dialogue', q: 'Teacher Pan\'s response "不错!" to "最近怎么样?" means:', opts: ['I\'m bad', 'I\'m okay', 'I\'m not okay', 'I don\'t know'], ans: 1 },

    /* ===== ADVANCED GRAMMAR ===== */

    { type: 'multi', category: 'grammar', q: 'Which statement is grammatically correct?', opts: ['我有是老师', '我很是老师', '我就是老师', '我是很老师'], ans: 2 },
    { type: 'multi', category: 'grammar', q: 'Complete with correct tone: 我不___是学生。(I am not a student)', opts: ['bù shì', 'bú shì', 'bu shi', 'ba shi'], ans: 1 },
    { type: 'multi', category: 'grammar', q: 'In "他是医生吗?", the 吗 is:', opts: ['A verb', 'A question particle', 'An adverb', 'A classifier'], ans: 1 },

    /* ===== VOCABULARY IN CONTEXT ===== */

    { type: 'multi', category: 'vocab', q: 'If you haven\'t seen someone for 2 years, you say:', opts: ['你好', '再见', '好久不见', '最近怎么样'], ans: 2 },
    { type: 'multi', category: 'vocab', q: 'To ask about someone\'s current state informally:', opts: ['你是谁?', '最近怎么样?', '你是老师吗?', '你叫什么'], ans: 1 },
    { type: 'multi', category: 'vocab', q: 'When responding positively to a question, which is most polite?', opts: ['是', '对', '是的', '好的'], ans: 2 },

    /* ===== CHARACTER RADICALS (BONUS) ===== */

    { type: 'multi', category: 'vocab', q: 'The character 学 appears in:', opts: ['警察', '老师', '学生', '医生'], ans: 2 },
    { type: 'multi', category: 'vocab', q: '"女" means female, so "女生" means:', opts: ['Woman', 'Girl/Female student', 'Female teacher', 'Daughter'], ans: 1 },

    /* ===== FINAL REVIEW ===== */

    { type: 'multi', category: 'grammar', q: 'Choose the correct greeting for a friend you saw 5 days ago:', opts: ['好久不见', '最近怎么样?', '再见', '谢谢'], ans: 1 },
    { type: 'multi', category: 'grammar', q: 'How would you tell someone you\'re a lawyer?', opts: ['我有律师', '我做律师', '我是律师', '我去律师'], ans: 2 },
    { type: 'multi', category: 'dialogue', q: 'If someone says "你呢?", they are asking:', opts: ['Who are you?', 'Where are you?', 'And you? (about your profession)', 'Do you have...?'], ans: 2 }
];
