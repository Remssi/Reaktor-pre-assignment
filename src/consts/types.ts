export interface RuleContents {
  tableOfContents: { [key: string]: string[] };
  chaptersAndRules: {
    [key: string]: { text: string; additionalTexts: string[] }[];
  };
}
