/* HSK 1 - Module 1.2: Greetings & Introductions
   Learning Materials - 13 Interactive Slides */

const slides = [
    {
        number: 1,
        title: "Module Overview",
        subtitle: "Greetings & Introductions",
        html: `
            <h2 class="slide-title">欢迎! Welcome to 1.2</h2>
            <div class="slide-content">
                <p><strong>In this module, you'll learn:</strong></p>
                <ul style="padding-left: 2rem; margin: 1.5rem 0; line-height: 1.8;">
                    <li>How to greet friends you haven't seen in a while</li>
                    <li>The essential "是" (shì) verb for identity and profession</li>
                    <li>The question particles "吗" (ma) for yes/no questions</li>
                    <li>The particle "呢" (ne) for reciprocal questions</li>
                    <li>Important vocabulary for professions and social contexts</li>
                </ul>
                <p style="margin-top: 1.5rem;"><strong>These foundations will prepare you to:</strong> Have basic conversations, ask about others' professions, and respond to common social inquiries.</p>
            </div>
        `
    },
    {
        number: 2,
        title: "Key Greetings & Phrases",
        subtitle: "Essential expressions",
        html: `
            <h2 class="slide-title">Common Greetings</h2>
            <div class="slide-content">
                <div style="background: #f9f5f0; padding: 1.5rem; border-radius: 8px; margin: 1.5rem 0;">
                    <div style="margin-bottom: 1.5rem;">
                        <p style="font-size: 0.85rem; color: #999; margin-bottom: 0.25rem;">For friends not seen recently:</p>
                        <p style="font-size: 1.25rem;"><span class="zh-text">好久不见</span></p>
                        <p class="pinyin">Hǎo jiǔ bú jiàn</p>
                        <p style="color: #666; margin-top: 0.5rem;"><em>"Long time no see"</em> (Literally: good-long not-see)</p>
                    </div>

                    <hr style="border: none; border-top: 1px solid #ddd; margin: 1rem 0;">

                    <div style="margin-bottom: 1.5rem;">
                        <p style="font-size: 0.85rem; color: #999; margin-bottom: 0.25rem;">When you see someone recently:</p>
                        <p style="font-size: 1.25rem;"><span class="zh-text">最近</span> <span class="zh-text">怎么样</span>?</p>
                        <p class="pinyin">Zuì jìn zěn me yàng?</p>
                        <p style="color: #666; margin-top: 0.5rem;"><em>"How are you recently?"</em> or <em>"How have you been?"</em></p>
                    </div>

                    <hr style="border: none; border-top: 1px solid #ddd; margin: 1rem 0;">

                    <div>
                        <p style="font-size: 0.85rem; color: #999; margin-bottom: 0.25rem;">Polite positive response:</p>
                        <p style="font-size: 1.25rem;"><span class="zh-text">不错</span>!</p>
                        <p class="pinyin">Bú cuò!</p>
                        <p style="color: #666; margin-top: 0.5rem;"><em>"Not bad!"</em> or <em>"Good!"</em> (Literally: no-mistake)</p>
                    </div>
                </div>

                <p style="margin-top: 1.5rem; color: #666;"><strong>💡 Tip:</strong> These phrases are very natural and commonly used in daily conversations!</p>
            </div>
        `
    },
    {
        number: 3,
        title: "Core Vocabulary",
        subtitle: "Professions and descriptors",
        html: `
            <h2 class="slide-title">Key Words (生词)</h2>
            <div class="slide-content">
                <table class="vocab-table">
                    <thead>
                        <tr>
                            <th>Chinese</th>
                            <th>Pinyin</th>
                            <th>Meaning</th>
                            <th>Context</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span class="zh-text">学生</span></td>
                            <td class="pinyin">xué sheng</td>
                            <td><strong>Student</strong></td>
                            <td>Person studying at school/university</td>
                        </tr>
                        <tr>
                            <td><span class="zh-text">警察</span></td>
                            <td class="pinyin">jǐng chá</td>
                            <td><strong>Policeman/Police</strong></td>
                            <td>Law enforcement professional</td>
                        </tr>
                        <tr>
                            <td><span class="zh-text">老师</span></td>
                            <td class="pinyin">lǎo shī</td>
                            <td><strong>Teacher</strong></td>
                            <td>Educational professional</td>
                        </tr>
                        <tr>
                            <td><span class="zh-text">医生</span></td>
                            <td class="pinyin">yī shēng</td>
                            <td><strong>Doctor</strong></td>
                            <td>Healthcare professional</td>
                        </tr>
                        <tr>
                            <td><span class="zh-text">不</span></td>
                            <td class="pinyin">bù / bú</td>
                            <td><strong>Not</strong></td>
                            <td>Negation (changes tone before 4th tone)</td>
                        </tr>
                        <tr>
                            <td><span class="zh-text">最近</span></td>
                            <td class="pinyin">zuì jìn</td>
                            <td><strong>Recently</strong></td>
                            <td>Time expression</td>
                        </tr>
                        <tr>
                            <td><span class="zh-text">怎么样</span></td>
                            <td class="pinyin">zěn me yàng</td>
                            <td><strong>How about...?</strong></td>
                            <td>Asking about condition/state</td>
                        </tr>
                    </tbody>
                </table>
                <p style="margin-top: 1.5rem; color: #666;"><strong>📌 Note:</strong> "学生" (student) can be combined with school levels: 小学生 (elementary), 中学生 (middle/high school), 大学生 (university)</p>
            </div>
        `
    },
    {
        number: 4,
        title: "The 是 (shì) Verb - Part 1",
        subtitle: "Identity and profession",
        html: `
            <h2 class="slide-title">The Verb 是 (to be)</h2>
            <div class="slide-content">
                <div style="background: #f0f5f9; padding: 1.5rem; border-radius: 8px; margin: 1.5rem 0;">
                    <p><strong>What is 是?</strong></p>
                    <p style="color: #666; margin-top: 0.5rem;">The verb 是 (shì) connects a subject to a noun. It's similar to English "to be" but with important differences!</p>
                </div>

                <div style="margin: 2rem 0; padding: 1rem; background: #fff8f0; border-left: 4px solid #C0945E;">
                    <p style="font-size: 0.9rem; color: #999; margin-bottom: 0.5rem;">KEY DIFFERENCE FROM ENGLISH:</p>
                    <p style="margin: 0.5rem 0;"><strong>✓ No tense changes:</strong> "是" never changes form based on time</p>
                    <p style="margin: 0.5rem 0;"><strong>✓ No plural changes:</strong> Same form for I, you, he, we, they</p>
                    <p style="margin: 0.5rem 0;"><strong>✓ Basic structure:</strong> Subject + 是 + Noun (profession/identity)</p>
                </div>

                <div style="margin: 2rem 0;">
                    <p><strong>Examples:</strong></p>
                    <div style="margin: 1rem 0; padding: 1rem; background: #f5f5f5; border-radius: 6px;">
                        <p style="margin: 0.5rem 0;"><span class="zh-text">我是老师</span></p>
                        <p class="pinyin">Wǒ shì lǎoshī</p>
                        <p style="color: #666;"><em>I am a teacher</em></p>
                    </div>
                    <div style="margin: 1rem 0; padding: 1rem; background: #f5f5f5; border-radius: 6px;">
                        <p style="margin: 0.5rem 0;"><span class="zh-text">他是学生</span></p>
                        <p class="pinyin">Tā shì xué sheng</p>
                        <p style="color: #666;"><em>He is a student</em></p>
                    </div>
                </div>
            </div>
        `
    },
    {
        number: 5,
        title: "The 是 (shì) Verb - Part 2",
        subtitle: "Negation and questions",
        html: `
            <h2 class="slide-title">Negating with 是 & Tone Changes</h2>
            <div class="slide-content">
                <div style="margin: 1.5rem 0; padding: 1rem; background: #fff0f0; border-left: 4px solid #ef4444;">
                    <p><strong>⚠️ TONE SANDHI RULE!</strong></p>
                    <p style="margin-top: 0.5rem; color: #666;">When "不" comes before another 4th tone word (like 是), it changes to 2nd tone:</p>
                    <p style="font-size: 1.1rem; margin: 1rem 0;"><strong>不是</strong> becomes <strong>bú shì</strong> (not <strong>bù shì</strong>)</p>
                    <p style="color: #999; font-size: 0.9rem;">Same rule applies to: 不错 (bú cuò)</p>
                </div>

                <div style="margin: 2rem 0;">
                    <p><strong>Negative Statements:</strong></p>
                    <div style="margin: 1rem 0; padding: 1rem; background: #f5f5f5; border-radius: 6px;">
                        <p style="margin: 0.5rem 0;"><span class="zh-text">我不是学生</span></p>
                        <p class="pinyin">Wǒ bú shì xué sheng</p>
                        <p style="color: #666;"><em>I am not a student</em></p>
                    </div>
                    <div style="margin: 1rem 0; padding: 1rem; background: #f5f5f5; border-radius: 6px;">
                        <p style="margin: 0.5rem 0;"><span class="zh-text">她不是老师</span></p>
                        <p class="pinyin">Tā bú shì lǎoshī</p>
                        <p style="color: #666;"><em>She is not a teacher</em></p>
                    </div>
                </div>

                <p style="color: #666; margin-top: 1.5rem;"><strong>💡 Pronunciation Practice:</strong> Say "bú shì" several times to get the tone change right!</p>
            </div>
        `
    },
    {
        number: 6,
        title: "The Question Particle 吗 (ma)",
        subtitle: "Yes/No questions",
        html: `
            <h2 class="slide-title">Asking Yes/No Questions with 吗</h2>
            <div class="slide-content">
                <div style="background: #e8f5e9; padding: 1.5rem; border-radius: 8px; margin: 1.5rem 0;">
                    <p><strong>How to form Yes/No questions:</strong></p>
                    <p style="color: #666; margin-top: 0.5rem;">Simply add the particle <strong>吗</strong> at the END of any statement!</p>
                </div>

                <div style="margin: 2rem 0; padding: 1.5rem; background: #f0f5f0; border-left: 4px solid #10b981;">
                    <p><strong>Formula:</strong> Statement + <strong>吗?</strong> = Question</p>
                </div>

                <div style="margin: 2rem 0;">
                    <p><strong>Examples:</strong></p>
                    <div style="margin: 1rem 0; padding: 1rem; background: #f5f5f5; border-radius: 6px;">
                        <p style="margin: 0.5rem 0; color: #666; font-size: 0.9rem;">Statement:</p>
                        <p style="margin: 0.5rem 0;"><span class="zh-text">你是学生</span></p>
                        <p class="pinyin">Nǐ shì xué sheng</p>
                        <p style="color: #999; font-size: 0.85rem;">You are a student</p>
                    </div>
                    <p style="text-align: center; margin: 1rem 0; color: #999;">↓ Add 吗</p>
                    <div style="margin: 1rem 0; padding: 1rem; background: #fff8f0; border-left: 4px solid #C0945E; border-radius: 6px;">
                        <p style="margin: 0.5rem 0; color: #666; font-size: 0.9rem;">Question:</p>
                        <p style="margin: 0.5rem 0;"><span class="zh-text">你是学生吗?</span></p>
                        <p class="pinyin">Nǐ shì xué sheng ma?</p>
                        <p style="color: #999; font-size: 0.85rem;">Are you a student?</p>
                    </div>
                </div>

                <div style="margin: 1.5rem 0; padding: 1rem; background: #f9f9f9; border-radius: 6px;">
                    <p><strong>How to answer:</strong></p>
                    <p style="margin: 0.5rem 0; color: #666;">Yes: <strong>是</strong> (Shì) or <strong>是的</strong> (Shì de)</p>
                    <p style="margin: 0.5rem 0; color: #666;">No: <strong>不是</strong> (Bú shì) or give full answer</p>
                </div>
            </div>
        `
    },
    {
        number: 7,
        title: "The Particle 呢 (ne)",
        subtitle: "Reciprocal questions - 'And you?'",
        html: `
            <h2 class="slide-title">Asking with 呢 (ne)</h2>
            <div class="slide-content">
                <div style="background: #f3e5f5; padding: 1.5rem; border-radius: 8px; margin: 1.5rem 0;">
                    <p><strong>What is 呢?</strong></p>
                    <p style="color: #666; margin-top: 0.5rem;">This particle is used to ask <em>"How about...?"</em> or <em>"And...?"</em> when context is already clear from conversation.</p>
                </div>

                <div style="margin: 2rem 0; padding: 1.5rem; background: #f0e5f5; border-left: 4px solid #9c27b0;">
                    <p><strong>Common pattern:</strong></p>
                    <p style="margin-top: 0.5rem; color: #666;">Person A states something about themselves</p>
                    <p style="margin-top: 0.5rem; color: #666;">Person A asks: Noun/Pronoun + <strong>呢?</strong></p>
                </div>

                <div style="margin: 2rem 0;">
                    <p><strong>Dialogue Example:</strong></p>
                    <div style="margin: 1rem 0; padding: 1rem; background: #f5f5f5; border-radius: 6px;">
                        <p style="margin: 0.5rem 0;"><strong>A:</strong> <span class="zh-text">我是学生</span> (Wǒ shì xué sheng)</p>
                        <p style="color: #999; font-size: 0.85rem;">A: I am a student</p>
                    </div>
                    <div style="margin: 1rem 0; padding: 1rem; background: #fff8f0; border-left: 4px solid #C0945E; border-radius: 6px;">
                        <p style="margin: 0.5rem 0;"><strong>A:</strong> <span class="zh-text">你呢?</span> (Nǐ ne?)</p>
                        <p style="color: #999; font-size: 0.85rem;">A: And you?</p>
                    </div>
                    <div style="margin: 1rem 0; padding: 1rem; background: #f5f5f5; border-radius: 6px;">
                        <p style="margin: 0.5rem 0;"><strong>B:</strong> <span class="zh-text">我不是学生，我是警察</span> (Wǒ bú shì xué sheng, wǒ shì jǐngchá)</p>
                        <p style="color: #999; font-size: 0.85rem;">B: I am not a student. I am a policeman.</p>
                    </div>
                </div>

                <p style="margin-top: 1.5rem; color: #666;"><strong>💡 Difference from 吗:</strong> 吗 (ma) makes any statement into a question. 呢 (ne) only works when context is already established!</p>
            </div>
        `
    },
    {
        number: 8,
        title: "Dialogue 1: Meeting Teacher Pan",
        subtitle: "Real conversation example",
        html: `
            <h2 class="slide-title">对话 1: Meeting a Teacher</h2>
            <div class="slide-content">
                <div style="margin: 1.5rem 0; padding: 1rem; background: #e3f2fd; border-radius: 6px;">
                    <p style="color: #666; font-size: 0.9rem; margin-bottom: 0.5rem;">CHARACTERS:</p>
                    <p style="margin: 0.25rem 0;"><strong>范二 (Fan Er)</strong> - Student (Husky 🐕)</p>
                    <p style="margin: 0.25rem 0;"><strong>潘老师 (Teacher Pan)</strong> - Teacher (Person)</p>
                </div>

                <div style="margin: 2rem 0; padding: 1.5rem; background: #f5f5f5; border-radius: 8px;">
                    <div style="margin: 1.5rem 0; padding: 1rem; background: white; border-left: 4px solid #6A2C3C; border-radius: 4px;">
                        <p style="color: #999; font-size: 0.85rem; margin-bottom: 0.5rem;">Fan Er says:</p>
                        <p style="margin: 0.5rem 0; font-size: 1.1rem;"><span class="zh-text">潘老师，好久不见，您最近怎么样?</span></p>
                        <p class="pinyin">Pān lǎoshī, hǎo jiǔ bú jiàn, nín zuì jìn zěn me yàng?</p>
                        <p style="color: #666; margin-top: 0.5rem;"><em>"Teacher Pan, long time no see. How have you been recently?"</em></p>
                    </div>

                    <div style="margin: 1.5rem 0; padding: 1rem; background: white; border-left: 4px solid #C0945E; border-radius: 4px;">
                        <p style="color: #999; font-size: 0.85rem; margin-bottom: 0.5rem;">Teacher Pan replies:</p>
                        <p style="margin: 0.5rem 0; font-size: 1.1rem;"><span class="zh-text">不错!</span></p>
                        <p class="pinyin">Bú cuò!</p>
                        <p style="color: #666; margin-top: 0.5rem;"><em>"Not bad! / Good!"</em></p>
                    </div>
                </div>

                <p style="margin-top: 1.5rem; color: #666;"><strong>📌 Grammar Points:</strong></p>
                <ul style="padding-left: 2rem; color: #666; margin-top: 0.5rem;">
                    <li><strong>好久不见</strong> - "Long time no see" (greeting for old acquaintances)</li>
                    <li><strong>您</strong> - Formal "you" (respectful, learned in 1.1)</li>
                    <li><strong>最近怎么样</strong> - "How are you recently?" (common greeting)</li>
                </ul>
            </div>
        `
    },
    {
        number: 9,
        title: "Dialogue 2: Meeting a Stranger",
        subtitle: "New acquaintances conversation",
        html: `
            <h2 class="slide-title">对话 2: Making New Acquaintances</h2>
            <div class="slide-content">
                <div style="margin: 1.5rem 0; padding: 1rem; background: #e3f2fd; border-radius: 6px;">
                    <p style="color: #666; font-size: 0.9rem; margin-bottom: 0.5rem;">CHARACTERS:</p>
                    <p style="margin: 0.25rem 0;"><strong>咖喱 (Gali)</strong> - Cat 🐱</p>
                    <p style="margin: 0.25rem 0;"><strong>范二 (Fan Er)</strong> - Husky 🐕</p>
                </div>

                <div style="margin: 2rem 0; padding: 1.5rem; background: #f5f5f5; border-radius: 8px;">
                    <div style="margin: 1.5rem 0; padding: 1rem; background: white; border-left: 4px solid #6A2C3C; border-radius: 4px;">
                        <p style="color: #999; font-size: 0.85rem; margin-bottom: 0.5rem;">Gali starts the conversation:</p>
                        <p style="margin: 0.5rem 0; font-size: 1.1rem;"><span class="zh-text">你好，我叫咖喱。</span></p>
                        <p class="pinyin">Nǐ hǎo, wǒ jiào Gà Li.</p>
                        <p style="color: #666; margin-top: 0.5rem;"><em>"Hello, my name is Gali."</em></p>
                    </div>

                    <div style="margin: 1.5rem 0; padding: 1rem; background: white; border-left: 4px solid #C0945E; border-radius: 4px;">
                        <p style="color: #999; font-size: 0.85rem; margin-bottom: 0.5rem;">Fan Er asks with 吗:</p>
                        <p style="margin: 0.5rem 0; font-size: 1.1rem;"><span class="zh-text">你好，我叫范二。你是学生吗?</span></p>
                        <p class="pinyin">Nǐ hǎo, wǒ jiào Fàn Èr. Nǐ shì xué sheng ma?</p>
                        <p style="color: #666; margin-top: 0.5rem;"><em>"Hello, my name is Fan Er. Are you a student?"</em></p>
                    </div>

                    <div style="margin: 1.5rem 0; padding: 1rem; background: white; border-left: 4px solid #6A2C3C; border-radius: 4px;">
                        <p style="color: #999; font-size: 0.85rem; margin-bottom: 0.5rem;">Gali answers and asks back with 呢:</p>
                        <p style="margin: 0.5rem 0; font-size: 1.1rem;"><span class="zh-text">是的，你呢?</span></p>
                        <p class="pinyin">Shì de, nǐ ne?</p>
                        <p style="color: #666; margin-top: 0.5rem;"><em>"Yes, and you?"</em></p>
                    </div>

                    <div style="margin: 1.5rem 0; padding: 1rem; background: white; border-left: 4px solid #C0945E; border-radius: 4px;">
                        <p style="color: #999; font-size: 0.85rem; margin-bottom: 0.5rem;">Fan Er gives a compound answer:</p>
                        <p style="margin: 0.5rem 0; font-size: 1.1rem;"><span class="zh-text">我不是学生，我是警察。</span></p>
                        <p class="pinyin">Wǒ bú shì xué sheng, wǒ shì jǐngchá.</p>
                        <p style="color: #666; margin-top: 0.5rem;"><em>"I am not a student. I am a policeman."</em></p>
                    </div>
                </div>

                <p style="margin-top: 1.5rem; color: #666;"><strong>📌 Key Phrases:</strong></p>
                <ul style="padding-left: 2rem; color: #666; margin-top: 0.5rem;">
                    <li><strong>是的</strong> - "Yes" (affirmative response)</li>
                    <li><strong>你呢?</strong> - "And you?" (using the particle 呢)</li>
                    <li><strong>我不是...，我是...</strong> - "I'm not X, I'm Y" (negation + affirmation)</li>
                </ul>
            </div>
        `
    },
    {
        number: 10,
        title: "Extended Vocabulary",
        subtitle: "More professions and descriptors",
        html: `
            <h2 class="slide-title">Extended Vocabulary</h2>
            <div class="slide-content">
                <p style="margin: 1rem 0; color: #666;"><strong>Additional Professions:</strong></p>
                <table class="vocab-table">
                    <thead>
                        <tr>
                            <th>Chinese</th>
                            <th>Pinyin</th>
                            <th>Meaning</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span class="zh-text">医生</span></td>
                            <td class="pinyin">yī shēng</td>
                            <td>Doctor</td>
                        </tr>
                        <tr>
                            <td><span class="zh-text">工程师</span></td>
                            <td class="pinyin">gōng chéng shī</td>
                            <td>Engineer</td>
                        </tr>
                        <tr>
                            <td><span class="zh-text">律师</span></td>
                            <td class="pinyin">lǜ shī</td>
                            <td>Lawyer</td>
                        </tr>
                        <tr>
                            <td><span class="zh-text">会计</span></td>
                            <td class="pinyin">kuài jì</td>
                            <td>Accountant</td>
                        </tr>
                        <tr>
                            <td><span class="zh-text">艺术家</span></td>
                            <td class="pinyin">yì shù jiā</td>
                            <td>Artist</td>
                        </tr>
                    </tbody>
                </table>

                <p style="margin: 1.5rem 0; color: #666;"><strong>Gender/Age Descriptors (Bonus):</strong></p>
                <table class="vocab-table">
                    <thead>
                        <tr>
                            <th>Chinese</th>
                            <th>Pinyin</th>
                            <th>Meaning</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span class="zh-text">男</span></td>
                            <td class="pinyin">nán</td>
                            <td>Male</td>
                        </tr>
                        <tr>
                            <td><span class="zh-text">女</span></td>
                            <td class="pinyin">nǚ</td>
                            <td>Female</td>
                        </tr>
                        <tr>
                            <td><span class="zh-text">男生</span></td>
                            <td class="pinyin">nán shēng</td>
                            <td>Boy/Male student</td>
                        </tr>
                        <tr>
                            <td><span class="zh-text">女生</span></td>
                            <td class="pinyin">nǚ shēng</td>
                            <td>Girl/Female student</td>
                        </tr>
                    </tbody>
                </table>

                <p style="margin-top: 1.5rem; color: #666;"><strong>💡 Usage:</strong> These can be combined with 是: <strong>我是男医生</strong> (I am a male doctor)</p>
            </div>
        `
    },
    {
        number: 11,
        title: "Grammar Summary",
        subtitle: "Key structures review",
        html: `
            <h2 class="slide-title">Grammar Summary</h2>
            <div class="slide-content">
                <div style="margin: 1.5rem 0; padding: 1.5rem; background: #fff8f0; border-left: 4px solid #C0945E; border-radius: 6px;">
                    <p><strong>1. The 是 (shì) Verb</strong></p>
                    <p style="margin-top: 0.5rem; color: #666;"><strong>Pattern:</strong> Subject + 是 + Noun (profession/identity)</p>
                    <p style="margin-top: 0.5rem; color: #999;">Example: 我是老师 (I am a teacher)</p>
                </div>

                <div style="margin: 1.5rem 0; padding: 1.5rem; background: #f0f5f0; border-left: 4px solid #10b981; border-radius: 6px;">
                    <p><strong>2. Negation with 不 (bù/bú)</strong></p>
                    <p style="margin-top: 0.5rem; color: #666;"><strong>Pattern:</strong> Subject + 不是 + Noun</p>
                    <p style="margin-top: 0.5rem; color: #999;">Example: 我不是学生 (I am not a student)</p>
                    <p style="margin-top: 0.5rem; font-size: 0.85rem;"><strong>⚠️ Tone change:</strong> 不 becomes bú before 4th tone</p>
                </div>

                <div style="margin: 1.5rem 0; padding: 1.5rem; background: #e8f5e9; border-left: 4px solid #10b981; border-radius: 6px;">
                    <p><strong>3. Yes/No Questions with 吗 (ma)</strong></p>
                    <p style="margin-top: 0.5rem; color: #666;"><strong>Pattern:</strong> Statement + 吗?</p>
                    <p style="margin-top: 0.5rem; color: #999;">Example: 你是学生吗? (Are you a student?)</p>
                    <p style="margin-top: 0.5rem; font-size: 0.85rem;">Answer: Yes = 是 / 是的 | No = 不是</p>
                </div>

                <div style="margin: 1.5rem 0; padding: 1.5rem; background: #f3e5f5; border-left: 4px solid #9c27b0; border-radius: 6px;">
                    <p><strong>4. Reciprocal Questions with 呢 (ne)</strong></p>
                    <p style="margin-top: 0.5rem; color: #666;"><strong>Pattern:</strong> Noun/Pronoun + 呢?</p>
                    <p style="margin-top: 0.5rem; color: #999;">Example: 你呢? (And you?)</p>
                    <p style="margin-top: 0.5rem; font-size: 0.85rem;">Used when context is already established</p>
                </div>

                <div style="margin: 1.5rem 0; padding: 1rem; background: #fffbf0; border-radius: 6px;">
                    <p style="color: #666; line-height: 1.8;"><strong>Quick Tip:</strong> Most Chinese sentences follow the pattern <strong>Subject + Verb + Object</strong>, just like English!</p>
                </div>
            </div>
        `
    },
    {
        number: 12,
        title: "Practice Challenge",
        subtitle: "Interactive exercise",
        html: `
            <h2 class="slide-title">Practice Challenge 练习</h2>
            <div class="slide-content">
                <p style="margin-bottom: 1.5rem; color: #666;"><strong>Scenario:</strong> You are <strong>范二 (Fan Er)</strong>, a policeman. Complete the introduction dialogue:</p>

                <div style="background: #f5f5f5; padding: 1.5rem; border-radius: 8px; margin: 1.5rem 0;">
                    <p style="color: #999; font-size: 0.85rem; margin-bottom: 0.5rem;">Your Profile:</p>
                    <ul style="padding-left: 1.5rem; color: #666; margin-bottom: 1rem;">
                        <li><strong>Name:</strong> 范二 (Fàn Èr)</li>
                        <li><strong>Gender:</strong> 男 (Male / 男生)</li>
                        <li><strong>Profession:</strong> 警察 (Policeman)</li>
                    </ul>
                </div>

                <div style="background: white; padding: 1.5rem; border-left: 4px solid #C0945E; border-radius: 6px; margin: 1.5rem 0;">
                    <p style="margin-bottom: 1rem; color: #666;"><strong>Fill in the blanks:</strong></p>
                    <ol style="padding-left: 1.5rem; line-height: 2;">
                        <li><span class="zh-text">你好，我叫</span> _________ (Hello, I'm called...)</li>
                        <li><span class="zh-text">我是</span> _________ (I am a...)</li>
                        <li><span class="zh-text">我不是</span> _________ (I am not a...)</li>
                    </ol>
                </div>

                <p style="margin-top: 2rem; padding: 1rem; background: #fff8f0; border-radius: 6px; color: #666;"><strong>💡 Challenge:</strong> Try speaking this introduction aloud 3 times without looking at the Pinyin below!</p>

                <div style="margin-top: 1.5rem; padding: 1rem; background: #f0f5f0; border-radius: 6px;">
                    <p style="font-size: 0.9rem; color: #999; margin-bottom: 0.5rem;">Sample answers (click to reveal in your mind!):</p>
                    <p style="margin: 0.5rem 0; color: #999;"><em>1. 范二 (Fàn Èr)</em></p>
                    <p style="margin: 0.5rem 0; color: #999;"><em>2. 警察 (jǐngchá)</em></p>
                    <p style="margin: 0.5rem 0; color: #999;"><em>3. 学生 (xué sheng)</em></p>
                </div>
            </div>
        `
    },
    {
        number: 13,
        title: "Module Wrap-up",
        subtitle: "What you've learned",
        html: `
            <h2 class="slide-title">Congratulations! 恭喜!</h2>
            <div class="slide-content">
                <p style="margin-bottom: 1.5rem; font-size: 1.05rem; color: #666;">You've completed HSK 1 - Module 1.2!</p>

                <div style="background: #e8f5e9; padding: 1.5rem; border-radius: 8px; margin: 1.5rem 0;">
                    <p style="font-weight: 600; color: #2e7d32; margin-bottom: 1rem;">You can now:</p>
                    <ul style="padding-left: 1.5rem; color: #333; line-height: 2;">
                        <li>✓ Greet friends you haven't seen in a long time</li>
                        <li>✓ Ask people how they've been recently</li>
                        <li>✓ Tell people your profession or identity</li>
                        <li>✓ Ask Yes/No questions using 吗</li>
                        <li>✓ Ask reciprocal questions using 呢</li>
                        <li>✓ Understand tone sandhi for 不 before 4th tone</li>
                        <li>✓ Recognize and respond to common social inquiries</li>
                    </ul>
                </div>

                <div style="background: #fff3e0; padding: 1.5rem; border-radius: 8px; margin: 1.5rem 0; border-left: 4px solid #C0945E;">
                    <p style="font-weight: 600; color: #E65100; margin-bottom: 1rem;">Next Steps:</p>
                    <ul style="padding-left: 1.5rem; color: #333; line-height: 1.8;">
                        <li>📖 <strong>Review:</strong> Go through the slides again to solidify your understanding</li>
                        <li>✏️ <strong>Practice:</strong> Take the assessment quiz to test your knowledge</li>
                        <li>🎤 <strong>Speak:</strong> Practice the dialogues out loud with different tones</li>
                        <li>🚀 <strong>Prepare:</strong> Get ready for Module 1.3 - Family & Relationships</li>
                    </ul>
                </div>

                <div style="margin: 2rem 0; padding: 1.5rem; background: #f5f5f5; border-radius: 8px; text-align: center;">
                    <p style="font-size: 1.05rem; color: #666; margin-bottom: 0.5rem;"><strong>Ready to test your knowledge?</strong></p>
                    <p style="color: #999;">Click "Assessment" in the sidebar to start the quiz!</p>
                </div>
            </div>
        `
    }
];
