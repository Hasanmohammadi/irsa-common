import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { Button } from '../src'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(<Button>hello</Button>)
  })
})