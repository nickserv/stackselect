interface IOptions {
  [key: string]: string[]
}

export interface IQuestion {
  name: string
  options: IOptions
}

interface IQuiz {
  name: string
  description: string
  questions: IQuestion[]
}

// tslint:disable:object-literal-sort-keys
export default [
  {
    name: 'JavaScript Frontend Framework',
    description:
      'The modern JavaScript landscape has many frameworks to choose from to organize your frontend code, both from a more traditional MVC or MV* architecture or a more modular and view focused component driven approach.',
    questions: [
      {
        name: 'What architecture do you want to follow?',
        options: {
          MVC: ['Angular'],
          'Component driven': [
            'React',
            'Polymer',
            'Angular',
            'Vue',
            'Web Components'
          ],
          None: ['None']
        }
      },
      {
        name: 'What platforms do you need to support other than frontend web?',
        options: {
          'Server side rendering': ['React'],
          Native: ['React', 'Vue']
        }
      }
    ]
  }
] as IQuiz[]
