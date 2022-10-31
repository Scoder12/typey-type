import createFingerspellingStroke from "./createFingerspellingStroke";
import { AffixList } from "../affixList";
import type { LookupDictWithNamespacedDicts } from "../../types";

describe("createFingerspellingStroke", () => {
  beforeEach(() => {
    const affixList = new AffixList(
      new Map([
        ["{^en}", [["*EPB", "typey:typey-type.json"]]],
        ["{^ment}", [["*PLT", "typey:typey-type.json"]]],
        ["{a^}", [["A", "typey:typey-type.json"]]],
        ["{in^}", [["EUPB", "typey:typey-type.json"]]],
        ["{^ly}", [["HREU", "typey:typey-type.json"]]],
        ["{con^}", [["KAUPB", "typey:typey-type.json"]]],
        ["{^ent}", [["EPBT", "typey:typey-type.json"]]],
        ["{^ed}", [["-D", "typey:typey-type.json"]]],
      ])
    );
    AffixList.setSharedInstance(affixList);
  });

  afterEach(() => {
    AffixList.setSharedInstance([]);
  });

  it("returns fingerspelled strokes for Kosciusko", () => {
    const affixList = AffixList.getSharedInstance();
    const lookupDict: LookupDictWithNamespacedDicts = new Map([
      ["a", [["AEU", "typey:typey-type.json"]]],
    ]);
    expect(
      createFingerspellingStroke("Kosciusko", lookupDict, affixList)
    ).toEqual("K*P/O*/S*/KR*/*EU/*U/S*/K*/O*");
  });

  it("returns empty string in strokes for €100", () => {
    const affixList = AffixList.getSharedInstance();
    const lookupDict: LookupDictWithNamespacedDicts = new Map([
      ["a", [["AEU", "typey:typey-type.json"]]],
    ]);
    expect(
      createFingerspellingStroke("€100", lookupDict, affixList)
    ).toEqual("xxx/1/0/0");
  });

  // xit("returns number bar key and letter keys for numbers", () => {
  //   const affixList = AffixList.getSharedInstance();
  //   const lookupDict: LookupDictWithNamespacedDicts = new Map([
  //     ["a", [["AEU", "typey:typey-type.json"]]],
  //   ]);
  //   expect(
  //     createFingerspellingStroke("100", lookupDict, affixList)
  //   ).toEqual("#S/#O/#O");
  // });
});