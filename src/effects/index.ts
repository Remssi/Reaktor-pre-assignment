// * uses proxy url declared in package.json, which works in development
// TODO: add absolute url for production
export const getRules = (): void => {
  fetch("/2021/downloads/MagicCompRules%2020210419.txt")
    .then(response => {
      return response.text();
    })
    .then(data => {
      console.log(data);
    });
};
