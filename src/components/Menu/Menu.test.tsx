import { render, screen } from '@testing-library/react'
import { Menu } from './Menu'

describe('Menu component', () => {
	render(<Menu />)
	it('render component', () => {
		const menu = screen.getByTestId('menu')
		// const links = screen.getAllByTestId('link')
		expect(menu).toBeInTheDocument()
		// expect(links).toBeInTheDocument()
	})
})
