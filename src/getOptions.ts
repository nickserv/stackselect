import { Question } from './quizzes'

export function flatten<T>(array: T[][]): T[] {
  return new Array<T>().concat(...array)
}

export function unique<T>(array: T[]): T[] {
  return Array.from(new Set(array))
}

export default function getOptions(
  questions: Question[],
  answers: Record<string, string> = {}
): string[] {
  return (Object.keys(answers).length
    ? Object.entries(answers)
        .map(
          ([question, answer]) =>
            questions.find(({ name }) => name === question)!.options[answer]
        )
        .reduce((memo, options) => memo.filter(item => options.includes(item)))
    : unique(
        questions.reduce<string[]>(
          (memo, { options }) => [...memo, ...flatten(Object.values(options))],
          []
        )
      )
  ).sort()
}
