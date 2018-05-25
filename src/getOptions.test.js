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
  const questions = quizzes[0].questions
  expect(getOptions(questions)).toEqual([
    'Angular',
    'None',
    'Polymer',
    'React',
    'Vue',
    'Web Components'
  ])
  expect(
    getOptions(questions, {
      'What architecture do you want to follow?': 'MVC'
    })
  ).toEqual(['Angular'])
  expect(
    getOptions(questions, {
      'What platforms do you need to support other than frontend web?':
        'Server side rendering'
    })
  ).toEqual(['React'])
  expect(
    getOptions(questions, {
      'What architecture do you want to follow?': 'Component driven',
      'What platforms do you need to support other than frontend web?':
        'Server side rendering'
    })
  ).toEqual(['React'])
  expect(
    getOptions(questions, {
      'What architecture do you want to follow?': 'Component driven',
      'What platforms do you need to support other than frontend web?': 'Native'
    })
  ).toEqual(['React', 'Vue'])
  expect(
    getOptions(questions, {
      'What architecture do you want to follow?': 'None',
      'What platforms do you need to support other than frontend web?':
        'Server side rendering'
    })
  ).toEqual([])
})
