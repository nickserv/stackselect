import each from 'jest-each'
import getOptions, { flatten, unique } from './getOptions'
import quizzes from './quizzes.json'

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

const questions = quizzes[0].questions

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
