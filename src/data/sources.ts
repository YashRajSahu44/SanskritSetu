export interface AcademicSource {
  id: string;
  category: 'dictionary' | 'edition' | 'history' | 'archive';
  title: string;
  authorOrEditor: string;
  institutionOrPublisher: string;
  year: string;
  description: string;
  link?: string;
}

export const ACADEMIC_SOURCES: AcademicSource[] = [
  {
    id: 'monier-williams',
    category: 'dictionary',
    title: 'A Sanskrit-English Dictionary: Etymologically and Philologically Arranged',
    authorOrEditor: 'Sir Monier Monier-Williams',
    institutionOrPublisher: 'Oxford University Press / Clarendon Press',
    year: '1899 (revised edition)',
    description: 'The monumental benchmark lexicon for Sanskrit philology worldwide, providing comparative Indo-European etymologies and extensive textual citations across Vedic and Classical texts.',
    link: 'https://www.sanskrit-lexicon.uni-koeln.de/scans/MWScan/2020/web/webtc/index.php'
  },
  {
    id: 'apte-dictionary',
    category: 'dictionary',
    title: 'The Practical Sanskrit-English Dictionary',
    authorOrEditor: 'Vaman Shivram Apte',
    institutionOrPublisher: 'Shiralkar & Co. / Motilal Banarsidass',
    year: '1890 / 1957',
    description: 'The premier student and scholarly dictionary for classical literature, offering precise grammatical genders, compound breakdowns, and idiomatic citations from Kalidasa, Bhavabhuti, and the epics.',
    link: 'https://dsal.uchicago.edu/dictionaries/apte/'
  },
  {
    id: 'bori-mahabharata',
    category: 'edition',
    title: 'The Critical Edition of the Mahābhārata (19 volumes)',
    authorOrEditor: 'V. S. Sukthankar, S. K. Belvalkar, P. L. Vaidya et al.',
    institutionOrPublisher: 'Bhandarkar Oriental Research Institute (BORI), Pune',
    year: '1919–1966',
    description: 'A 47-year landmark of text-critical scholarship collating hundreds of manuscripts written in dozens of regional scripts to establish the most authentic ancient archetype of the epic.',
    link: 'https://bori.org/'
  },
  {
    id: 'gretil-archive',
    category: 'archive',
    title: 'GRETIL (Göttingen Register of Electronic Texts in Indian Languages)',
    authorOrEditor: 'University of Göttingen Indology Department',
    institutionOrPublisher: 'Niedersächsische Staats- und Universitätsbibliothek Göttingen',
    year: '2000–Present',
    description: 'The world\'s leading open digital repository of standardized machine-readable Sanskrit e-texts, strictly keyed to printed critical editions.',
    link: 'http://gretil.sub.uni-goettingen.de/'
  },
  {
    id: 'plofker-math',
    category: 'history',
    title: 'Mathematics in India: 500 BCE – 1800 CE',
    authorOrEditor: 'Kim Plofker',
    institutionOrPublisher: 'Princeton University Press',
    year: '2009',
    description: 'Rigorous peer-reviewed history of Indian mathematical traditions, detailing Pingala\'s prosody algorithms, Aryabhata\'s astronomy, Brahmagupta\'s zero, and the Kerala School\'s infinite calculus series without romantic hyperbole.',
    link: 'https://press.princeton.edu/books/hardcover/9780691120676/mathematics-in-india'
  },
  {
    id: 'pollock-cosmopolis',
    category: 'history',
    title: 'The Language of the Gods in the World of Men: Sanskrit, Culture, and Power in Premodern India',
    authorOrEditor: 'Sheldon Pollock',
    institutionOrPublisher: 'University of California Press',
    year: '2006',
    description: 'Seminal historical study analyzing how Sanskrit functioned as an expansive trans-regional medium of aesthetic and intellectual prestige from Afghanistan to Java across the first millennium CE.'
  },
  {
    id: 'wujastyk-ayurveda',
    category: 'history',
    title: 'The Roots of Ayurveda: Selections from Sanskrit Medical Writings',
    authorOrEditor: 'Dominik Wujastyk',
    institutionOrPublisher: 'Penguin Classics',
    year: '2003',
    description: 'Scholarly translations and historical contextualization of the medical treatises of Charaka, Sushruta, and Vagbhata, emphasizing their rational empirical foundations.'
  },
  {
    id: 'staal-rules',
    category: 'history',
    title: 'Universals: Studies in Indian Logic and Linguistics',
    authorOrEditor: 'Frits Staal',
    institutionOrPublisher: 'University of Chicago Press',
    year: '1988',
    description: 'Explores Panini\'s generative syntactic models and Vedic ritual syntax, demonstrating connections to modern formal grammar theory and computing algorithms.'
  }
];
