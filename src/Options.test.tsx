import 'jest-dom/extend-expect'
import React from 'react'
import { render } from 'react-testing-library'
import Options from './Options'

test('Options', () => {
  const labels = [
    'Angular',
    'None',
    'Polymer',
    'React',
    'Vue',
    'Web Components'
  ]
  const { container } = render(<Options labels={labels} />)
  for (const label of labels) expect(container).toHaveTextContent(label)
})
