import penaliseSlashesWithoutPrefixesOrSuffixes from "./rankOutlines/penaliseSlashesWithoutPrefixesOrSuffixes";
import { AffixList } from "../affixList";

describe("penaliseSlashesWithoutPrefixesOrSuffixes", () => {
  beforeEach(() => {
    const affixList = new AffixList(
      new Map([
        ["{^en}", [["*EPB", "typey:typey-type.json"]]],
        ["{^ment}", [["*PLT", "typey:typey-type.json"]]],
        ["{a^}", [["A", "typey:typey-type.json"]]],
        ["{in^}", [["EUPB", "typey:typey-type.json"]]],
        ["{^ly}", [["HREU", "typey:typey-type.json"]]],
      ])
    );
    AffixList.setSharedInstance(affixList);
  });

  afterEach(() => {
    AffixList.setSharedInstance([]);
  });

  it("returns penalty of 2 for multi-stroke outlines without affix strokes", () => {
    const outline = "TKPWUT/*EPB/PWERG";
    const translation = "Gutenberg";
    expect(
      penaliseSlashesWithoutPrefixesOrSuffixes(
        outline,
        translation,
        AffixList.getSharedInstance()
      )
    ).toEqual(2);
  });

  it("returns no penalty for multi-stroke outlines with prefix strokes", () => {
    const outline = "EUPB/TKAOUFD";
    const translation = "induced";
    expect(
      penaliseSlashesWithoutPrefixesOrSuffixes(
        outline,
        translation,
        AffixList.getSharedInstance()
      )
    ).toEqual(0);
  });

  it("returns no penalty for multi-stroke outlines with suffix strokes", () => {
    const outline = "SWEUFT/HREU";
    const translation = "swiftly";
    const penalty = penaliseSlashesWithoutPrefixesOrSuffixes(
      outline,
      translation,
      AffixList.getSharedInstance()
    );

    expect(penalty).toEqual(0);
  });

  it("returns no penalty for single-stroke outlines", () => {
    const outline = "TEFT";
    const translation = "test";
    expect(
      penaliseSlashesWithoutPrefixesOrSuffixes(
        outline,
        translation,
        AffixList.getSharedInstance()
      )
    ).toEqual(0);
  });
});
