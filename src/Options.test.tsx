import 'jest-dom/extend-expect'
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
  const { container } = render(<Options options={options} />)
  for (const option of options) expect(container).toHaveTextContent(option)
})
