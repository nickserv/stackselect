type Options = Record<string, string[]>

export interface Question {
  name: string
  options: Options
}

export interface Quiz {
  name: string
  description: string
  questions: Question[]
}

declare const quizzes: Quiz[]
export default quizzes
