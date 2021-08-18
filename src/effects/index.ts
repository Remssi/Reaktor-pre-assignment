export const getRules = (): void => {
  fetch("/2021/downloads/MagicCompRules%2020210419.txt")
    .then(response => {
      return response.text()
    })
    .then(data => {
      console.log(data)
    })
}
