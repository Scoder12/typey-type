export const punctuationDescriptions: { [punctuationSymbol: string]: string } = {
  "!": "exclamation mark",
  "#": "number sign",
  "$": "dollar sign",
  "%": "percent sign",
  "&": "ampersand",
  "'": "apostrophe",
  "(": "left parenthesis",
  ")": "right parenthesis",
  "*": "asterisk",
  "+": "plus sign",
  ",": "comma",
  "‚": "single low quotation mark",
  "-": "hyphen-minus",
  ".": "full stop",
  "/": "slash",
  ":": "colon",
  ";": "semicolon",
  "<": "less-than sign",
  "=": "equals sign",
  ">": "greater-than sign",
  "?": "question mark",
  "@": "at sign",
  "[": "left square bracket",
  "\\": "backslash",
  "]": "right square bracket",
  "^": "circumflex",
  "_": "underscore",
  "`": "grave",
  "{": "left curly bracket",
  "|": "vertical bar",
  "}": "right curly bracket",
  "~": "tilde",
  "¡": "inverted exclamation mark",
  "£": "pound sign",
  "¤": "currency sign",
  "¥": "yen sign",
  "§": "section sign",
  "©": "copyright sign",
  "ª": "feminine ordinal indicator",
  "«": "left-pointing double angle quotation mark",
  "®": "registered trademark symbol",
  "°": "degree sign",
  "±": "plus–minus sign",
  "¶": "pilcrow",
  "·": "interpunct",
  "º": "masculine ordinal indicator",
  "»": "right-pointing double angle quotation mark",
  "¿": "inverted question mark",
  "×": "multiplication sign",
  "÷": "division sign",
  "‐": "hyphen",
  "–": "en dash",
  "—": "em dash",
  "‘": "left single quotation mark",
  "’": "right single quotation mark",
  "“": "left double quotation mark",
  "”": "right double quotation mark",
  "„": "double low quotation mark",
  "†": "dagger",
  "‡": "double dagger",
  "•": "bullet",
  "…": "ellipsis",
  "‰": "per mille",
  "‱": "per ten thousand sign",
  "′": "prime",
  "″": "double prime",
  "‴": "triple prime",
  "‸": "caret (proofreading)",
  "‽": "interrobang",
  "⁀": "tie",
  "⁁": "caret insertion point",
  "⁂": "asterism",
  "⁒": "commercial minus sign",
  "€": "euro sign",
  "№": "numero sign",
  "℗": "sound recording copyright symbol",
  "℠": "service mark symbol",
  "™": "trademark symbol",
  "℮": "estimated sign",
  "−": "minus sign",
  "∴": "therefore sign",
  "∵": "because sign",
  "≈": "almost equal to",
  "⌀": "diameter",
  "⌑": "square lozenge",
  "⎀": "insertion symbol",
  "◊": "lozenge",
  "◌": "dotted circle",
  "☞": "manicule",
  "♀": "female sign",
  "♂": "male sign",
  "⚥": "male and female sign",
  "❦": "floral heart",
  "❧": "rotated floral heart",
  "⟨": "mathematical left angle bracket",
  "⟩": "mathematical right angle bracket",
  "⸗": "double oblique hyphen",
  "⹀": "double hyphen",
  "🄯": "copyleft sign",
  '"': "quotation mark",
  "↑": "upwards arrow",
  "←": "leftwards arrow",
  "→": "rightwards arrow",
  "↓": "downwards arrow",
  "¬": "not sign",
  "↦": "rightwards arrow from bar",
  "φ": "Greek small letter phi",
  "∩": "intersection",
  "∧": "logical and",
  "∈": "element of",
  "∏": "n-ary product",
  "∑": "n-ary summation",
  "∪": "union",
  "∨": "logical or",
  "∉": "does not belong to",
  "⇒": "implies",
  "⇔": "if and only if",
  "∋": "contains as member",
  "∀": "for all",
  "∃": "there exists",
  "∄": "there does not exist",
  "≡": "identical to",
  "≠": "not equal to",
  "∝": "proportional to",
  "⊕": "circled plus",
  "⊗": "circled times",
  "∅": "empty set",
  "Δ": "increment",
  "√": "square root",
  "∞": "infinity",
  "≤": "less than or equal to",
  "≥": "greater than or equal to",
  "µ": "micro sign",
  "⊂": "subset of",
  "⊃": "superset of",
  "π": "pi",
  "⊆": "subset of or equal to",
  "⊇": "superset of or equal to",
  "˜": "spacing tilde",
};

const describePunctuation = (currentPhrase: string): string => {
  return punctuationDescriptions[currentPhrase] ?? ""; // Nullish coalescing operator
};

export default describePunctuation;
