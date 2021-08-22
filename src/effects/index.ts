import { RuleContents } from "../consts/types";
import { parseRules } from "../utils";

// * uses proxy url declared in package.json, which works in development
// TODO: add absolute url for production
// TODO: split code to smaller functions
export const getRules = (
  onFetch: ({ tableOfContents, chaptersAndRules }: RuleContents) => void,
): void => {
  // use proxy in development, use direct url in production
  // "/2021/downloads/MagicCompRules%2020210419.txt"
  fetch(
    "https://media.wizards.com/2021/downloads/MagicCompRules%2020210419.txt",
  )
    .then(response => {
      return response.text();
    })
    .then(data => {
      const [tableOfContents, chaptersAndRules] = parseRules(data);

      onFetch({ tableOfContents, chaptersAndRules });
    })
    .catch(error => {
      console.log(error);
    });
};
