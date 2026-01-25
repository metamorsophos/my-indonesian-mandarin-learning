const quizBank = [
    // VOCAB: Greetings
    { type: 'multi', category: 'vocab', q: 'What does "好久不见" (hǎo jiǔ bú jiàn) mean?', opts: ['Long time no see', 'How are you?', 'Very good', 'I am happy'], ans: 0 },
    { type: 'multi', category: 'vocab', q: 'Which phrase asks "How have you been recently?"', opts: ['你好吗?', '最近怎么样?', '不错', '很好'], ans: 1 },
    { type: 'multi', category: 'vocab', q: 'What is the best response to "最近怎么样?"', opts: ['你好', '不错', '最近', '学生'], ans: 1 },
    { type: 'multi', category: 'vocab', q: 'What does "不错" literally mean?', opts: ['Bad', 'Not bad/No mistake', 'Very good', 'Student'], ans: 1 },
    { type: 'multi', category: 'vocab', q: 'Which response is appropriate for saying "I\'m doing well"?', opts: ['最近', '不错', '很好', '吗'], ans: 2 },
    
    // VOCAB: Professions
    { type: 'multi', category: 'vocab', q: 'What does "学生 (xuésheng)" mean?', opts: ['Teacher', 'Doctor', 'Student', 'Police Officer'], ans: 2 },
    { type: 'multi', category: 'vocab', q: 'Which word means "Teacher"?', opts: ['学生', '老师', '医生', '警察'], ans: 1 },
    { type: 'multi', category: 'vocab', q: 'What profession is "医生 (yīshēng)"?', opts: ['Teacher', 'Doctor', 'Police Officer', 'Student'], ans: 1 },
    { type: 'multi', category: 'vocab', q: '"警察 (jǐngchá)" refers to:', opts: ['Teacher', 'Doctor', 'Police Officer', 'Student'], ans: 2 },
    { type: 'multi', category: 'vocab', q: 'Which profession group includes 学生, 老师, 医生, 警察?', opts: ['Family', 'Sports', 'Occupations/Professions', 'Animals'], ans: 2 },
    
    // VOCAB: Core Verbs
    { type: 'multi', category: 'vocab', q: 'What does the verb "是 (shì)" mean?', opts: ['To do', 'To be/am/is/are', 'To go', 'To like'], ans: 1 },
    { type: 'multi', category: 'vocab', q: 'Which verb means "to be called"?', opts: ['是', '叫', '认识', '最近'], ans: 1 },
    { type: 'multi', category: 'vocab', q: 'What does "认识 (rènshi)" mean?', opts: ['To go', 'To know/to meet', 'To be', 'To call'], ans: 1 },
    { type: 'multi', category: 'vocab', q: 'Which word is a question particle for yes/no questions?', opts: ['呢', '吗', '不', '什么'], ans: 1 },
    { type: 'multi', category: 'vocab', q: '"呢 (ne)" is used to ask:', opts: ['What?', 'How?', 'What about you?', 'Yes or no?'], ans: 2 },
    
    // VOCAB: Modifiers
    { type: 'multi', category: 'vocab', q: 'What does "很 (hěn)" mean?', opts: ['Good', 'Very', 'Not', 'And'], ans: 1 },
    { type: 'multi', category: 'vocab', q: 'Which word means "also" or "too"?', opts: ['很', '也', '不', '吗'], ans: 1 },
    { type: 'multi', category: 'vocab', q: 'What is the negation word in Mandarin?', opts: ['很', '也', '不', '吗'], ans: 2 },
    { type: 'multi', category: 'vocab', q: 'What does "什么 (shénme)" mean?', opts: ['Where', 'What', 'When', 'Who'], ans: 1 },
    { type: 'multi', category: 'vocab', q: 'Which word means "happy"?', opts: ['好', '高兴', '不错', '最近'], ans: 1 },
    
    // GRAMMAR: The 是 Verb
    { type: 'multi', category: 'grammar', q: 'Complete: "我 ___ 老师" (I am a teacher)', opts: ['好', '是', '不', '最近'], ans: 1 },
    { type: 'multi', category: 'grammar', q: 'Which sentence correctly uses 是?', opts: ['我是很高兴', '我是学生', '我是你呢', '我很是好'], ans: 1 },
    { type: 'multi', category: 'grammar', q: 'What is the correct structure with 是?', opts: ['是 + Subject + Profession', 'Subject + Profession + 是', 'Subject + 是 + Profession', 'Profession + Subject + 是'], ans: 2 },
    { type: 'multi', category: 'grammar', q: 'Which statement is grammatically correct?', opts: ['她是不医生', '她不是医生', '她医生是不', '她是医生不'], ans: 1 },
    { type: 'multi', category: 'grammar', q: '是 can only connect to:', opts: ['Adjectives', 'Nouns (professions/identities)', 'Verbs', 'Adverbs'], ans: 1 },
    
    // GRAMMAR: Negation with 不
    { type: 'multi', category: 'grammar', q: 'How do you negate "我是学生"?', opts: ['学生不是我', '我不是学生', '不我是学生', '我是不学生'], ans: 1 },
    { type: 'multi', category: 'grammar', q: 'Which is the correct negative statement?', opts: ['最近不好', '不最近好', '好最近不', '不好最近'], ans: 0 },
    { type: 'multi', category: 'grammar', q: 'What happens when 不 comes before a 4th tone?', opts: ['It stays 4th tone', 'It changes to 2nd tone', 'It becomes silent', 'It doubles'], ans: 1 },
    { type: 'multi', category: 'grammar', q: '不是 is pronounced:', opts: ['Bù shì', 'Bú shì', 'Buo shi', 'Bu she'], ans: 1 },
    { type: 'multi', category: 'grammar', q: 'Complete: "他 ___ 是警察" (He is not a police officer)', opts: ['很', '最近', '不', '吗'], ans: 2 },
    
    // GRAMMAR: Questions with 吗
    { type: 'multi', category: 'grammar', q: 'How do you turn "你是学生" into a question?', opts: ['学生是你吗', '你是学生吗', '你吗是学生', '是学生你吗'], ans: 1 },
    { type: 'multi', category: 'grammar', q: 'What is the pattern for yes/no questions?', opts: ['吗 + Statement', 'Statement + 吗', '吗 at the beginning', 'Two 吗s in the sentence'], ans: 1 },
    { type: 'multi', category: 'grammar', q: 'Which question is correctly formed?', opts: ['学生吗你是?', '你学生吗是?', '你是学生吗?', '是你学生吗?'], ans: 2 },
    { type: 'multi', category: 'grammar', q: 'What does adding 吗 to a statement do?', opts: ['Makes it negative', 'Turns it into a yes/no question', 'Makes it plural', 'Changes the tense'], ans: 1 },
    { type: 'multi', category: 'grammar', q: 'Respond to "你最近怎么样吗?" - which is appropriate?', opts: ['学生', '好久不见', '不错', '什么'], ans: 2 },
    
    // GRAMMAR: Reciprocal Questions with 呢
    { type: 'multi', category: 'grammar', q: 'Complete the dialogue: A: "我是老师。" B: "___ ?"', opts: ['你吗', '你呢', '你是', '你什么'], ans: 1 },
    { type: 'multi', category: 'grammar', q: 'What is the function of 呢 in conversation?', opts: ['To negate', 'To ask a reciprocal question', 'To confirm', 'To ask for permission'], ans: 1 },
    { type: 'multi', category: 'grammar', q: 'Which example correctly uses 呢?', opts: ['很好呢', '你呢?', '呢好很', '呢吗你'], ans: 1 },
    { type: 'multi', category: 'grammar', q: '呢 differs from 吗 because:', opts: ['呢 is more formal', '吗 is reciprocal', '呢 is conversational/reciprocal', '呢 only works with nouns'], ans: 2 },
    { type: 'multi', category: 'grammar', q: 'In "最近怎么样？你呢？" the 呢 means:', opts: ['Is it?', 'And you?/How about you?', 'What?', 'When?'], ans: 1 },
    
    // MATCHING: Greetings & Responses
    { type: 'match', category: 'vocab', q: 'Match the greeting to its appropriate response.', pairs: [
        { left: '好久不见！', right: '好久不见！/ 不错，你呢？' },
        { left: '最近怎么样？', right: '不错！/很好，你呢？' },
        { left: '你好！', right: '你好！很高兴认识你。' },
        { left: '你是老师吗？', right: '是的，我是老师。/不，我是学生。' }
    ]},
    
    // MATCHING: Professions
    { type: 'match', category: 'vocab', q: 'Match the Chinese profession to English.', pairs: [
        { left: '学生', right: 'Student' },
        { left: '老师', right: 'Teacher' },
        { left: '医生', right: 'Doctor' },
        { left: '警察', right: 'Police Officer' }
    ]},
    
    // MATCHING: Verbs & Actions
    { type: 'match', category: 'vocab', q: 'Match the verb to its meaning.', pairs: [
        { left: '是', right: 'To be (identity/profession)' },
        { left: '叫', right: 'To be called' },
        { left: '认识', right: 'To know/to meet' },
        { left: '最近', right: 'Recently (time word)' }
    ]},
    
    // DRAG-ORDER: Greeting Exchange
    { type: 'drag-order', category: 'grammar', q: 'Arrange: "好久不见！最近怎么样？" (Long time no see! How have you been?)', items: ['好久', '不见', '！最近', '怎么', '样', '？'], answer: ['好久', '不见', '！最近', '怎么', '样', '？'] },
    
    // DRAG-ORDER: Professional Introduction
    { type: 'drag-order', category: 'grammar', q: 'Arrange: "我是老师。" (I am a teacher.)', items: ['我', '是', '老师', '。'], answer: ['我', '是', '老师', '。'] },
    
    // DRAG-ORDER: Greeting & Reciprocal
    { type: 'drag-order', category: 'grammar', q: 'Arrange: "你最近怎么样？我不错。你呢？" (How have you been? I\'m not bad. How about you?)', items: ['你', '最近', '怎么', '样', '？我', '不错', '。你', '呢', '？'], answer: ['你', '最近', '怎么', '样', '？我', '不错', '。你', '呢', '？'] },
    
    // DRAG-ORDER: Question Formation
    { type: 'drag-order', category: 'grammar', q: 'Arrange: "你是医生吗？" (Are you a doctor?)', items: ['你', '是', '医生', '吗', '？'], answer: ['你', '是', '医生', '吗', '？'] },
    
    // DRAG-ORDER: Negative Statement
    { type: 'drag-order', category: 'grammar', q: 'Arrange: "她不是学生。" (She is not a student.)', items: ['她', '不是', '学生', '。'], answer: ['她', '不是', '学生', '。'] },
    
    // Additional VOCAB questions
    { type: 'multi', category: 'vocab', q: 'What is the HSK 1 level classification for these words?', opts: ['Advanced', 'Beginner/Elementary', 'Intermediate', 'Professional'], ans: 1 },
    { type: 'multi', category: 'vocab', q: 'Which is NOT a profession in this module?', opts: ['医生', '老师', '警察', '最近'], ans: 3 },
    { type: 'multi', category: 'vocab', q: 'The phrase "很高兴认识你 (hěn gāoxìng rènshi nǐ)" means:', opts: ['How are you?', 'Nice to meet you / I\'m very happy to meet you', 'Long time no see', 'I am a teacher'], ans: 1 },
    { type: 'multi', category: 'vocab', q: 'Which word can replace "吗" in some contexts?', opts: ['呢', '不', '什么', '很'], ans: 0 },
    
    // DIALOGUE: Context Based
    { type: 'multi', category: 'dialogue', q: 'In a workplace meeting, A says "你好！你是新员工吗?" The most professional response is:', opts: ['不错', '很好', '是的，我是新员工', '好久不见'], ans: 2 },
    { type: 'multi', category: 'dialogue', q: 'At a school reunion, old friends would most naturally use:', opts: ['最近怎么样', '你好吗', '你是学生吗', '认识你'], ans: 0 },
    { type: 'multi', category: 'dialogue', q: 'If someone asks "你是警察吗？" and the answer is "no," the response is:', opts: ['不，我是医生', '不错', '吗？', '是的'], ans: 0 },
    { type: 'multi', category: 'dialogue', q: 'To continue a conversation after introducing your profession, you would use:', opts: ['吗', '呢', '不', '什么'], ans: 1 },
    { type: 'multi', category: 'dialogue', q: 'Which exchange shows proper use of question particles?', opts: ['A: 你呢? B: 我是学生。', 'A: 我是老师呢。 B: 很好。', 'A: 你是学生吗呢? B: 是的', 'A: 最近怎么样不? B: 很好吗'], ans: 0 }
];
