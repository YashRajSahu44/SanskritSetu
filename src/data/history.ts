import { HistoricalPeriod } from '../types';

export const HISTORICAL_PERIODS: HistoricalPeriod[] = [
  {
    id: 'early-vedic',
    period: 'Period 1',
    era: 'c. 1500 BCE – 1000 BCE',
    title: 'Early Vedic Traditions & Oral Preservation',
    icon: 'Flame',
    overview: 'The earliest documented phase of Sanskrit preserved through astonishing mnemonic oral systems of recitation.',
    keyTexts: ['Rigveda Samhita', 'Early Vedic Hymns', 'Nivids and Praisas'],
    keyFigures: ['Vedic Rishis (Vashistha, Vishvamitra, Dirghatamas, Lopamudra)'],
    linguisticCharacteristics: 'Archaic phonology, pitch accent (Udatta, Anudatta, Svarita), flexible nominal morphology with rich case endings, and older verbal paradigms featuring subjunctive (Leṭ) forms.',
    detailedDescription: 'Vedic Sanskrit represents an early branch of the Indo-Iranian and broader Indo-European language family. The hymns of the Rigveda were composed by poet-seers (Rishis) in northwestern South Asia. Instead of reliance on perishable physical media, Vedic culture developed an extraordinary oral preservation technology (the Patha system) comprising Samhitapatha (continuous text), Padapatha (word-by-word separation), Krama, Jata, and Ghana recitation paths where words were recited forward, backward, and interleaved. This mnemonic system enabled texts of thousands of verses to be transmitted across millennia with virtually zero phonetic drift, recognized today by UNESCO as an intangible cultural heritage of humanity.',
    scholarlyNotes: 'Linguists and philologists (such as Michael Witzel and Arthur Macdonell) emphasize that Vedic Sanskrit predates classical Sanskrit by several centuries and possesses distinct archaic grammatical rules, pitch accents, and vocabulary not present in post-Paninian Sanskrit.',
    relatedPassageId: 'rigveda-samgacchadhvam'
  },
  {
    id: 'later-vedic',
    period: 'Period 2',
    era: 'c. 1000 BCE – 500 BCE',
    title: 'Later Vedic Literature & The Upanishads',
    icon: 'Sun',
    overview: 'The transition from sacrificial ritualism to profound internal inquiry, metaphysics, and early philosophical prose.',
    keyTexts: ['Samaveda & Yajurveda', 'Atharvaveda', 'Principal Upanishads (Brihadaranyaka, Chandogya, Katha, Isha)', 'Brahmanas & Aranyakas'],
    keyFigures: ['Yajnavalkya', 'Gargi Vachaknavi', 'Maitreyi', 'Uddalaka Aruni', 'Pippalada'],
    linguisticCharacteristics: 'Gradual loss of the subjunctive mood; streamlining of verbal conjugations; emergence of reflective prose alongside metrical verse; expanding philosophical vocabulary.',
    detailedDescription: 'As Vedic society expanded eastward across the Gangetic plain, scholarly thought underwent a dramatic internalization known as the Upanishadic turn. While earlier literature focused heavily on cosmic ceremonies (Yajña), the Upanishads (literally "sitting down near a teacher") turned scrutiny toward the nature of consciousness (Ātman), the ground of being (Brahman), and the ethics of karma. Socratic-style intellectual dialogues flourished in royal assemblies, such as King Janaka\'s court where female scholars like Gargi Vachaknavi engaged preeminent thinkers like Yajnavalkya in debate on the frontiers of the cosmos.',
    scholarlyNotes: 'The linguistic style of the classical Upanishads represents Middle Vedic to Late Vedic prose, bridging the archaic poetic register of the Rigveda with the structured classical syntax formulated by later grammarians.',
    relatedPassageId: 'isha-1'
  },
  {
    id: 'panini-classical',
    period: 'Period 3',
    era: 'c. 5th – 4th Century BCE',
    title: 'Panini & The Classical Standardization',
    icon: 'Cpu',
    overview: 'The creation of the Ashtadhyayi — the world’s earliest complete generative, rule-based grammatical treatise.',
    keyTexts: ['Aṣṭādhyāyī of Pāṇini', 'Vārttikas of Kātyāyana', 'Mahābhāṣya of Patañjali'],
    keyFigures: ['Pāṇini (Salatura)', 'Kātyāyana', 'Patañjali'],
    linguisticCharacteristics: 'Formalized phonetic inventory (Shiva Sutras); definitive 8-chapter algebraic grammar (nearly 4,000 sutras) generating valid Sanskrit sentences through context-sensitive morphological rules.',
    detailedDescription: 'Panini, hailing from Salatura (near modern Charsadda), revolutionized human linguistic understanding by creating the Aṣṭādhyāyī ("Eight Chapters"). Operating like an advanced formal generative algorithm, the grammar employs meta-rules, null morphemes (lopa), marker letters (it-samjñā), and recursive derivations. Modern computer scientists, including Frits Staal and Leonard Bloomfield, observed that Panini’s notation anticipating Backus-Naur Form (BNF) centuries before modern computing. By providing this definitive mathematical foundation, Panini established "Samskrita" (refined, standardized) as a pan-Indian scholarly lingua franca distinct from regional vernaculars (Prakrits).',
    scholarlyNotes: 'Patanjali’s Mahabhashya (c. 2nd century BCE) consolidated this tradition, establishing Panini, Katyayana, and Patanjali as the "Munitraya" (trio of sages) who stabilized classical Sanskrit structure for the next two millennia.',
    relatedPassageId: 'gita-2-47'
  },
  {
    id: 'classical-shastras',
    period: 'Period 4',
    era: 'c. 1st Millennium CE (100 BCE – 1000 CE)',
    title: 'Classical Literature & Intellectual Shastras',
    icon: 'Feather',
    overview: 'The golden zenith of Sanskrit poetry, drama, astronomy, mathematics, surgery, and philosophical schools.',
    keyTexts: ['Abhijnanashakuntalam & Meghaduta (Kalidasa)', 'Aryabhatiya (Aryabhata)', 'Brahmasphutasiddhanta (Brahmagupta)', 'Charaka Samhita & Sushruta Samhita', 'Brahma Sutras & Bhashyas'],
    keyFigures: ['Kālidāsa', 'Āryabhaṭa', 'Varāhamihira', 'Brahmagupta', 'Caraka', 'Suśruta', 'Śaṅkarācārya'],
    linguisticCharacteristics: 'Highly cultivated kavya aesthetics, ornate compound words (Samasa), rich metrical meters (Chandas), and specialized technical terminology across disciplines.',
    detailedDescription: 'During this millennium, Sanskrit functioned as the preeminent transnational language of high culture across South and Southeast Asia (what Sheldon Pollock termed the "Sanskrit Cosmopolis"). In literature, Kalidasa achieved peerless poetic imagery and dramatic nuance. In sciences, Aryabhata calculated the value of Pi to four decimal places (3.1416) and proposed the diurnal rotation of the Earth; Brahmagupta established rules for zero as a number with negative quantities; and Sushruta documented complex surgical operations including rhinoplasty and cataract removal.',
    scholarlyNotes: 'Academic historians note that these scientific and medical texts developed through centuries of clinical observation and rigorous debate with rival traditions, rather than instantaneous divine revelation, demonstrating a vibrant empirical spirit.',
    relatedPassageId: 'aryabhatiya-ganita'
  },
  {
    id: 'manuscript-preservation',
    period: 'Period 5',
    era: 'c. 1000 CE – 1800 CE',
    title: 'Manuscripts, Commentaries & Transmission',
    icon: 'BookOpen',
    overview: 'The proliferation of palm-leaf manuscripts, multi-tiered commentaries (Bhashyas), and monastic universities.',
    keyTexts: ['Bhashyas of Ramanuja & Madhva', 'Sayana’s Rigveda Bhashya', 'Yuktibhasa (Kerala School of Mathematics)', 'Navya-Nyaya logical treatises'],
    keyFigures: ['Sayana & Vidyaranya', 'Rāmānuja', 'Madhvācārya', 'Mādhava of Sangamagrama', 'Gangeśa Upādhyāya'],
    linguisticCharacteristics: 'Emergence of Navya-Nyaya precision logic with dense conceptual compounding; regional scripts (Grantha, Sharada, Newari, Maithili, Nandinagari) used to scribe Sanskrit.',
    detailedDescription: 'While the Sanskrit oral tradition continued unbroken, written preservation flourished on palm-leaf (tāla-patra) and birch bark (bhūrja-patra). Monastic universities and royal libraries in Kashmir, Mithila, Varanasi, Tanjore, and Kerala became centers of intensive copying and critical commentary. The Kerala School of Astronomy and Mathematics (founded by Madhava of Sangamagrama, c. 14th century) produced infinite series approximations for sine, cosine, and arctangent centuries before Newton and Leibniz, recorded in treatises like Tantrasamgraha.',
    scholarlyNotes: 'India possesses an estimated five million historical manuscripts in Sanskrit and regional languages — the largest collection of pre-modern written material in the world — preserved today in institutions like the Saraswathi Mahal Library and Oriental Research Institutes.',
    relatedPassageId: 'subhashita-vidya'
  },
  {
    id: 'modern-era',
    period: 'Period 6',
    era: 'c. 19th Century – Present Day',
    title: 'Modern Era: Revival, Philology & Digital Humanities',
    icon: 'Globe',
    overview: 'Sanskrit in comparative linguistics, academic university chairs, digital archives, and modern revitalization.',
    keyTexts: ['Critical Edition of the Mahabharata (BORI)', 'Monier-Williams Sanskrit-English Dictionary', 'GRETIL (Göttingen Register of Electronic Texts)', 'Contemporary Sanskrit literature & daily news'],
    keyFigures: ['Sir William Jones', 'F. Max Müller', 'V. S. Sukthankar', 'Mahamahopadhyaya Kane', 'Modern Sanskrit scholars'],
    linguisticCharacteristics: 'Unicode standard Devanagari digitization, optical character recognition (OCR) of palm manuscripts, natural language processing (NLP) morphological parsers.',
    detailedDescription: 'In 1786, William Jones famously observed before the Asiatic Society of Bengal that Sanskrit possesses "a wonderful structure; more perfect than the Greek, more copious than the Latin, and more exquisitely refined than either," sparking the discipline of comparative Indo-European linguistics. The Bhandarkar Oriental Research Institute (BORI) in Pune spent nearly five decades preparing the 19-volume Critical Edition of the Mahabharata. Today, digital humanities projects digitize millions of manuscripts, while organizations like Samskrita Bharati demonstrate conversational fluency across global communities.',
    scholarlyNotes: 'Modern scholarship approaches Sanskrit objectively through historical linguistics, textual criticism, and epigraphy, preserving its rich intellectual legacy while fostering open academic inquiry free from dogma.',
    relatedPassageId: 'charaka-ayu'
  }
];
