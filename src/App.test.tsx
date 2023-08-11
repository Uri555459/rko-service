import { render, screen } from '@testing-library/react'
import { App } from './App'
import { Header } from './components'

describe('app component', () => {
	it('render component', () => {
		render(<App />)
		render(<Header />)

		const app = screen.getByTestId('app')
		expect(app).toBeInTheDocument()
	})
})
