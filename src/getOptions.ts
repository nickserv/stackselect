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
  return questions
    .reduce((memo: string[], { name, options }) => {
      if (answers[name]) {
        const answerOptions = options[answers[name]]
        return memo.length
          ? memo.filter(item => answerOptions.includes(item))
          : answerOptions
      } else if (!Object.keys(answers).length) {
        const answerOptions = flatten(Object.values(options))
        return unique(memo.concat(answerOptions))
      } else {
        return memo
      }
    }, [])
    .sort()
}
