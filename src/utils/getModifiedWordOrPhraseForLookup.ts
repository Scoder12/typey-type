import type { MaterialText } from "../types";

const getModifiedWordOrPhraseForLookup = (phrase: MaterialText) => {
  let result = phrase.slice();

  if (phrase === "{") result = "\\{{^}";
  if (phrase === "}") result = "{^}\\}";
  if (phrase === "{ ") result = "\\{";
  if (phrase === "} ") result = "\\}";
  if (phrase === "[") result = "{^[^}";
  if (phrase === "]") result = "{^]^}";
  if (phrase === "[ ") result = "{[}";
  if (phrase === "] ") result = "{]}";
  if (phrase === "?") result = "{?}";
  if (phrase === ".") result = "{^.^}";
  if (phrase === ". ") result = "{.}";
  if (phrase === ", ") result = "{,}";
  if (phrase === `” `) result = "{^~|”}";
  if (phrase === `”`) result = "{^~|”}";
  if (phrase === `“`) result = "{~|“^}";
  if (phrase === ` “`) result = "{~|“^}";
  if (phrase === `“`) result = "{~|“^}";
  if (phrase === ` ‘`) result = "{~|‘^}";
  if (phrase === `‘`) result = "{~|‘^}";
  if (phrase === `’ `) result = "{^~|’}";
  if (phrase === `’`) result = "{^~|’}";
  if (phrase === `" `) result = '{^~|"}';
  if (phrase === `"`) result = '{~|"^}';
  if (phrase === ` "`) result = '{~|"^}';
  if (phrase === ` '`) result = "{~|'^}";
  if (phrase === `' `) result = "{^~|'}";
  if (phrase === ` `) result = "{^ ^}";

  if (phrase === `%`) result = "{^}%{^}";
  if (phrase === `% `) result = "{^%}";
  if (phrase === ` %`) result = "{&%}";

  if (phrase === "1") result = "{&1}";
  if (phrase === "2") result = "{&2}";
  if (phrase === "3") result = "{&3}";
  if (phrase === "4") result = "{&4}";
  if (phrase === "5") result = "{&5}";
  if (phrase === "6") result = "{&6}";
  if (phrase === "7") result = "{&7}";
  if (phrase === "8") result = "{&8}";
  if (phrase === "9") result = "{&9}";
  if (phrase === "0") result = "{&0}";

  if (phrase === "A") result = "{&A}";
  if (phrase === "B") result = "{&B}";
  if (phrase === "C") result = "{&C}";
  if (phrase === "D") result = "{&D}";
  if (phrase === "E") result = "{&E}";
  if (phrase === "F") result = "{&F}";
  if (phrase === "G") result = "{&G}";
  if (phrase === "H") result = "{&H}";
  if (phrase === "I") result = "{&I}";
  if (phrase === "J") result = "{&J}";
  if (phrase === "K") result = "{&K}";
  if (phrase === "L") result = "{&L}";
  if (phrase === "M") result = "{&M}";
  if (phrase === "N") result = "{&N}";
  if (phrase === "O") result = "{&O}";
  if (phrase === "P") result = "{&P}";
  if (phrase === "Q") result = "{&Q}";
  if (phrase === "R") result = "{&R}";
  if (phrase === "S") result = "{&S}";
  if (phrase === "T") result = "{&T}";
  if (phrase === "U") result = "{&U}";
  if (phrase === "V") result = "{&V}";
  if (phrase === "W") result = "{&W}";
  if (phrase === "X") result = "{&X}";
  if (phrase === "Y") result = "{&Y}";
  if (phrase === "Z") result = "{&Z}";
  if (phrase === "a") result = "{>}{&a}";
  if (phrase === "b") result = "{>}{&b}";
  if (phrase === "c") result = "{>}{&c}";
  if (phrase === "d") result = "{>}{&d}";
  if (phrase === "e") result = "{>}{&e}";
  if (phrase === "f") result = "{>}{&f}";
  if (phrase === "g") result = "{>}{&g}";
  if (phrase === "h") result = "{>}{&h}";
  if (phrase === "i") result = "{>}{&i}";
  if (phrase === "j") result = "{>}{&j}";
  if (phrase === "k") result = "{>}{&k}";
  if (phrase === "l") result = "{>}{&l}";
  if (phrase === "m") result = "{>}{&m}";
  if (phrase === "n") result = "{>}{&n}";
  if (phrase === "o") result = "{>}{&o}";
  if (phrase === "p") result = "{>}{&p}";
  if (phrase === "q") result = "{>}{&q}";
  if (phrase === "r") result = "{>}{&r}";
  if (phrase === "s") result = "{>}{&s}";
  if (phrase === "t") result = "{>}{&t}";
  if (phrase === "u") result = "{>}{&u}";
  if (phrase === "v") result = "{>}{&v}";
  if (phrase === "w") result = "{>}{&w}";
  if (phrase === "x") result = "{>}{&x}";
  if (phrase === "y") result = "{>}{&y}";
  if (phrase === "z") result = "{>}{&z}";

  return result;
};

export default getModifiedWordOrPhraseForLookup;
