export interface RuleContents {
  // example: {1: ["1. Game Concepts", "100. General", "101. ..."]}
  tableOfContents: { [key: string]: string[] };
  // example: {101: [{ text: 101. The Magic Golden Rules, additionalTexts: [] }, { text: 101.1. ... }]}
  chaptersAndRules: {
    [key: string]: { text: string; additionalTexts: string[] }[];
  };
}
