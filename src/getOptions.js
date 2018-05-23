export const flatten = array => [].concat(...array)
export const unique = array => Array.from(new Set(array))

export default questions =>
  unique(
    questions.reduce(
      (memo, { options }) => [...memo, ...flatten(Object.values(options))],
      []
    )
  ).sort()
