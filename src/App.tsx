import HomePage from './pages/HomePage/HomePage'

export const App = () => {
	return (
		<div className='App' data-testid='app'>
			<div className='wrapper relative'>
				<HomePage />
			</div>
		</div>
	)
}
