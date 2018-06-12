interface IOptions {
  [key: string]: string[]
}

export interface IQuestion {
  name: string
  options: IOptions
}

export interface IQuiz {
  name: string
  description: string
  questions: IQuestion[]
}

declare const quizzes: IQuiz[]
export default quizzes
