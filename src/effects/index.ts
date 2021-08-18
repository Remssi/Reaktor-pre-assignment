import { RuleContents } from "../consts/types";

// * uses proxy url declared in package.json, which works in development
// TODO: add absolute url for production
// TODO: split code to smaller functions
export const getRules = (
  onFetch: ({ tableOfContents, chaptersAndRules }: RuleContents) => void,
): void => {
  fetch("/2021/downloads/MagicCompRules%2020210419.txt")
    .then(response => {
      return response.text();
    })
    .then(data => {
      // splits when there is empty line between texts
      const splittedData = data.split(/\r?\n\r?\n/);
      //console.log(splittedData);
      // store chapter names and rules from known index ranges (known by logging)
      // ? likely to break if file updated, better solution?
      const toc = splittedData.slice(6, 15);
      const car = splittedData.slice(17, 2678);

      // split chapters but keep them bundled with headers (1. Game Concepts etc.)
      let tableOfContents: RuleContents["tableOfContents"] = {};
      for (let i = 0; i < toc.length; i++) {
        tableOfContents[i + 1] = toc[i].split(/\r?\n/);
      }

      let chaptersAndRules: RuleContents["chaptersAndRules"] = {};
      for (let i = 0; i < car.length; i++) {
        const splittedNumber = car[i].split(" ", 1)[0];
        // ignore rows with header texts, such as 1. Game Concepts
        if (Number(splittedNumber) < 100) continue;
        const chapterNumber = splittedNumber.substring(0, 3);

        if (!chaptersAndRules[chapterNumber])
          chaptersAndRules[chapterNumber] = [];
        // split example texts from the main rule text
        const splittedRule = car[i].split(/\r?\n/);
        // add main rule text and example texts separately
        chaptersAndRules[chapterNumber].push({
          text: splittedRule[0],
          additionalTexts: splittedRule.slice(1),
        });
      }

      onFetch({ tableOfContents, chaptersAndRules });
    })
    .catch(error => {
      console.log(error);
    });
};
