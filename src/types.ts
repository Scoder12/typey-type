/**
 * Examples:
 * "H-L"
 * "KPA"
 * "KPA\*"
 * "TEFT"
 * "WOB/HREU"
 * "SKPAO\*EUPL"
 * "WO\*RLD/WA\*R/2"
 * "#"
 * "#-P"
 * "「か-か」"
 * "PTVAt/TEOta"
 * "LROT"
 */
export type Outline = string;

/**
 * Examples:
 * "gazed"
 * "El Salvador"
 * "ever-increasing"
 * "{^-edge}"
 * "{>}{&e}"
 * "{*+}"
 * "{^:55}"
 * "{~|()}"
 * "{ }\\{\\}{#Left}{^}"
 */
export type Translation = string;

/**
 * Examples:
 * "user:personal.json"
 * "typey:typey-type.json"
 * "plover:main-3-jun-2018.json"
 */
export type NamespacedDictionary = string;

/**
 * Examples:
 * "coding.json"
 * "fingerspelling.json"
 * "punctuation.json"
 * "personal.json"
 * "typey-type.json"
 * "main.json"
 */
export type DictName = string;

/**
 * Example:
 * ["personal.json", {"TEFT": "myBrief"}]
 */
export type PersonalDictionaryNameAndContents = [DictName, StenoDictionary];

/**
 * Examples:
 * "user"
 * "typey"
 * "plover"
 */
export type Namespace = string;

/**
 * Examples:
 * ["KPA*", "typey:typey-type.json"]
 */
export type StrokeAndNamespacedDict = [Outline, NamespacedDictionary];

/**
 * Examples:
 * ["TEFT", "personal.json", "user"]
 * ["KPA*", "typey-type.json", "typey"]
 * ["O", "main.json", "plover"]
 */
export type StrokeAndDictionaryAndNamespace = [Outline, DictName, Namespace];

/**
 * An outline-first JSON-formatted steno dictionary that could be used by a steno engine, such as Plover
 *
 * Example:
 * {
 *   "TEFT": "test",
 *   "H-L": "hello",
 *   "KPA": "{}{-|}",
 *   "WOB/HREU": "wobbly",
 *   "#": "{*+}",
 * }
 */
export type StenoDictionary = {
  [outline: Outline]: Translation;
};

/**
 * Examples:
 * ["typey:typey-type.json", "user:nouns.json", "user:personal.json"]
 * ["typey:typey-type.json", "user:nouns.json", "user:personal.json", "plover:plover-main-3-jun-2018.json"]
 */
export type DictionaryConfigurationList = DictName[];

export type OptionalDictionaryConfig = {
  configuration?: DictionaryConfigurationList;
};

export type DictionaryConfig = Required<OptionalDictionaryConfig>;

/**
 * A word-first JavaScript Map lookup dictionary with source dictionary names for each outline
 *
 * Example:
 * Map (7) {
 *   "thought" => [
 *     ["THAUT", "plover:main.json"],
 *     ["THAUGT", "typey:typey-type.json"]
 *   ],
 *   "people" => [["PAOEPL", "typey:typey-type.json"]],
 *   "found" => [["TPOUPBD", "typey:typey-type.json"]],
 *   "just" => [["SKWRUFT", "typey:typey-type.json"]],
 *   "{&A}" => [["A\*P", "typey:typey-type.json"]],
 *   "{>}{&a}" => [["A\*", "typey:typey-type.json"]],
 *   "{}" => [["WUZ/WUZ", "typey:typey-type.json"]]
 * }
 */
export type LookupDictWithNamespacedDicts = Map<
  Translation,
  StrokeAndNamespacedDict[]
> &
  OptionalDictionaryConfig;

export type LookupDictWithNamespacedDictsAndConfig = Omit<
  LookupDictWithNamespacedDicts,
  "configuration"
> &
  DictionaryConfig;

/**
 * Example:
 * "/AOUL/A*T"
 */
export type SuffixOutlineWithLeadingSlash = string;

/**
 * Example:
 * "KWAS/KWREU/"
 */
export type PrefixOutlineWithSlash = string;

/**
 * Example:
 * "ulate"
 */
export type SuffixTextWithNoTPRBGTS = string;

/**
 * Example:
 * "quasi-"
 */
export type PrefixTextWithNoTPRBGTS = string;

/**
 * Example:
 * [ "TPHRAOUR/", "fluoro" ]
 */
export type PrefixEntry = [PrefixOutlineWithSlash, PrefixTextWithNoTPRBGTS];

/**
 * Example:
 * [ "/AOEUBL", "izable" ]
 */
export type SuffixEntry = [
  SuffixOutlineWithLeadingSlash,
  SuffixTextWithNoTPRBGTS
];

/**
 * Examples:
 * ["A*UT/", "auto"],
 * ["/WAL", "ual"],
 */
export type AffixItem = [
  PrefixOutlineWithSlash | SuffixOutlineWithLeadingSlash,
  PrefixTextWithNoTPRBGTS | SuffixTextWithNoTPRBGTS
];

/**
 * Example:
 * {
 *   prefixes: [["A*UT/", "auto"], ["TPHRAOUR/", "fluoro"]],
 *   suffixes: [["/WAL", "ual"], ["/AOEUBL", "izable"]]
 * }
 */
export type AffixObject = {
  prefixes: AffixItem[];
  suffixes: AffixItem[];
};

