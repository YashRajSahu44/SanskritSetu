import { ModernConnection } from '../types';

export const MODERN_CONNECTIONS: ModernConnection[] = [
  {
    id: 'math-binary-combinatorics',
    discipline: 'mathematics',
    title: 'Combinatorics & The Binary System in Prosody',
    subtitle: 'Pingala’s Chandaḥśāstra and Algorithmic Permutations',
    icon: 'Binary',
    sanskritPassage: 'द्वौ द्वौ गुरुरन्त्ये लः। रूपे शून्यम्। द्विः शून्ये।',
    transliteration: 'Dvau dvau gurur-antye laḥ | Rūpe śūnyam | Dviḥ śūnye ||',
    source: 'Chandaḥśāstra of Piṅgala (c. 3rd–2nd Century BCE), Chapter 8',
    englishTranslation: 'Double the previous, a heavy syllable (Guru) at the end, a light syllable (Laghu)... Place zero upon one; multiply by two for zero.',
    historicalContext: 'Pingala analyzed poetic meters consisting of long (Guru) and short (Laghu) syllables. To systematically enumerate all possible n-syllable meters without omission, he devised algorithms called Prastāra (expansion), Naṣṭa (finding meter from number), and Uddiṣṭa (finding number from meter). In doing so, he formulated the mathematical foundation of binary sequence conversion and what later European mathematicians called "Pascal’s Triangle" (termed Meru-prastāra by commentator Halayudha in the 10th century).',
    modernConnection: 'Modern computer science relies fundamentally on binary logic (0 and 1) and combinatorics. Pingala’s systematic representation of two-state syllables (Laghu = 0, Guru = 1) and his recursive algorithmic procedures directly mirror modern binary representations and power-of-two expansions.',
    scholarlyNuance: 'Pingala developed these combinatorial rules specifically for Sanskrit poetic metrics rather than electronic computers. While it is anachronistic to claim ancient India built computers, Pingala’s work is historically recognized in mathematics as South Asia\'s earliest formal binary algorithm and binomial distribution matrix.',
    references: [
      'Staal, Frits. "Universals: Studies in Indian Logic and Linguistics" (University of Chicago Press, 1988).',
      'Singh, Parmanand. "Acharya Hemachandra and the (so-called) Fibonacci Numbers", Mathematical Education (1986).',
      'Kak, Subhash. "Binary Numbers in Ancient India", Indian Journal of History of Science (2000).'
    ]
  },
  {
    id: 'math-zero-place-value',
    discipline: 'mathematics',
    title: 'Zero (Śūnya) & Positional Decimal Arithmetic',
    subtitle: 'From Philosophical Void to Computational Engine',
    icon: 'Hash',
    sanskritPassage: 'खद्विके खं खभाजितेन खम्।',
    transliteration: 'Khad-vike khaṁ kha-bhājitena kham |',
    source: 'Brāhmasphuṭasiddhānta of Brahmagupta (628 CE), Chapter 18',
    englishTranslation: 'Zero added to or subtracted from a number leaves it unchanged; zero multiplied by anything is zero...',
    historicalContext: 'The concept of Śūnya originated both as an ontological concept of voidness/spaciousness in Buddhist and Upanishadic philosophy, and as an algebraic placeholder symbol (Bindu / dot) in the Bakhshali manuscript (c. 3rd–4th century CE). In 628 CE, mathematician Brahmagupta took the revolutionary step of formalizing zero as a genuine number with operational arithmetic properties, including rules for positive numbers (dhana), negative numbers (ṛṇa), and zero (śūnya).',
    modernConnection: 'The decimal place-value system with zero enables global arithmetic, scientific computation, and modern algorithms. Fibonacci\'s 1202 book Liber Abaci introduced these "Indian numerals" (Modus Indorum) to Europe, acknowledging their origin in Indian mathematical treatises.',
    scholarlyNuance: 'While Brahmagupta correctly formalized addition, subtraction, and multiplication with zero, his treatment of division by zero (treating 0/0 as 0) was later refined by Bhaskara II and ultimately formalized through limits in modern calculus.',
    references: [
      'Plofker, Kim. "Mathematics in India" (Princeton University Press, 2009).',
      'Joseph, George Gheverghese. "The Crest of the Peacock: Non-European Roots of Mathematics" (Princeton University Press, 2011).',
      'Datta, B. & Singh, A. N. "History of Hindu Mathematics" (Asia Publishing House, 1962).'
    ]
  },
  {
    id: 'astronomy-earth-rotation',
    discipline: 'astronomy',
    title: 'Diurnal Earth Rotation & Epicyclic Models',
    subtitle: 'Aryabhata’s Kinetic Perspective on Celestial Motion',
    icon: 'Globe',
    sanskritPassage: 'अनुलोमगतिर्नौस्थः पश्यत्यचलं विलोमगं यद्वत्। अचलानि भानि तद्वत् समपश्चिमगानि लङ्कायाम्॥',
    transliteration: 'Anuloma-gatir-nausthaḥ paśyaty-acalaṁ vilomagaṁ yadvat | Acalāni bhāni tadvat sama-paścima-gāni laṅkāyām ||',
    source: 'Āryabhaṭīya of Āryabhaṭa (499 CE), Golapāda Verse 9',
    englishTranslation: 'Just as a person in a boat moving smoothly forward sees stationary objects on the bank appearing to move backwards, so too do the stationary stars appear to move uniformly westward to an observer on the Earth.',
    historicalContext: 'In 499 CE, Aryabhata proposed that the apparent daily rising and setting of celestial bodies is due to the axial rotation of the Earth from west to east. To explain this relative motion, he used the elegant physical analogy of a passenger in a boat gliding down a river.',
    modernConnection: 'This understanding anticipates the classical principle of relative motion and heliocentric planetary kinematics later formulated by Galileo and Copernicus. Aryabhata also correctly identified that the Moon and planets shine by reflected sunlight rather than generating their own illumination.',
    scholarlyNuance: 'Later classical Indian astronomers, including Varahamihira and Brahmagupta, debated Aryabhata\'s rotational model and maintained geocentric paradigms because terrestrial rotation seemed to contradict intuitive physical experience in the absence of gravitational acceleration theory. Aryabhata\'s model demonstrates the rigorous internal debate within classical Indian astronomy.',
    references: [
      'Shukla, K. S. and Sarma, K. V. "Aryabhatiya of Aryabhata: Critical Edition with English Translation" (INSA, New Delhi, 1976).',
      'Pingree, David. "History of Mathematical Astronomy in India", Dictionary of Scientific Biography (1978).',
      'Ramasubramanian, K. & Sriram, M. S. "Tantrasaṅgraha of Mādhavan: An Ancient Astronomical Treatise" (Springer, 2011).'
    ]
  },
  {
    id: 'medicine-holistic-health',
    discipline: 'medicine',
    title: 'Circadian Biology & Preventive Medicine',
    subtitle: 'Dinacharya and Homeostatic Equilibrium in Ayurveda',
    icon: 'HeartPulse',
    sanskritPassage: 'स्वस्थस्य स्वास्थ्यरक्षणमातुरस्य विकारप्रशमनं च।',
    transliteration: 'Svasthasya svāsthya-rakṣaṇam āturasya vikāra-praśamanaṁ ca |',
    source: 'Caraka Saṁhitā (Sūtrasthāna Chapter 30, Verse 26)',
    englishTranslation: 'The primary goal of medical science is twofold: first, the preservation of health in the healthy; and second, the alleviation and cure of disease in the afflicted.',
    historicalContext: 'Ayurveda approached the human body through systematic observation of diet (Āhāra), sleep (Nidrā), seasonal adaptation (Ṛtucaryā), and daily biological rhythms (Dinacaryā). It categorized metabolic functions into three systemic principles (Doṣas: Vāta, Pitta, Kapha) and emphasized that human health is inextricably linked to environmental cycles and psychological serenity.',
    modernConnection: 'Modern chronobiology (the study of biological circadian clocks, awarded the 2017 Nobel Prize in Medicine) confirms that metabolic enzymes, hormone secretions, and cellular repairs operate on rhythmic daily cycles aligned with solar exposure and meal timing, validating the core logic of Dinacharya.',
    scholarlyNuance: 'Ayurveda provides valuable historical insights into lifestyle medicine, plant-based pharmacological agents (e.g. Curcuma longa, Withania somnifera), and preventive hygiene. However, it should be respected as a historic rational framework rather than confused with modern germ theory, molecular immunology, or emergency surgical protocols.',
    references: [
      'Sharma, P. V. "Caraka-Saṁhitā: Agniveśa\'s treatise refined by Caraka and Dṛḍhabala" (Chaukhambha Orientalia, 1981).',
      'Wujastyk, Dominik. "The Roots of Ayurveda: Selections from Sanskrit Medical Writings" (Penguin Classics, 2003).'
    ]
  },
  {
    id: 'architecture-vastu-geometry',
    discipline: 'architecture',
    title: 'Sacred Proportions & Structural Acoustics',
    subtitle: 'Vāstu Śāstra and Mandelbrot Fractals in Temple Design',
    icon: 'Compass',
    sanskritPassage: 'मानं तु शस्तं सर्वेषां प्रासादानां विशेषतः। प्रमाणे स्थापिते लोके सर्वं सुखमयं भवेत्॥',
    transliteration: 'Mānaṁ tu śastaṁ sarveṣāṁ prāsādānāṁ viśeṣataḥ | Pramāṇe sthāpite loke sarvaṁ sukhamayaṁ bhavet ||',
    source: 'Mayamata (Treatise on Vāstu and Housing), Chapter 22',
    englishTranslation: 'Proper proportion and dimensional harmony are the supreme virtue of all structures. When built in verified proportional resonance, harmony and well-being suffuse the space.',
    historicalContext: 'Classical Indian temple architecture (documented in treatises like Mānasāra and Samarāṅgaṇasūtradhāra) was based on rigorous grid structures called Vāstu-puruṣa-maṇḍalas. The Mandapa and Garbhagriha were engineered with precise geometric ratios (such as the golden mean and Fibonacci-like sequences) to maximize spatial grandeur, natural ventilation, and acoustic resonance for Vedic chanting.',
    modernConnection: 'Modern architectural scholars (such as George Michell and Adam Hardy) have shown that the recursive self-similar spires (Śikharas) of temples like Khajuraho and Brihadeeswara exhibit authentic fractal geometries centuries before Benoit Mandelbrot popularized mathematical fractals.',
    scholarlyNuance: 'Vastu Shastra combined pragmatic knowledge of soil mechanics, solar orientation, and materials engineering with symbolic cosmological metaphysics. Modern builders should distinguish its sound passive solar and ventilation principles from superstitious claims regarding astrological floorplans.',
    references: [
      'Hardy, Adam. "Indian Temple Architecture: Form and Transformation" (Abhinav Publications, 1995).',
      'Michell, George. "The Hindu Temple: An Introduction to its Meaning and Forms" (University of Chicago Press, 1988).'
    ]
  },
  {
    id: 'environment-bhoomi-suktam',
    discipline: 'environment',
    title: 'Ecological Reverence & The Living Earth',
    subtitle: 'The Bhūmi Sūkta of the Atharvaveda',
    icon: 'Trees',
    sanskritPassage: 'माता भूमिः पुत्रोऽहं पृथिव्याः।',
    transliteration: 'Mātā bhūmiḥ putro\'haṁ pṛthivyāḥ |',
    source: 'Atharvaveda Saṁhitā (Kāṇḍa 12, Hymn 1, Verse 12)',
    englishTranslation: 'The Earth is my mother; I am a child of the Earth.',
    historicalContext: 'Composed over three thousand years ago, the Bhūmi Sūkta (Hymn to the Earth) in the Atharvaveda is one of world literature\'s earliest environmental declarations. Over 63 majestic stanzas, the poet-seer celebrates biodiversity, soil health, rivers, mountains, aromatic plants, and mutual interdependence between living organisms and geological strata.',
    modernConnection: 'The hymn articulates the conceptual precursor to modern ecology and the Gaia hypothesis (formulated by James Lovelock), emphasizing that human beings are not tyrannical exploiters of a dead environment, but integral participants in a living, self-regulating biosphere.',
    scholarlyNuance: 'Ancient Vedic environmental ethos was rooted in sacred reciprocity (Rta and Yajna) and pre-industrial pastoral life. While inspiring for modern ecological ethics, addressing contemporary industrial climate change requires rigorous modern atmospheric physics, renewable energy systems, and global carbon policies alongside this timeless ethical respect.',
    references: [
      'Gopal, Lallanji. "The Bhumi Sukta of the Atharvaveda: An Ecological Study" (Bharati Prakashan, 1990).',
      'Chapple, Christopher Key. "Yoga and Ecology: Dharma for the Earth" (Ahimsa Center, 2009).'
    ]
  }
];
