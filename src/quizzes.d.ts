interface Answer {
  name: string
  options: string[]
}

export interface Question {
  name: string
  answers: Answer[]
}

interface Quiz {
  name: string
  description: string
  questions: Question[]
}

declare const quizzes: Quiz[]
export default quizzes
