import React from 'react'
import { render } from 'react-testing-library'
import Options from './Options'

test('Options', () => {
  const options = [
    'Angular',
    'None',
    'Polymer',
    'React',
    'Vue',
    'Web Components'
  ]
  const { getByText } = render(<Options options={options} />)
  options.forEach(getByText)
})
