import { render, screen } from '@testing-library/react'

import { Header } from './Header'

describe('header component', () => {
	render(<Header />)

	it('render component', () => {
		const header = screen.getByTestId('header')
		expect(header).toBeInTheDocument()
	})
})
