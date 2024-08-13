import { pointsForWord } from "../utils";

describe("pointsForWord", () => {
  // Test case for basic functionality
  it("calculates the total points for a word (1 point per vowel, 2 per consonant)", () => {
    const word = "test";
    const points = pointsForWord(word);
    expect(points).toBe(7);
  });

  // Test case for uppercase and lowercase handling
  it("handles uppercase and lowercase input", () => {
    const word = "tEsT";
    const points = pointsForWord(word);
    expect(points).toBe(7);
  });
  it("returns 0 points for an empty string", () => {
    const word = "";
    const points = pointsForWord(word);
    expect(points).toBe(0);
  });
  it("ignores non-alphabet characters", () => {
    const word = "t3sT!";
    const points = pointsForWord(word);
    expect(points).toBe(7); 
  });
  it("throws an error when input is not a string", () => {
    expect(() => pointsForWord(123)).toThrow(TypeError);
    expect(() => pointsForWord([])).toThrow(TypeError);
    expect(() => pointsForWord({})).toThrow(TypeError);
    expect(() => pointsForWord(null)).toThrow(TypeError);
    expect(() => pointsForWord(undefined)).toThrow(TypeError);
  });
  it("correctly calculates points for a string with only vowels", () => {
    const word = "aeiou";
    const points = pointsForWord(word);
    expect(points).toBe(5); 
  });
  it("correctly calculates points for a string with only consonants", () => {
    const word = "bcdf";
    const points = pointsForWord(word);
    expect(points).toBe(8); 
  });
});
