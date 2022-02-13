import { render, screen } from '@testing-library/react'

import Projects from '.'

describe('<Projects />', () => {
  it('should render the heading', () => {
    const { container } = render(<Projects />)

    expect(screen.getByRole('heading', { name: /Projects/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