/**
 * Examples:
 * {
 *   "0": 1,
 *   "1": 1,
 *   " The": 95,
 *   " process": 7,
 *   " of": 691,
 *   " writing": 17,
 *   " shorthand": 6,
 * }
 */
export type MetWords = {
  [spacedTypedWords: string]: number;
};

export type Attempt = {
  /**
   * Examples
   * "prince" while attempting to write " principal"
   * " para", " ", "paralyse" while attempting to write "paralysis"
   * */
  text: string;
  /** e.g. 1670211049535 */
  time: 1670212079120;
  /** e.g. 1.6 */
  numberOfMatchedWordsSoFar: 1.6;
  hintWasShown: boolean;
};

export type Attempts = Attempt[];

/**
 * Typed text as it was actually written, including multiple spaces and case-insensitive text
 * Examples:
 * "   was"
 * " h er"
 * " variety"
 * "life. "
 * "pre^"
 */
export type ActualTypedText = string;

/**
 * Typed text as recorded in met words, which is actually the correctly capitalised and simplified material text with desired spacing, such as 1 space before
 * Examples:
 * " was"
 * " her"
 * " Variety"
 * "life. "
 * "pre^"
 */
export type RecordedTypedText = string;

/**
 * Material text as shown in Typey Type without spacing
 * Examples:
 * "was"
 * "her"
 * "Variety"
 * "life."
 * "pre^"
 * "spell your full name, please"
 */
export type MaterialText = string;

export type MaterialItem = { phrase: MaterialText; stroke: Outline };
export type PresentedMaterialItem = MaterialItem;
export type PresentedMaterial = PresentedMaterialItem[];
export type SourceMaterialItem = MaterialItem;
export type SourceMaterial = SourceMaterialItem[];

export type NewPresentedMaterial = {
  // These should possibly be optionally undefined to match Zipper
  completed: MaterialItem[]; // | undefined
  current: MaterialItem; // | undefined
  remaining: MaterialItem[];
};

export type LessonSettings = {
  ignoredChars: string;
  customMessage?: string;
};

export type SpacePlacement =
  | "spaceBeforeOutput"
  | "spaceAfterOutput"
  | "spaceExact"
  | "spaceOff";

export type SortOrder =
  | "sortOff"
  | "sortRandom"
  | "sortNew"
  | "sortOld"
  | "sortShortest"
  | "sortLongest";

export type Study = "discover" | "revise" | "drill" | "practice";

export type StenoLayout =
  | "stenoLayoutAmericanSteno"
  | "stenoLayoutNoNumberBarInnerThumbNumbers"
  | "stenoLayoutNoNumberBarOuterThumbNumbers"
  | "stenoLayoutPalantype"
  | "stenoLayoutBrazilianPortugueseSteno"
  | "stenoLayoutDanishSteno"
  | "stenoLayoutItalianMichelaSteno"
  | "stenoLayoutJapaneseSteno"
  | "stenoLayoutKoreanModernCSteno";

export type UpcomingWordsLayout = "singleLine" | "multiline" | "hidden";

export type UserSettings = {
  beatsPerMinute: number;
  blurMaterial: boolean;
  caseSensitive: boolean;
  diagramSize: number;
  simpleTypography: boolean;
  punctuationDescriptions: boolean;
  retainedWords: boolean;
  limitNumberOfWords: number;
  newWords: boolean;
  repetitions: number;
  showScoresWhileTyping: boolean;
  showStrokes: boolean;
  showStrokesAsDiagrams: boolean;
  showStrokesOnMisstroke: boolean;
  hideStrokesOnLastRepetition: boolean;
  spacePlacement: SpacePlacement;
  speakMaterial: boolean;
  textInputAccessibility: boolean;
  sortOrder: SortOrder;
  seenWords: boolean;
  startFromWord: number;
  study: Study;
  stenoLayout: StenoLayout;
  upcomingWordsLayout: UpcomingWordsLayout;
};

/**
 * Examples:
 * "Proverbs starting with V"
 */
export type PrettyLessonTitle = string;

export type Lesson = {
  sourceMaterial: SourceMaterial;
  presentedMaterial: PresentedMaterial;
  settings: LessonSettings;
  title: PrettyLessonTitle;
  subtitle: string;
  newPresentedMaterial: NewPresentedMaterial;
  path: LessonPathWithBasenameAndFilename;
};

export type FallbackLesson = {
  sourceMaterial: [{ phrase: "The"; stroke: "-T" }];
  presentedMaterial: [{ phrase: "The"; stroke: "-T" }];
  settings: { ignoredChars: "" };
  title: "Steno";
  subtitle: "";
  // possibly missing `newPresentedMaterial`?
  path: "";
};

/**
 * Examples:
 * "/typey-type/lessons/stories/proverbs/proverbs-starting-with-v/lesson.txt"
 */
export type LessonPathWithBasenameAndFilename = string;

export type CurrentLessonStrokes = {
  accuracy: boolean;
  attempts: Attempts;
  checked: boolean;
  hintWasShown: boolean;
  /** e.g. 1.6 */
  numberOfMatchedWordsSoFar: number;
  stroke: Outline;
  /** e.g. 1670211049535 */
  time: number;
  /** e.g. " Variety" */
  typedText: ActualTypedText;
  /** e.g. "Variety" */
  word: MaterialText;
};

export type LessonIndexEntry = {
  category: string;
  overview: string;
  path: string;
  subcategory: string;
  subtitle: string;
  suggestedNext: string;
  title: string;
  wordCount: number;
};

