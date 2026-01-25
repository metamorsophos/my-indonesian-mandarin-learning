const quizBank = [
    // VOCAB: Pronouns & Titles
    { type: 'multi', category: 'vocab', q: 'What is the formal way to say "You"?', opts: ['ä½  (nÇ)', 'æ‚¨ (nÃ­n)', 'ä»– (tÄ)', 'æˆ‘ (wÇ’)'], ans: 1 },
    { type: 'multi', category: 'vocab', q: 'What does "è´µ (guÃ¬)" mean literally?', opts: ['Expensive/Honorable', 'Name', 'Teacher', 'Please'], ans: 0 },
    { type: 'multi', category: 'vocab', q: 'Which word means "Teacher"?', opts: ['è€å¸ˆ (lÇŽoshÄ«)', 'å…ˆç”Ÿ (xiÄnsheng)', 'å¥³å£« (nÇšshÃ¬)', 'åŒå­¦ (tÃ³ngxuÃ©)'], ans: 0 },
    { type: 'multi', category: 'vocab', q: 'Which title is used for "Mr."?', opts: ['è€å¸ˆ (lÇŽoshÄ«)', 'å…ˆç”Ÿ (xiÄnsheng)', 'å¥³å£« (nÇšshÃ¬)', 'åŒå­¦ (tÃ³ngxuÃ©)'], ans: 1 },
    { type: 'multi', category: 'vocab', q: 'What does "å¥³å£« (nÇšshÃ¬)" mean?', opts: ['Teacher', 'Mr.', 'Ms./Mrs.', 'Classmate'], ans: 2 },
    { type: 'multi', category: 'vocab', q: 'Which term means "Classmate"?', opts: ['è€å¸ˆ (lÇŽoshÄ«)', 'å…ˆç”Ÿ (xiÄnsheng)', 'å¥³å£« (nÇšshÃ¬)', 'åŒå­¦ (tÃ³ngxuÃ©)'], ans: 3 },
    
    // VOCAB: Character Components & Radicals
    { type: 'multi', category: 'vocab', q: 'The character æ‚¨ (nÃ­n) contains which radical?', opts: ['Water', 'Fire', 'Heart (å¿ƒ)', 'Wood'], ans: 2 },
    { type: 'multi', category: 'vocab', q: 'Which component creates the formal æ‚¨ (nÃ­n)?', opts: ['å£ (kÇ’u - Mouth)', 'å¿ƒ (xÄ«n - Heart)', 'ç›® (mÃ¹ - Eye)', 'æ‰‹ (shÇ’u - Hand)'], ans: 1 },
    { type: 'multi', category: 'vocab', q: 'The character å¥½ (hÇŽo) is composed of which two elements?', opts: ['å¥³ (Woman) + å­ (Child)', 'å¥³ (Woman) + ç”Ÿ (Birth)', 'å£ (Mouth) + å¿ƒ (Heart)', 'ç« (Fire) + æ°´ (Water)'], ans: 0 },
    { type: 'multi', category: 'vocab', q: 'The character å§“ (xÃ¬ng) originally meant:', opts: ['To ask', 'Born of woman', 'To speak', 'To know'], ans: 1 },
    
    // VOCAB: Core Verbs & Actions
    { type: 'multi', category: 'vocab', q: 'What is the verb "to be called"?', opts: ['å§“ (xÃ¬ng)', 'å« (jiÃ o)', 'åå­— (mÃ­ngzi)', 'ä»€ä¹ˆ (shÃ©nme)'], ans: 1 },
    { type: 'multi', category: 'vocab', q: 'Which word indicates "to ask" a question?', opts: ['è¯· (qÇng)', 'é—® (wÃ¨n)', 'å« (jiÃ o)', 'å§“ (xÃ¬ng)'], ans: 1 },
    { type: 'multi', category: 'vocab', q: 'What verb means "to know" or "to meet"?', opts: ['è®¤è¯† (rÃ¨nshi)', 'å« (jiÃ o)', 'å§“ (xÃ¬ng)', 'è¯· (qÇng)'], ans: 0 },
    { type: 'multi', category: 'vocab', q: 'The verb å§“ (xÃ¬ng) primarily means:', opts: ['To ask', 'To know', 'To be surnamed', 'To call'], ans: 2 },
    
    // VOCAB: Modifiers & Emotions
    { type: 'multi', category: 'vocab', q: 'Which word means "very"?', opts: ['ä¹Ÿ (yÄ›)', 'å¾ˆ (hÄ›n)', 'é«˜å…´ (gÄoxÃ¬ng)', 'è®¤è¯† (rÃ¨nshi)'], ans: 1 },
    { type: 'multi', category: 'vocab', q: 'What does "é«˜å…´ (gÄoxÃ¬ng)" mean?', opts: ['Teacher', 'Happy', 'Name', 'Please'], ans: 1 },
    { type: 'multi', category: 'vocab', q: 'Which adverb means "also" or "too"?', opts: ['å¾ˆ (hÄ›n)', 'ä¹Ÿ (yÄ›)', 'è®¤è¯† (rÃ¨nshi)', 'åå­— (mÃ­ngzi)'], ans: 1 },
    { type: 'multi', category: 'vocab', q: '"éžå¸¸é«˜å…´ (fÄ“ichÃ¡ng gÄoxÃ¬ng)" emphasizes:', opts: ['Politeness', 'Very much happiness', 'Surprise', 'Formality'], ans: 1 },
    
    // VOCAB: Nouns
    { type: 'multi', category: 'vocab', q: 'What does "åå­— (mÃ­ngzi)" mean?', opts: ['Surname', 'Teacher', 'Name', 'Please'], ans: 2 },
    { type: 'multi', category: 'vocab', q: 'Which noun refers to "honorable surname"?', opts: ['åå­— (mÃ­ngzi)', 'è´µå§“ (guÃ¬xÃ¬ng)', 'è€å¸ˆ (lÇŽoshÄ«)', 'åŒå­¦ (tÃ³ngxuÃ©)'], ans: 1 },
    { type: 'multi', category: 'vocab', q: 'What is the interrogative pronoun "what"?', opts: ['è° (shuÃ­)', 'ä»€ä¹ˆ (shÃ©nme)', 'å“ªä¸ª (nÇŽge)', 'å¦‚ä½• (rÃºhÃ©)'], ans: 1 },
    
    // GRAMMAR: Word Order
    { type: 'multi', category: 'grammar', q: 'Correct order for "I am also very happy."', opts: ['æˆ‘ (wÇ’) å¾ˆ (hÄ›n) é«˜å…´ (gÄoxÃ¬ng) ä¹Ÿ (yÄ›)', 'æˆ‘ (wÇ’) ä¹Ÿ (yÄ›) å¾ˆ (hÄ›n) é«˜å…´ (gÄoxÃ¬ng)', 'ä¹Ÿ (yÄ›) æˆ‘ (wÇ’) å¾ˆ (hÄ›n) é«˜å…´ (gÄoxÃ¬ng)', 'æˆ‘ (wÇ’) å¾ˆ (hÄ›n) ä¹Ÿ (yÄ›) é«˜å…´ (gÄoxÃ¬ng)'], ans: 1 },
    { type: 'multi', category: 'grammar', q: 'Which sentence correctly uses ä¹Ÿ (yÄ›) (also)?', opts: ['æˆ‘ (wÇ’) ä¹Ÿ (yÄ›) å¾ˆ (hÄ›n) é«˜å…´ (gÄoxÃ¬ng)', 'æˆ‘ (wÇ’) å¾ˆ (hÄ›n) ä¹Ÿ (yÄ›) é«˜å…´ (gÄoxÃ¬ng)', 'ä¹Ÿ (yÄ›) æˆ‘ (wÇ’) å¾ˆ (hÄ›n) é«˜å…´ (gÄoxÃ¬ng)', 'å¾ˆ (hÄ›n) æˆ‘ (wÇ’) ä¹Ÿ (yÄ›) é«˜å…´ (gÄoxÃ¬ng)'], ans: 0 },
    { type: 'multi', category: 'grammar', q: 'In the sentence "æˆ‘å¾ˆé«˜å…´", where does the adverb go?', opts: ['After subject', 'Before adjective', 'After adjective', 'At the end'], ans: 1 },
    
    // GRAMMAR: Formal Phrases
    { type: 'multi', category: 'grammar', q: 'Which phrase means "May I ask your honorable surname?"', opts: ['ä½  (nÇ) å« (jiÃ o) ä»€ä¹ˆ (shÃ©nme)?', 'è¯· (qÇng) é—® (wÃ¨n)ï¼Œæ‚¨ (nÃ­n) è´µ (guÃ¬) å§“ (xÃ¬ng)?', 'ä½  (nÇ) å¥½ (hÇŽo) å— (ma)?', 'å¾ˆ (hÄ›n) é«˜å…´ (gÄoxÃ¬ng)'], ans: 1 },
    { type: 'multi', category: 'grammar', q: 'Translate: "å¾ˆé«˜å…´è®¤è¯†æ‚¨ (hÄ›n gÄoxÃ¬ng rÃ¨nshi nÃ­n)"', opts: ['What is your name?', 'Nice to meet you (formal)', 'Are you a teacher?', 'My surname is Pan'], ans: 1 },
    { type: 'multi', category: 'grammar', q: 'Pick the polite reply to "è¯·é—®ï¼Œæ‚¨ è´µ å§“?"', opts: ['æˆ‘ (wÇ’) å« (jiÃ o) æŽ (lÇ) æ˜Ž (mÃ­ng)', 'æˆ‘ (wÇ’) å§“ (xÃ¬ng) æŽ (lÇ)', 'ä½  (nÇ) å¥½ (hÇŽo) å— (ma)?', 'å¾ˆ (hÄ›n) é«˜å…´ (gÄoxÃ¬ng)'], ans: 1 },
    
    // GRAMMAR: Title Placement
    { type: 'multi', category: 'grammar', q: 'How do you say "Teacher Pan"?', opts: ['è€å¸ˆ æ½˜ (lÇŽoshÄ« pÄn)', 'æ½˜ è€å¸ˆ (pÄn lÇŽoshÄ«)', 'Teacher PÄn', 'Mr. PÄn'], ans: 1 },
    { type: 'multi', category: 'grammar', q: 'In professional address, order is:', opts: ['Given Name â†’ Title â†’ Surname', 'Surname â†’ Title â†’ Given Name', 'Title â†’ Surname â†’ Given Name', 'Title â†’ Given Name â†’ Surname'], ans: 1 },
    { type: 'multi', category: 'grammar', q: 'Correct way to address someone formally:', opts: ['Title Surname', 'Surname Title', 'Given Name Title', 'Title Given Name'], ans: 0 },
    
    // GRAMMAR: Name Order
    { type: 'multi', category: 'grammar', q: 'What comes first in a Chinese name?', opts: ['Given Name', 'Middle Name', 'Surname', 'Title'], ans: 2 },
    { type: 'multi', category: 'grammar', q: 'Chinese name structure is:', opts: ['Given + Surname', 'Surname + Given', 'Title + Surname', 'Surname + Title'], ans: 1 },
    { type: 'multi', category: 'grammar', q: 'Select the correct order for a formal introduction.', opts: ['Given Name â†’ Title â†’ Surname', 'Surname â†’ Title â†’ Given Name', 'Title â†’ Surname â†’ Given Name', 'Title â†’ Given Name â†’ Surname'], ans: 1 },
    
    // GRAMMAR: Question Formation
    { type: 'multi', category: 'grammar', q: 'How to ask someone\'s name informally?', opts: ['ä½  (nÇ) è´µ (guÃ¬) å§“ (xÃ¬ng)?', 'ä½  (nÇ) å« (jiÃ o) ä»€ä¹ˆ (shÃ©nme) åå­— (mÃ­ngzi)?', 'ä½  (nÇ) å¥½ (hÇŽo) å— (ma)?', 'ä½  (nÇ) æ˜¯ (shÃ¬) è° (shuÃ­)?'], ans: 1 },
    { type: 'multi', category: 'grammar', q: 'What is the sentence structure for asking a name?', opts: ['Subject + Verb + Object', 'Verb + Subject + Object', 'Object + Subject + Verb', 'Adverb + Subject + Verb'], ans: 0 },
    
    // MATCHING: Titles
    { type: 'match', category: 'vocab', q: 'Match the title to its meaning.', pairs: [
        { left: 'è€å¸ˆ (lÇŽoshÄ«)', right: 'Teacher' },
        { left: 'å…ˆç”Ÿ (xiÄnsheng)', right: 'Mr.' },
        { left: 'å¥³å£« (nÇšshÃ¬)', right: 'Ms./Mrs.' },
        { left: 'åŒå­¦ (tÃ³ngxuÃ©)', right: 'Classmate' }
    ]},
    
    // MATCHING: Vocabulary
    { type: 'match', category: 'vocab', q: 'Match the Mandarin to English meaning.', pairs: [
        { left: 'è®¤è¯† (rÃ¨nshi)', right: 'To meet/know' },
        { left: 'å¾ˆé«˜å…´ (hÄ›n gÄoxÃ¬ng)', right: 'Very happy' },
        { left: 'åå­— (mÃ­ngzi)', right: 'Name' },
        { left: 'è¯· (qÇng)', right: 'Please' }
    ]},
    
    // MATCHING: Verbs & Actions
    { type: 'match', category: 'vocab', q: 'Match the action verb to its meaning.', pairs: [
        { left: 'å« (jiÃ o)', right: 'To be called' },
        { left: 'å§“ (xÃ¬ng)', right: 'To be surnamed' },
        { left: 'é—® (wÃ¨n)', right: 'To ask' },
        { left: 'è®¤è¯† (rÃ¨nshi)', right: 'To know/meet' }
    ]},
    
    // DRAG-ORDER: Formal Inquiry
    { type: 'drag-order', category: 'grammar', q: 'Arrange the polite question: "è¯·é—®ï¼Œæ‚¨ è´µ å§“?" (May I ask your honorable surname?)', items: ['è¯·', 'é—®ï¼Œ', 'æ‚¨', 'è´µ', 'å§“', 'ï¼Ÿ'], answer: ['è¯·', 'é—®ï¼Œ', 'æ‚¨', 'è´µ', 'å§“', 'ï¼Ÿ'] },
    
    // DRAG-ORDER: Self-Introduction
    { type: 'drag-order', category: 'grammar', q: 'Arrange the self-introduction: "æˆ‘ å« æŽ æ˜Ž" (My name is Li Ming)', items: ['æˆ‘', 'å«', 'æŽ', 'æ˜Ž', 'ã€‚'], answer: ['æˆ‘', 'å«', 'æŽ', 'æ˜Ž', 'ã€‚'] },
    
    // DRAG-ORDER: Greeting
    { type: 'drag-order', category: 'grammar', q: 'Arrange: "å¾ˆ é«˜å…´ è®¤è¯† ä½ " (Very happy to meet you)', items: ['å¾ˆ', 'é«˜å…´', 'è®¤è¯†', 'ä½ ', 'ã€‚'], answer: ['å¾ˆ', 'é«˜å…´', 'è®¤è¯†', 'ä½ ', 'ã€‚'] },
    
    // DRAG-ORDER: Formal Reply
    { type: 'drag-order', category: 'grammar', q: 'Arrange: "æˆ‘ å§“ çŽ‹" (My surname is Wang)', items: ['æˆ‘', 'å§“', 'çŽ‹', 'ã€‚'], answer: ['æˆ‘', 'å§“', 'çŽ‹', 'ã€‚'] },
    
    // DRAG-ORDER: Polite Greeting Reply
    { type: 'drag-order', category: 'grammar', q: 'Arrange: "è®¤è¯† ä½  æˆ‘ ä¹Ÿ å¾ˆ é«˜å…´" (Meeting you, I am also very happy)', items: ['è®¤è¯†', 'ä½ ', 'æˆ‘', 'ä¹Ÿ', 'å¾ˆ', 'é«˜å…´', 'ã€‚'], answer: ['è®¤è¯†', 'ä½ ', 'æˆ‘', 'ä¹Ÿ', 'å¾ˆ', 'é«˜å…´', 'ã€‚'] },
    
    // Additional VOCAB questions
    { type: 'multi', category: 'vocab', q: 'What does "ç¤¼è²Œ (lÇmÃ o)" mean?', opts: ['Friend', 'Politeness/Manner', 'Knowledge', 'Respect'], ans: 1 },
    { type: 'multi', category: 'vocab', q: 'Which word means "colleague"?', opts: ['åŒäº‹ (tÃ³ngshÃ¬)', 'æœ‹å‹ (pÃ©ngyou)', 'å®¶äºº (jiÄrÃ©n)', 'åŒå­¦ (tÃ³ngxuÃ©)'], ans: 0 },
    { type: 'multi', category: 'vocab', q: 'What is "æœ‹å‹ (pÃ©ngyou)"?', opts: ['Colleague', 'Family', 'Friend', 'Stranger'], ans: 2 },
    { type: 'multi', category: 'vocab', q: 'The word "å®¶äºº (jiÄrÃ©n)" refers to:', opts: ['Friends', 'Colleagues', 'Family', 'Teachers'], ans: 2 },
    { type: 'multi', category: 'vocab', q: 'What does "è°¢è°¢ (xiÃ¨xiÃ¨)" mean?', opts: ['Sorry', 'Thank you', 'Please', 'You\'re welcome'], ans: 1 },
    { type: 'multi', category: 'vocab', q: 'Which term means "you\'re welcome"?', opts: ['ä¸å®¢æ°” (bÃºkÃ¨qi)', 'è°¢è°¢ (xiÃ¨xiÃ¨)', 'è¯· (qÇng)', 'ä¸ (bÃºi)'], ans: 0 },
    { type: 'multi', category: 'vocab', q: 'What does "å¯¹ä¸èµ· (duÃ¬bÃ¹qÇ)" mean?', opts: ['Thank you', 'I\'m sorry', 'Good morning', 'Goodbye'], ans: 1 },
    { type: 'multi', category: 'vocab', q: 'The term "å“¥å“¥ (gÄ“ge)" means:', opts: ['Sister', 'Older brother', 'Younger brother', 'Father'], ans: 1 },
    { type: 'multi', category: 'vocab', q: 'What is "å¦¹å¦¹ (mÃ¨imei)"?', opts: ['Older sister', 'Older brother', 'Younger sister', 'Mother'], ans: 2 },
    { type: 'multi', category: 'vocab', q: 'Which kinship term means "mother"?', opts: ['å¦ˆå¦ˆ (mÄma)', 'çˆ¸çˆ¸ (bÃ ba)', 'å“¥å“¥ (gÄ“ge)', 'å¼Ÿå¼Ÿ (dÃ¬di)'], ans: 0 },
    
    // Additional GRAMMAR questions
    { type: 'multi', category: 'grammar', q: 'Complete: "ä½  å¥½ å—?" The correct response is:', opts: ['æˆ‘ (wÇ’) æ˜¯ (shÃ¬) å­¦ç”Ÿ (xuÃ©sheng)', 'æˆ‘ (wÇ’) å¾ˆ (hÄ›n) å¥½ (hÇŽo)ï¼Œè°¢è°¢ (xiÃ¨xiÃ¨)', 'ä½  (nÇ) å« (jiÃ o) ä»€ä¹ˆ (shÃ©nme)?', 'å¾ˆ (hÄ›n) é«˜å…´ (gÄoxÃ¬ng) è®¤è¯† (rÃ¨nshi) ä½  (nÇ)'], ans: 1 },
    { type: 'multi', category: 'grammar', q: 'In "æˆ‘ å« æŽ ä¼Ÿ (wÇ’ jiÃ o lÇ wÄ›i)", the verb å« (jiÃ o) means:', opts: ['To meet', 'To be called', 'To ask', 'To know'], ans: 1 },
    { type: 'multi', category: 'grammar', q: 'Correct sentence: "She is very happy."', opts: ['å¥¹ (tÄ) å¾ˆ (hÄ›n) é«˜å…´ (gÄoxÃ¬ng)', 'å¾ˆ (hÄ›n) å¥¹ (tÄ) é«˜å…´ (gÄoxÃ¬ng)', 'é«˜å…´ (gÄoxÃ¬ng) å¥¹ (tÄ) å¾ˆ (hÄ›n)', 'å¾ˆ (hÄ›n) é«˜å…´ (gÄoxÃ¬ng) å¥¹ (tÄ)'], ans: 0 },
    { type: 'multi', category: 'grammar', q: 'Which response fits "ä½  æ˜¯ è°?"', opts: ['æˆ‘ (wÇ’) å¾ˆ (hÄ›n) å¥½ (hÇŽo)', 'æˆ‘ (wÇ’) æ˜¯ (shÃ¬) çŽ‹ (wÃ¡ng) è€å¸ˆ (lÇŽoshÄ«)', 'æˆ‘ (wÇ’) å« (jiÃ o) ä»€ä¹ˆ (shÃ©nme)?', 'è°¢è°¢ (xiÃ¨xiÃ¨) ä½  (nÇ)'], ans: 1 },
    { type: 'multi', category: 'grammar', q: 'To make a yes-no question, where does "å— (ma)" go?', opts: ['At the beginning', 'Before the verb', 'At the end', 'After the object'], ans: 2 },
    { type: 'multi', category: 'grammar', q: 'The phrase "éžå¸¸æ„Ÿè°¢ (fÄ“ichÃ¡ng gÇŽnxiÃ¨)" means:', opts: ['Very polite', 'Very grateful/thankful', 'Very formal', 'Very kind'], ans: 1 },
    { type: 'multi', category: 'grammar', q: 'Complete: "ä½  æ˜¯ å­¦ç”Ÿ å—?" Correct response:', opts: ['æˆ‘ (wÇ’) å¾ˆ (hÄ›n) é«˜å…´ (gÄoxÃ¬ng)', 'æ˜¯ (shÃ¬) çš„ (de)ï¼Œæˆ‘ (wÇ’) æ˜¯ (shÃ¬) å­¦ç”Ÿ (xuÃ©sheng)', 'æˆ‘ (wÇ’) å« (jiÃ o) æŽ (lÇ) æ˜Ž (mÃ­ng)', 'è°¢è°¢ (xiÃ¨xiÃ¨) ä½  (nÇ)'], ans: 1 },
    { type: 'multi', category: 'grammar', q: 'In "æˆ‘ ä¹Ÿ æ˜¯ (wÇ’ yÄ› shÃ¬)", the adverb ä¹Ÿ (yÄ›) means:', opts: ['Too', 'Also', 'Even', 'Too/Also'], ans: 3 },
    { type: 'multi', category: 'grammar', q: 'When should you use the formal æ‚¨ (nÃ­n) instead of ä½  (nÇ)?', opts: ['With close friends', 'With children', 'With strangers/superiors', 'With family'], ans: 2 },
    { type: 'multi', category: 'grammar', q: 'Construct: "My surname is Li and given name is Wei"', opts: ['æˆ‘ (wÇ’) æŽ (lÇ) é­ (wÄ›i)', 'æˆ‘ (wÇ’) æ˜¯ (shÃ¬) æŽ (lÇ) ä¼Ÿ (wÄ›i)', 'æˆ‘ (wÇ’) å« (jiÃ o) æŽ (lÇ) ä¼Ÿ (wÄ›i)', 'æŽ (lÇ) ä¼Ÿ (wÄ›i) æ˜¯ (shÃ¬) æˆ‘ (wÇ’)'], ans: 2 },
    
    // Additional MATCHING questions
    { type: 'match', category: 'vocab', q: 'Match Mandarin to English.', pairs: [
        { left: 'å¦ˆå¦ˆ (mÄma)', right: 'Mother' },
        { left: 'çˆ¸çˆ¸ (bÃ ba)', right: 'Father' },
        { left: 'å“¥å“¥ (gÄ“ge)', right: 'Older brother' },
        { left: 'å¦¹å¦¹ (mÃ¨imei)', right: 'Younger sister' }
    ]},
    
    { type: 'match', category: 'vocab', q: 'Match common expressions.', pairs: [
        { left: 'è°¢è°¢ (xiÃ¨xiÃ¨)', right: 'Thank you' },
        { left: 'ä¸å®¢æ°” (bÃºkÃ¨qi)', right: 'You\'re welcome' },
        { left: 'å¯¹ä¸èµ· (duÃ¬bÃ¹qÇ)', right: 'I\'m sorry' },
        { left: 'æ²¡å…³ç³» (mÃ©iguÄnxi)', right: 'No worries' }
    ]},
    
    { type: 'match', category: 'vocab', q: 'Match occupations and roles.', pairs: [
        { left: 'å­¦ç”Ÿ (xuÃ©sheng)', right: 'Student' },
        { left: 'åŒ»ç”Ÿ (yÄ«shÄ“ng)', right: 'Doctor' },
        { left: 'å·¥ç¨‹å¸ˆ (gÅngchÃ©ngshÄ«)', right: 'Engineer' },
        { left: 'å¾‹å¸ˆ (lÇœshÄ«)', right: 'Lawyer' }
    ]},
    
    { type: 'match', category: 'grammar', q: 'Match questions to appropriate responses.', pairs: [
        { left: 'ä½  å¥½ å—?', right: 'æˆ‘ å¾ˆ å¥½ï¼Œè°¢è°¢' },
        { left: 'ä½  å« ä»€ä¹ˆ?', right: 'æˆ‘ å« æŽ ä¼Ÿ' },
        { left: 'å¾ˆ é«˜å…´ è®¤è¯† ä½ ', right: 'æˆ‘ ä¹Ÿ æ˜¯' },
        { left: 'ä½  æ˜¯ å­¦ç”Ÿ å—?', right: 'æ˜¯ çš„ï¼Œæˆ‘ æ˜¯' }
    ]},
    
    // Additional DRAG-ORDER questions
    { type: 'drag-order', category: 'grammar', q: 'Arrange: "ä½  ä¹Ÿ æ˜¯ è€å¸ˆ (nÇ yÄ› shÃ¬ lÇŽoshÄ«)" (You are also a teacher)', items: ['ä½ ', 'ä¹Ÿ', 'æ˜¯', 'è€å¸ˆ', 'ã€‚'], answer: ['ä½ ', 'ä¹Ÿ', 'æ˜¯', 'è€å¸ˆ', 'ã€‚'] },
    
    { type: 'drag-order', category: 'grammar', q: 'Arrange: "è¯· é—®ï¼Œä½  çš„ åå­— æ˜¯ï¼Ÿ" (May I ask your name?)', items: ['è¯·', 'é—®ï¼Œ', 'ä½ ', 'çš„', 'åå­—', 'æ˜¯', 'ï¼Ÿ'], answer: ['è¯·', 'é—®ï¼Œ', 'ä½ ', 'çš„', 'åå­—', 'æ˜¯', 'ï¼Ÿ'] },
    
    { type: 'drag-order', category: 'grammar', q: 'Arrange: "æˆ‘ å¾ˆ å¯¹ä¸èµ· (wÇ’ hÄ›n duÃ¬bÃ¹qÇ)" (I am very sorry)', items: ['æˆ‘', 'å¾ˆ', 'å¯¹ä¸èµ·', 'ã€‚'], answer: ['æˆ‘', 'å¾ˆ', 'å¯¹ä¸èµ·', 'ã€‚'] },
    
    { type: 'drag-order', category: 'grammar', q: 'Arrange: "éžå¸¸ æ„Ÿè°¢ ä½  (fÄ“ichÃ¡ng gÇŽnxiÃ¨ nÇ)" (Thank you very much)', items: ['éžå¸¸', 'æ„Ÿè°¢', 'ä½ ', 'ã€‚'], answer: ['éžå¸¸', 'æ„Ÿè°¢', 'ä½ ', 'ã€‚'] },
    
    { type: 'drag-order', category: 'grammar', q: 'Arrange: "æˆ‘ çš„ æœ‹å‹ æ˜¯ åŒ»ç”Ÿ (wÇ’ de pÃ©ngyou shÃ¬ yÄ«shÄ“ng)" (My friend is a doctor)', items: ['æˆ‘', 'çš„', 'æœ‹å‹', 'æ˜¯', 'åŒ»ç”Ÿ', 'ã€‚'], answer: ['æˆ‘', 'çš„', 'æœ‹å‹', 'æ˜¯', 'åŒ»ç”Ÿ', 'ã€‚'] }
];
