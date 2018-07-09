import 'jest-dom/extend-expect'
import React from 'react'
import { render } from 'react-testing-library'
import Options from './Options'

test('Options', () => {
  const labels = ['One', 'Two', 'Three']
  const { container } = render(<Options labels={labels} />)
  for (const label of labels) expect(container).toHaveTextContent(label)
})
