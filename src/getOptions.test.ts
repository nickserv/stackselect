import each from 'jest-each'
import getOptions, { flatten, unique } from './getOptions'

each([[[], []], [[[1, 2]], [1, 2]], [[[1, 2], [3, 4]], [1, 2, 3, 4]]]).test(
  'flatten',
  (array, expected) => expect(flatten(array)).toEqual(expected)
)

each([[[], []], [[1, 2, 3], [1, 2, 3]], [[1, 2, 2, 3], [1, 2, 3]]]).test(
  'unique',
  (array, expected) => expect(unique(array)).toEqual(expected)
)

const questions = [
  {
    name: 'Question 1',
    answers: [
      { name: 'Answer 1', options: ['Option 3'] },
      {
        name: 'Answer 2',
        options: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']
      },
      { name: 'Answer 3', options: ['Option 6'] }
    ]
  },
  {
    name: 'Question 2',
    answers: [
      { name: 'Answer 4', options: ['Option 1'] },
      { name: 'Answer 5', options: ['Option 1', 'Option 4'] }
    ]
  }
]

each([
  [
    undefined,
    ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6']
  ],
  [
    {},
    ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6']
  ],
  [{ 'Question 1': 'Answer 1' }, ['Option 3']],
  [{ 'Question 2': 'Answer 4' }, ['Option 1']],
  [{ 'Question 1': 'Answer 2', 'Question 2': 'Answer 4' }, ['Option 1']],
  [
    { 'Question 1': 'Answer 2', 'Question 2': 'Answer 5' },
    ['Option 1', 'Option 4']
  ],
  [{ 'Question 1': 'Answer 3', 'Question 2': 'Answer 4' }, []]
]).test('getOptions', (answers, expected) =>
  expect(getOptions(questions, answers)).toEqual(expected)
)
