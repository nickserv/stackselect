import each from 'jest-each'
import getOptions, { flatten, unique } from './getOptions'

each([[[], []], [[[1, 2]], [1, 2]], [[[1, 2], [3, 4]], [1, 2, 3, 4]]]).test(
  'flatten',
  (array, expected) => {
    expect(flatten(array)).toEqual(expected)
  }
)

each([[[], []], [[1, 2, 3], [1, 2, 3]], [[1, 2, 2, 3], [1, 2, 3]]]).test(
  'unique',
  (array, expected) => {
    expect(unique(array)).toEqual(expected)
  }
)

const questions = [
  {
    name: 'What architecture do you want to follow?',
    answers: [
      { name: 'MVC', options: ['Angular'] },
      {
        name: 'Component driven',
        options: ['React', 'Polymer', 'Angular', 'Vue', 'Web Components']
      },
      { name: 'None', options: ['None'] }
    ]
  },
  {
    name: 'What platforms do you need to support other than frontend web?',
    answers: [
      { name: 'Server side rendering', options: ['React'] },
      { name: 'Native', options: ['React', 'Vue'] }
    ]
  }
]

each([
  [undefined, ['Angular', 'None', 'Polymer', 'React', 'Vue', 'Web Components']],
  [{}, ['Angular', 'None', 'Polymer', 'React', 'Vue', 'Web Components']],
  [{ 'What architecture do you want to follow?': 'MVC' }, ['Angular']],
  [
    {
      'What platforms do you need to support other than frontend web?':
        'Server side rendering'
    },
    ['React']
  ],
  [
    {
      'What architecture do you want to follow?': 'Component driven',
      'What platforms do you need to support other than frontend web?':
        'Server side rendering'
    },
    ['React']
  ],
  [
    {
      'What architecture do you want to follow?': 'Component driven',
      'What platforms do you need to support other than frontend web?': 'Native'
    },
    ['React', 'Vue']
  ],
  [
    {
      'What architecture do you want to follow?': 'None',
      'What platforms do you need to support other than frontend web?':
        'Server side rendering'
    },
    []
  ]
]).test('getOptions', (answers, expected) => {
  expect(getOptions(questions, answers)).toEqual(expected)
})
