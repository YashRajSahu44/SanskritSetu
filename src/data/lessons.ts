import { Unit } from '../types';

export const UNITS: Unit[] = [
  {
    id: 1,
    title: 'Unit 1: First Steps',
    subtitle: 'Beginnings of Devavani',
    description: 'Master the sacred sounds of Devanagari, fundamental vowels and consonants, and everyday greetings.',
    icon: 'Sparkles',
    color: '#782C32',
    lessons: [
      {
        id: 'u1-l1',
        unitId: 1,
        order: 1,
        title: 'Introduction & Sacred Sounds',
        subtitle: 'The spirit of Sanskrit and the sacred Om',
        description: 'Discover why Sanskrit is known as the "perfected language" and learn sacred phonetic foundations.',
        xpReward: 20,
        icon: 'Flame',
        exercises: [
          {
            id: 'u1-l1-e1',
            type: 'match-meaning',
            prompt: 'What is the literal etymological meaning of the word "Sanskrit" (संस्कृतम्)?',
            options: ['Ancient language', 'Refined, perfected, or well-formed', 'Spoken by kings', 'Mythical story'],
            correctAnswer: 'Refined, perfected, or well-formed',
            explanation: 'संस्कृतम् comes from "सम्" (together, completely) and "कृत" (formed/crafted), meaning refined, polished, or systematically perfected by grammatical science.',
            grammarNote: 'Prefix सम् (sam) + root कृ (kṛ - to do/make) with suffix क्त (kta).'
          },
          {
            id: 'u1-l1-e2',
            type: 'select-sanskrit',
            prompt: 'Which sacred syllable is considered the primordial sound (Pranava) in Sanskrit?',
            options: ['ॐ (Aum)', 'श्री (Śrī)', 'ह्रीं (Hrīṁ)', 'स्वाहा (Svāhā)'],
            correctAnswer: 'ॐ (Aum)',
            explanation: 'The sacred syllable ॐ (Aum) represents the primordial vibration embracing creation (A), preservation (U), and dissolution (M).',
            sanskritContext: 'ॐ इत्येतदक्षरमिदं सर्वम् — Mandukya Upanishad'
          },
          {
            id: 'u1-l1-e3',
            type: 'match-pairs',
            prompt: 'Match the Sanskrit greeting and honorific words to their English meanings:',
            pairs: [
              { sanskrit: 'नमस्ते (Namaste)', english: 'I bow to you / Greetings' },
              { sanskrit: 'स्वागतम् (Svāgatam)', english: 'Welcome' },
              { sanskrit: 'धन्यवादः (Dhanyavādaḥ)', english: 'Thank you' },
              { sanskrit: 'शान्तिः (Śāntiḥ)', english: 'Peace' }
            ],
            correctAnswer: ['Namaste:I bow to you', 'Svagatam:Welcome', 'Dhanyavadah:Thank you', 'Santih:Peace'],
            explanation: 'These form the bedrock of courteous conversational Sanskrit (Sambhāṣaṇa Samskṛtam).'
          },
          {
            id: 'u1-l1-e4',
            type: 'complete-sentence',
            prompt: 'Complete the traditional morning greeting: "शुभ _______।"',
            sanskritContext: 'शुभ ______ (Good morning)',
            options: ['प्रभातम् (Prabhātam)', 'रात्रिः (Rātriḥ)', 'भोजनम् (Bhojanam)', 'मार्गः (Mārgaḥ)'],
            correctAnswer: 'प्रभातम् (Prabhātam)',
            explanation: 'शुभप्रभातम् (Śubha-prabhātam) means "Good morning" or "Auspicious dawn". शुभ (auspicious) + प्रभातम् (dawn).',
            grammarNote: 'Karmadharaya compound of adjective शुभ and noun प्रभातम्.'
          },
          {
            id: 'u1-l1-e5',
            type: 'image-choice',
            prompt: 'Which Sanskrit word describes the open palm gesture of greeting (Añjali Mudrā)?',
            imageHint: 'Handshake',
            options: ['नमस्ते (Namaste)', 'गच्छामि (Gacchāmi)', 'पुस्तकम् (Pustakam)', 'जलम् (Jalam)'],
            correctAnswer: 'नमस्ते (Namaste)',
            explanation: 'Namaste is both a vocal greeting and an embodied gesture of reverent acknowledgement.'
          }
        ]
      },
      {
        id: 'u1-l2',
        unitId: 1,
        order: 2,
        title: 'Sanskrit Vowels (Svara)',
        subtitle: 'The independent sounds that give life to speech',
        description: 'Learn short (Hrasva) and long (Dīrgha) vowels: अ, आ, इ, ई, उ, ऊ, ऋ, and diphthongs.',
        xpReward: 25,
        icon: 'BookOpen',
        exercises: [
          {
            id: 'u1-l2-e1',
            type: 'match-meaning',
            prompt: 'In Sanskrit phonetics, vowels are known as "स्वराः" (Svarāḥ). Why are they called so?',
            options: ['They shine or sound independently without needing consonants', 'They are only written, never spoken', 'They are modern letters', 'They only exist at the end of words'],
            correctAnswer: 'They shine or sound independently without needing consonants',
            explanation: 'स्वयं राजन्ते इति स्वराः — "Vowels are those that shine forth by themselves without depending on another sound for vocalization."'
          },
          {
            id: 'u1-l2-e2',
            type: 'select-sanskrit',
            prompt: 'Which vowel is the long (Dīrgha) counterpart of "इ" (i)?',
            options: ['ई (ī)', 'उ (u)', 'ए (e)', 'अ (a)'],
            correctAnswer: 'ई (ī)',
            explanation: 'In Sanskrit prosody, short vowels take 1 mātrā (measure of time), while long vowels like "ई" take 2 mātrās.'
          },
          {
            id: 'u1-l2-e3',
            type: 'match-pairs',
            prompt: 'Match each vowel with its phonological classification:',
            pairs: [
              { sanskrit: 'अ (a)', english: 'Short guttural vowel (1 mātrā)' },
              { sanskrit: 'आ (ā)', english: 'Long guttural vowel (2 mātrās)' },
              { sanskrit: 'ऋ (ṛ)', english: 'Retroflex vocalic liquid' },
              { sanskrit: 'ओ (o)', english: 'Combined diphthong (Guṇa vowel)' }
            ],
            correctAnswer: ['a:short guttural', 'aa:long guttural', 'ri:retroflex vocalic', 'o:combined diphthong'],
            explanation: 'Panini classified sounds by their place of vocal articulation (Sthāna) and internal effort (Kāraṇa).'
          },
          {
            id: 'u1-l2-e4',
            type: 'arrange-words',
            prompt: 'Arrange the first four primary Sanskrit vowels in their correct alphabetical order:',
            tokens: ['ई', 'अ', 'इ', 'आ'],
            correctAnswer: ['अ', 'आ', 'इ', 'ई'],
            explanation: 'The standard Varnamala begins with short and long pairs: अ (a), आ (ā), followed by इ (i), ई (ī).'
          }
        ]
      },
      {
        id: 'u1-l3',
        unitId: 1,
        order: 3,
        title: 'Consonants (Vyañjana)',
        subtitle: 'The five consonant classes from throat to lips',
        description: 'Explore the scientific arrangement of consonants: Ka-varga, Ca-varga, Ta-varga, and Pa-varga.',
        xpReward: 25,
        icon: 'Compass',
        exercises: [
          {
            id: 'u1-l3-e1',
            type: 'match-meaning',
            prompt: 'How is the Sanskrit consonant table (Varga) organized?',
            options: ['Scientifically by point of articulation from back of throat to lips', 'Randomly based on stroke count', 'In order of modern English letters', 'By mythological animals'],
            correctAnswer: 'Scientifically by point of articulation from back of throat to lips',
            explanation: 'Sanskrit consonants progress strictly from the throat (Ka-varga / Guttural), palate (Ca-varga / Palatal), roof of mouth (Ṭa-varga / Retroflex), teeth (Ta-varga / Dental), to lips (Pa-varga / Labial).'
          },
          {
            id: 'u1-l3-e2',
            type: 'select-sanskrit',
            prompt: 'Which of these belongs to the Guttural group (क-वर्ग) produced at the throat?',
            options: ['ख (kha)', 'च (ca)', 'त (ta)', 'प (pa)'],
            correctAnswer: 'ख (kha)',
            explanation: 'क, ख, ग, घ, ङ are Kaṇṭhya (guttural) consonants originating in the throat.'
          },
          {
            id: 'u1-l3-e3',
            type: 'complete-sentence',
            prompt: 'Identify the nasal consonant ending the Labial class (प, फ, ब, भ, ____):',
            options: ['म (ma)', 'न (na)', 'ण (ṇa)', 'ञ (ña)'],
            correctAnswer: 'म (ma)',
            explanation: 'The labial class concludes with the bilabial nasal consonant "म" (ma), articulated by closing both lips.'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Unit 2: Everyday Sanskrit',
    subtitle: 'Living Words of the Gurukul',
    description: 'Learn common nouns, numbers 1–10, family words, food, water, and tools of daily life.',
    icon: 'Coffee',
    color: '#C99A45',
    lessons: [
      {
        id: 'u2-l1',
        unitId: 2,
        order: 1,
        title: 'Essential Nouns & Water',
        subtitle: 'Water, books, fruits, and trees',
        description: 'Expand your practical vocabulary with foundational tangible nouns.',
        xpReward: 20,
        icon: 'Feather',
        exercises: [
          {
            id: 'u2-l1-e1',
            type: 'match-meaning',
            prompt: 'What does the Sanskrit word "जलम्" (Jalam) mean?',
            options: ['Water', 'Fire', 'Earth', 'Wind'],
            correctAnswer: 'Water',
            explanation: 'जलम् (Jalam) is the neuter noun for water. Example: जलम् पिब (drink water).'
          },
          {
            id: 'u2-l1-e2',
            type: 'select-sanskrit',
            prompt: 'How do you say "book" or "manuscript" in Sanskrit?',
            options: ['पुस्तकम् (Pustakam)', 'फलम् (Phalam)', 'मित्रम् (Mitram)', 'वृक्षः (Vṛkṣaḥ)'],
            correctAnswer: 'पुस्तकम् (Pustakam)',
            explanation: 'पुस्तकम् is a neuter noun denoting a book, codex, or manuscript.'
          },
          {
            id: 'u2-l1-e3',
            type: 'image-choice',
            prompt: 'Select the Sanskrit word for the fruit displayed here:',
            imageHint: 'Apple',
            options: ['फलम् (Phalam)', 'जलम् (Jalam)', 'गृहम् (Gṛham)', 'अश्वः (Aśvaḥ)'],
            correctAnswer: 'फलम् (Phalam)',
            explanation: 'फलम् means fruit, as well as the karmic result of any undertaking.'
          },
          {
            id: 'u2-l1-e4',
            type: 'match-pairs',
            prompt: 'Connect each Sanskrit noun to its English equivalent:',
            pairs: [
              { sanskrit: 'गृहम् (Gṛham)', english: 'House / Home' },
              { sanskrit: 'वृक्षः (Vṛkṣaḥ)', english: 'Tree' },
              { sanskrit: 'पुष्पम् (Puṣpam)', english: 'Flower' },
              { sanskrit: 'पत्रम् (Patram)', english: 'Leaf / Letter' }
            ],
            correctAnswer: ['Grham:House', 'Vrksah:Tree', 'Puspam:Flower', 'Patram:Leaf'],
            explanation: 'These everyday natural and domestic words appear constantly in classical poetry and daily conversation.'
          }
        ]
      },
      {
        id: 'u2-l2',
        unitId: 2,
        order: 2,
        title: 'Sanskrit Numbers (Saṅkhyā)',
        subtitle: 'Count from one to ten in the language of mathematics',
        description: 'Learn the cardinal numerals: एकम्, द्वे, त्रीणि, चत्वारि, पञ्च...',
        xpReward: 25,
        icon: 'Hash',
        exercises: [
          {
            id: 'u2-l2-e1',
            type: 'match-meaning',
            prompt: 'What number does "पञ्च" (Pañca) represent?',
            options: ['Five (5)', 'Three (3)', 'Seven (7)', 'Ten (10)'],
            correctAnswer: 'Five (5)',
            explanation: 'पञ्च (Pañca) means 5, cognate with Greek "pente" and Latin "quinque". Think of Panchatantra (five treatises) or Panchamahabhuta (five elements).'
          },
          {
            id: 'u2-l2-e2',
            type: 'select-sanskrit',
            prompt: 'How do you say "One" in neuter cardinal form?',
            options: ['एकम् (Ekam)', 'द्वे (Dve)', 'त्रीणि (Trīṇi)', 'दश (Daśa)'],
            correctAnswer: 'एकम् (Ekam)',
            explanation: '"एकम् सत् विप्रा बहुधा वदन्ति" — Truth is One, the wise speak of it in various ways (Rigveda 1.164.46).'
          },
          {
            id: 'u2-l2-e3',
            type: 'arrange-words',
            prompt: 'Order the Sanskrit numbers in ascending order from 1 to 4:',
            tokens: ['त्रीणि (3)', 'द्वे (2)', 'चत्वारि (4)', 'एकम् (1)'],
            correctAnswer: ['एकम् (1)', 'द्वे (2)', 'त्रीणि (3)', 'चत्वारि (4)'],
            explanation: 'एकम् (1), द्वे (2), त्रीणि (3), चत्वारि (4) are the first four cardinal numbers.'
          },
          {
            id: 'u2-l2-e4',
            type: 'complete-sentence',
            prompt: 'In Sanskrit, "दश" (Daśa) means ten. What does "दशमुखः" (Daśamukhaḥ) signify?',
            options: ['Ten-faced / Ten-headed', 'Ten books', 'Ten trees', 'Ten friends'],
            correctAnswer: 'Ten-faced / Ten-headed',
            explanation: 'दश (ten) + मुख (face/mouth) = having ten heads, an epithet of Ravana.'
          }
        ]
      },
      {
        id: 'u2-l3',
        unitId: 2,
        order: 3,
        title: 'Family & Relationships',
        subtitle: 'Father, mother, friend, and preceptor',
        description: 'Explore the words for kinships that form the core of Vedic social structures.',
        xpReward: 25,
        icon: 'Users',
        exercises: [
          {
            id: 'u2-l3-e1',
            type: 'match-meaning',
            prompt: 'What does "माता" (Mātā) mean in Sanskrit?',
            options: ['Mother', 'Father', 'Sister', 'Teacher'],
            correctAnswer: 'Mother',
            explanation: 'माता (stem: मातृ mātṛ) is feminine for mother, cognate with Latin "mater" and English "mother".'
          },
          {
            id: 'u2-l3-e2',
            type: 'select-sanskrit',
            prompt: 'Which word represents "father" in Sanskrit?',
            options: ['पिता (Pitā)', 'भ्राता (Bhrātā)', 'मित्रम् (Mitram)', 'पुत्रः (Putraḥ)'],
            correctAnswer: 'पिता (Pitā)',
            explanation: 'पिता (stem: पितृ pitṛ) means father, cognate with Latin "pater".'
          },
          {
            id: 'u2-l3-e3',
            type: 'match-pairs',
            prompt: 'Connect family relations in Sanskrit with English translations:',
            pairs: [
              { sanskrit: 'भ्राता (Bhrātā)', english: 'Brother' },
              { sanskrit: 'भगिनी (Bhaginī)', english: 'Sister' },
              { sanskrit: 'पुत्रः (Putraḥ)', english: 'Son' },
              { sanskrit: 'पुत्री (Putrī)', english: 'Daughter' }
            ],
            correctAnswer: ['Bhrata:Brother', 'Bhagini:Sister', 'Putrah:Son', 'Putri:Daughter'],
            explanation: 'Bhrātā is the direct ancestor of English "brother" and Latin "frater".'
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'Unit 3: Build Simple Sentences',
    subtitle: 'Synthesizing Words into Meaning',
    description: 'Learn pronouns (सः, सा, तत्, अहम्), grammatical gender, and construct your first sentences.',
    icon: 'MessageSquare',
    color: '#176B67',
    lessons: [
      {
        id: 'u3-l1',
        unitId: 3,
        order: 1,
        title: 'Pronouns & Three Genders',
        subtitle: 'He, She, It, and I in Sanskrit',
        description: 'Master Sanskrit pronouns across Masculine (पुंल्लिङ्ग), Feminine (स्त्रीलिङ्ग), and Neuter (नपुंसकलिङ्ग).',
        xpReward: 25,
        icon: 'UserCheck',
        exercises: [
          {
            id: 'u3-l1-e1',
            type: 'match-meaning',
            prompt: 'What does the pronoun "अहम्" (Aham) mean?',
            options: ['I / Myself', 'You', 'He', 'They'],
            correctAnswer: 'I / Myself',
            explanation: 'अहम् (Aham) is the first-person singular nominative pronoun: "I". As in "अहं ब्रह्मास्मि" (I am the ultimate reality).'
          },
          {
            id: 'u3-l1-e2',
            type: 'select-sanskrit',
            prompt: 'How do you say "He" (masculine third-person pronoun) in Sanskrit?',
            options: ['सः (Saḥ)', 'सा (Sā)', 'तत् (Tat)', 'त्वम् (Tvam)'],
            correctAnswer: 'सः (Saḥ)',
            explanation: 'सः (Saḥ) is masculine ("he"), सा (Sā) is feminine ("she"), and तत् (Tat) is neuter ("that / it").'
          },
          {
            id: 'u3-l1-e3',
            type: 'complete-sentence',
            prompt: 'Choose the appropriate pronoun for a female student: "_____ छात्रा अस्ति।"',
            sanskritContext: '______ छात्रा अस्ति (She is a female student)',
            options: ['सा (Sā)', 'सः (Saḥ)', 'तत् (Tat)', 'अहम् (Aham)'],
            correctAnswer: 'सा (Sā)',
            explanation: 'Because छात्रा (female student) is feminine, the matching feminine pronoun is "सा" (Sā).'
          },
          {
            id: 'u3-l1-e4',
            type: 'match-pairs',
            prompt: 'Match each pronoun to its grammatical gender and meaning:',
            pairs: [
              { sanskrit: 'सः (Saḥ)', english: 'He (Masculine)' },
              { sanskrit: 'सा (Sā)', english: 'She (Feminine)' },
              { sanskrit: 'तत् (Tat)', english: 'That / It (Neuter)' },
              { sanskrit: 'त्वम् (Tvam)', english: 'You (Second person)' }
            ],
            correctAnswer: ['Sah:He', 'Sa:She', 'Tat:That', 'Tvam:You'],
            explanation: 'Sanskrit rigorously marks gender concord between pronouns, adjectives, and nouns.'
          }
        ]
      },
      {
        id: 'u3-l2',
        unitId: 3,
        order: 2,
        title: 'Present Tense Verbs (Laṭ Lakāra)',
        subtitle: 'Reads, goes, drinks, and sits',
        description: 'Understand simple present tense endings: -ति (-ti) for third person singular, -मि (-mi) for first person.',
        xpReward: 30,
        icon: 'Zap',
        exercises: [
          {
            id: 'u3-l2-e1',
            type: 'complete-sentence',
            prompt: 'Fill in the blank: "रामः पुस्तकं _______।" (Rama reads a book)',
            sanskritContext: 'रामः पुस्तकं _______।',
            options: ['पठति (paṭhati)', 'पठामि (paṭhāmi)', 'पठन्ति (paṭhanti)', 'पठसि (paṭhasi)'],
            correctAnswer: 'पठति (paṭhati)',
            explanation: 'रामः (Rama) is third-person singular (प्रथमपुरुषः एकवचनम्), so the verb takes the suffix "-ति" (paṭhati).',
            grammarNote: 'Root पठ् (to read) + शप् (a) + ति (ti) = पठति.'
          },
          {
            id: 'u3-l2-e2',
            type: 'translate-sentence',
            prompt: 'What is the natural English translation of: "अहं जलं पिबामि।"?',
            sanskritContext: 'अहं जलं पिबामि।',
            options: ['I drink water.', 'He drinks water.', 'You drink water.', 'Water drinks him.'],
            correctAnswer: 'I drink water.',
            explanation: 'अहम् (I) + जलम् (water, accusative object) + पिबामि (I drink, first person singular ending in -मि).'
          },
          {
            id: 'u3-l2-e3',
            type: 'arrange-words',
            prompt: 'Arrange the tokens into the correct Sanskrit sentence meaning "The student goes home":',
            tokens: ['गृहं', 'गच्छति', 'छात्रः'],
            correctAnswer: ['छात्रः', 'गृहं', 'गच्छति'],
            explanation: 'Standard Sanskrit word order is SOV (Subject - Object - Verb): छात्रः (Student) + गृहम् (home) + गच्छति (goes).'
          },
          {
            id: 'u3-l2-e4',
            type: 'match-pairs',
            prompt: 'Connect roots to their 3rd-person singular present forms:',
            pairs: [
              { sanskrit: 'गम् (gam - to go)', english: 'गच्छति (gacchati - he/she goes)' },
              { sanskrit: 'भू (bhū - to be/become)', english: 'भवति (bhavati - it becomes/is)' },
              { sanskrit: 'खाद् (khād - to eat)', english: 'खादति (khādati - he/she eats)' },
              { sanskrit: 'लिख् (likh - to write)', english: 'लिखति (likhati - he/she writes)' }
            ],
            correctAnswer: ['gam:gacchati', 'bhu:bhavati', 'khad:khadati', 'likh:likhati'],
            explanation: 'Verbal stems transform in the present system before taking personal endings.'
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'Unit 4: Sanskrit Grammar',
    subtitle: 'The Architectural Matrix of Panini',
    description: 'Learn the Vibhaktis (cases), three grammatical numbers (including Dual), and basic Sandhi rules.',
    icon: 'Layers',
    color: '#8E3840',
    lessons: [
      {
        id: 'u4-l1',
        unitId: 4,
        order: 1,
        title: 'Introduction to Vibhakti (Cases)',
        subtitle: 'The 7 cases that govern grammatical relationships',
        description: 'Understand Nominative, Accusative, Instrumental, Dative, Ablative, Genitive, and Locative.',
        xpReward: 35,
        icon: 'Book',
        exercises: [
          {
            id: 'u4-l1-e1',
            type: 'match-meaning',
            prompt: 'How many primary case-inflections (Vibhaktis) exist in Sanskrit grammar?',
            options: ['Seven (7) plus Sambodhana (Vocative)', 'Three (3)', 'Ten (10)', 'Only one (1)'],
            correctAnswer: 'Seven (7) plus Sambodhana (Vocative)',
            explanation: 'Sanskrit has seven distinct grammatical cases: Prathamā (Nominative), Dvitīyā (Accusative), Tṛtīyā (Instrumental), Caturthī (Dative), Pañcamī (Ablative), Ṣaṣṭhī (Genitive), and Saptamī (Locative).'
          },
          {
            id: 'u4-l1-e2',
            type: 'complete-sentence',
            prompt: 'In the sentence "रामेण बाणः हतः" (By Rama an arrow was shot), what case is "रामेण" in?',
            options: ['Tṛtīyā (Instrumental - by/with)', 'Prathamā (Nominative)', 'Ṣaṣṭhī (Genitive - of)', 'Saptamī (Locative - in/on)'],
            correctAnswer: 'Tṛtīyā (Instrumental - by/with)',
            explanation: 'रामेण is the instrumental singular (तृतीयैकवचनम्) denoting the agent or instrument by which the action is performed.'
          },
          {
            id: 'u4-l1-e3',
            type: 'select-sanskrit',
            prompt: 'Which form represents the Genitive (6th case - "of Rama") in singular?',
            options: ['रामस्य (Rāmasya)', 'रामाय (Rāmāya)', 'रामात् (Rāmāt)', 'रामे (Rāme)'],
            correctAnswer: 'रामस्य (Rāmasya)',
            explanation: 'The masculine a-stem genitive singular ends in -स्य (-sya), e.g. रामस्य (of Rama), cognate with ancient Greek -osio/-ou.'
          },
          {
            id: 'u4-l1-e4',
            type: 'match-pairs',
            prompt: 'Match each Vibhakti with its English syntactic function:',
            pairs: [
              { sanskrit: 'प्रथमा (Prathamā)', english: 'Subject / Nominative' },
              { sanskrit: 'द्वितीया (Dvitīyā)', english: 'Direct Object / Accusative' },
              { sanskrit: 'चतुर्थी (Caturthī)', english: 'Indirect Object (for/to) / Dative' },
              { sanskrit: 'सप्तमी (Saptamī)', english: 'Location (in/at/on) / Locative' }
            ],
            correctAnswer: ['Prathama:Subject', 'Dvitiya:Direct Object', 'Caturthi:Indirect Object', 'Saptami:Location'],
            explanation: 'Case endings in Sanskrit carry syntactical meaning, allowing flexible word order.'
          }
        ]
      },
      {
        id: 'u4-l2',
        unitId: 4,
        order: 2,
        title: 'The Sanskrit Dual & Number',
        subtitle: 'Singular, Dual, and Plural (Eka, Dvi, Bahu)',
        description: 'Explore Sanskrit’s unique preservation of the Dual number (द्विवचनम्) for natural pairs.',
        xpReward: 30,
        icon: 'Columns',
        exercises: [
          {
            id: 'u4-l2-e1',
            type: 'match-meaning',
            prompt: 'Unlike English which has only Singular and Plural, Sanskrit has a third number called:',
            options: ['Dvivacanam (Dual - exactly two)', 'Bahuvacanam (Plural)', 'Ekavacanam (Singular)', 'Tri-vacanam (Triple)'],
            correctAnswer: 'Dvivacanam (Dual - exactly two)',
            explanation: 'Sanskrit meticulously preserves the Dual number (द्विवचनम्) for pairs such as two eyes (नेत्रे), two hands (हस्तौ), or two friends (मित्रौ).'
          },
          {
            id: 'u4-l2-e2',
            type: 'complete-sentence',
            prompt: 'Complete for two students walking: "छात्रौ ________।" (Two students walk)',
            options: ['गच्छतः (gacchataḥ)', 'गच्छति (gacchati)', 'गच्छन्ति (gacchanti)', 'गच्छामि (gacchāmi)'],
            correctAnswer: 'गच्छतः (gacchataḥ)',
            explanation: 'For dual subject छात्रौ, the 3rd person dual verb ending is -तः (-taḥ), hence गच्छतः.'
          }
        ]
      },
      {
        id: 'u4-l3',
        unitId: 4,
        order: 3,
        title: 'Basic Sandhi (Sound Junction)',
        subtitle: 'How vowels and consonants harmonize when meeting',
        description: 'Discover the euphonic rules that merge letters smoothly: अ + अ = आ, इ + अ = य.',
        xpReward: 35,
        icon: 'Shuffle',
        exercises: [
          {
            id: 'u4-l3-e1',
            type: 'match-meaning',
            prompt: 'What does "Sandhi" (सन्धिः) literally mean in Sanskrit linguistics?',
            options: ['Junction, union, or euphonic combination of sounds', 'Split words', 'Grammar book', 'Ancient verse'],
            correctAnswer: 'Junction, union, or euphonic combination of sounds',
            explanation: 'सम् + धा (to place together). Sandhi describes the phonetic assimilation that naturally occurs when word boundaries or syllables touch in spoken flow.'
          },
          {
            id: 'u4-l3-e2',
            type: 'complete-sentence',
            prompt: 'Apply Savarna Dirgha Sandhi: हिम + आलयः = _______ ?',
            options: ['हिमालयः (Himālayaḥ)', 'हिमलयः (Himalayaḥ)', 'हिमाल्यः (Himālyaḥ)', 'हेमालयः (Hemālayaḥ)'],
            correctAnswer: 'हिमालयः (Himālayaḥ)',
            explanation: 'अ + आ merges into the single long vowel आ (Akah savarne dīrghaḥ). हिम (snow) + आलयः (abode) = हिमालयः (abode of snow).'
          },
          {
            id: 'u4-l3-e3',
            type: 'translate-sentence',
            prompt: 'What is the combination of: विद्या + आलयः ?',
            options: ['विद्यालयः (Vidyālayaḥ - School/Abode of Learning)', 'विद्यलयः', 'विद्यालयम्', 'विद्योदयः'],
            correctAnswer: 'विद्यालयः (Vidyālayaḥ - School/Abode of Learning)',
            explanation: 'विद्या (knowledge) + आलयः (house/residence) yields विद्यालयः (school/institution).'
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: 'Unit 5: Wisdom Through Sanskrit',
    subtitle: 'Literature, Subhashitas & the Bhagavad Gita',
    description: 'Read and decipher famous Sanskrit aphorisms, Gita verses, and philosophical gems.',
    icon: 'Award',
    color: '#AA7E30',
    lessons: [
      {
        id: 'u5-l1',
        unitId: 5,
        order: 1,
        title: 'Timeless Subhashitas',
        subtitle: 'Poetic epigrams of moral wisdom',
        description: 'Explore the famous verse: "विद्या ददाति विनयं..." and the qualities of an educated mind.',
        xpReward: 35,
        icon: 'Scroll',
        exercises: [
          {
            id: 'u5-l1-e1',
            type: 'complete-sentence',
            prompt: 'Complete the famous shloka: "विद्या ददाति _______, विनयाद् याति पात्रताम्।"',
            sanskritContext: 'विद्या ददाति _______, विनयाद् याति पात्रताम्।',
            options: ['विनयम् (vinayam - humility)', 'धनम् (dhanam - wealth)', 'क्रोधम् (krodham - anger)', 'अहङ्कारम् (ahaṅkāram - pride)'],
            correctAnswer: 'विनयम् (vinayam - humility)',
            explanation: 'Vidya dadāti vinayam — True learning bestows humility; from humility comes worthiness; from worthiness comes wealth; from righteous wealth comes righteous deeds and true happiness.'
          },
          {
            id: 'u5-l1-e2',
            type: 'match-pairs',
            prompt: 'Match the four progressive stages of the Vidya subhashita:',
            pairs: [
              { sanskrit: 'विद्या -> विनयम्', english: 'Learning leads to Humility' },
              { sanskrit: 'विनयाद् -> पात्रताम्', english: 'Humility leads to Worthiness' },
              { sanskrit: 'पात्रत्वाद् -> धनम्', english: 'Worthiness brings Wealth' },
              { sanskrit: 'धनाद् धर्मः -> सुखम्', english: 'Wealth for Righteousness brings Joy' }
            ],
            correctAnswer: ['Vidya:Humility', 'Vinayad:Worthiness', 'Patratvad:Wealth', 'Dharmat:Joy'],
            explanation: 'A classic causal chain (Kāraṇa-mālā) celebrated in Hitopadesha and Panchatantra.'
          },
          {
            id: 'u5-l1-e3',
            type: 'translate-sentence',
            prompt: 'What does "उद्यमेन हि सिध्यन्ति कार्याणि न मनोरथैः" teach us?',
            options: ['Tasks succeed through diligence and exertion, not by mere wishful thinking.', 'Only money buys success.', 'Destiny decides everything.', 'Sleep brings fortune.'],
            correctAnswer: 'Tasks succeed through diligence and exertion, not by mere wishful thinking.',
            explanation: 'उद्यमेन (by enterprise/effort) alone do undertakings bear fruition, just as prey does not walk into the mouth of a sleeping lion.'
          }
        ]
      },
      {
        id: 'u5-l2',
        unitId: 5,
        order: 2,
        title: 'The Bhagavad Gita: Action & Mind',
        subtitle: 'Deciphering Chapter 2 Verse 47',
        description: 'Understand the philosophical vocabulary of Karmayoga: कर्म, अधिकार, फल, and आसक्ति.',
        xpReward: 40,
        icon: 'Sun',
        exercises: [
          {
            id: 'u5-l2-e1',
            type: 'complete-sentence',
            prompt: 'Complete the defining line: "कर्मण्येवाधिकारस्ते मा फलेषु _______।"',
            sanskritContext: 'कर्मण्येवाधिकारस्ते मा फलेषु _______।',
            options: ['कदाचन (kadācana)', 'सर्वदा (sarvadā)', 'पुनः (punaḥ)', 'सदा (sadā)'],
            correctAnswer: 'कदाचन (kadācana)',
            explanation: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन — "Your entitlement is to perform your duty, but never to the fruits thereof."'
          },
          {
            id: 'u5-l2-e2',
            type: 'match-meaning',
            prompt: 'In the Gita shloka, what does the compound "मा सङ्गोऽस्त्वकर्मणि" warn against?',
            options: ['Let not your attachment be to inaction or lethargy', 'Never do good work', 'Leave your family', 'Only meditate in caves'],
            correctAnswer: 'Let not your attachment be to inaction or lethargy',
            explanation: 'Krishna warns that relinquishing desire for results should never become an excuse for cynicism, inaction, or escapism (अकर्मणि).'
          },
          {
            id: 'u5-l2-e3',
            type: 'arrange-words',
            prompt: 'Arrange the tokens into the sacred motto from Gita 2.50: "Skillfulness in action is Yoga":',
            tokens: ['कर्मसु', 'योगः', 'कौशलम्'],
            correctAnswer: ['योगः', 'कर्मसु', 'कौशलम्'],
            explanation: 'योगः कर्मसु कौशलम् — Yoga is precision, equanimity, and masterly skill in performing one’s responsibilities.'
          }
        ]
      }
    ]
  }
];
