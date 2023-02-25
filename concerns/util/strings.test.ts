import { capitalize } from "./strings";

describe("String utility functions", () => {
  describe("Capitalization", () => {
    it("Capitalizes words", () => {
      expect(capitalize("kyle")).toBe("Kyle");
    });

    it("Does not change words that are already capitalized", () => {
      expect(capitalize("Kyle")).toBe("Kyle");
    });
  });
});
