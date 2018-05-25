export function flatten(array) {
  return [].concat(...array)
}

export function unique(array) {
  return Array.from(new Set(array))
}

export default function getOptions(questions) {
  return unique(
    questions.reduce(
      (memo, { options }) => [...memo, ...flatten(Object.values(options))],
      []
    )
  ).sort()
}
