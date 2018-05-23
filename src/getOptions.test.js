import getOptions, { flatten, unique } from './getOptions'
import quizzes from './quizzes'

test('flatten', () => {
  expect(flatten([])).toEqual([])
  expect(flatten([[1, 2]])).toEqual([1, 2])
  expect(flatten([[1, 2], [3, 4]])).toEqual([1, 2, 3, 4])
})

test('unique', () => {
  expect(unique([])).toEqual([])
  expect(unique([1, 2, 3])).toEqual([1, 2, 3])
  expect(unique([1, 2, 2, 3])).toEqual([1, 2, 3])
})

test('getOptions', () => {
  expect(getOptions(quizzes[0].questions)).toEqual([
    'Angular',
    'None',
    'Polymer',
    'React',
    'Vue',
    'Web Components'
  ])
})
