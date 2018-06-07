import { IQuestion } from './quizzes'

export function flatten<T extends any>(array: T[][]): T[] {
  return ([] as T[]).concat(...array)
}

export function unique<T extends any>(array: T[]): T[] {
  return Array.from(new Set(array))
}

export default function getOptions(
  questions: IQuestion[],
  answers: { [key: string]: string } = {}
): string[] {
  return (Object.keys(answers).length
    ? Object.entries(answers)
        .map(
          ([question, answer]) =>
            questions.find(({ name }) => name === question)!.options[answer]
        )
        .reduce((memo, options) => memo.filter(item => options.includes(item)))
    : unique(
        questions.reduce(
          (memo, { options }) => [...memo, ...flatten(Object.values(options))],
          [] as string[]
        )
      )
  ).sort()
}
