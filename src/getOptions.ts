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
) {
  return questions
    .reduce((memo: string[], question) => {
      const answer = question.answers.find(
        ({ name }) => name === answers[question.name]
      )
      if (answer) {
        return memo.length
          ? memo.filter(item => answer.options.includes(item))
          : answer.options
      } else if (Object.keys(answers).length) {
        return memo
      } else {
        const options = flatten(
          Object.values(question.answers.map(answer => answer.options))
        )
        return unique(memo.concat(options))
      }
    }, [])
    .sort()
}
