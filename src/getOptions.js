export function flatten(array) {
  return [].concat(...array)
}

export function unique(array) {
  return Array.from(new Set(array))
}

export default function getOptions(questions, answers) {
  return (answers
    ? Object.entries(answers)
        .map(
          ([question, answer]) =>
            questions.find(({ name }) => name === question).options[answer]
        )
        .reduce((memo, options) => memo.filter(item => options.includes(item)))
    : unique(
        questions.reduce(
          (memo, { options }) => [...memo, ...flatten(Object.values(options))],
          []
        )
      )
  ).sort()
}
