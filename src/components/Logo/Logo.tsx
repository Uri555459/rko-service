import { FC } from 'react'
import { Link } from 'react-router-dom'

export const Logo: FC = () => {
	return (
		<Link className='mr-auto w-9 h-14 shrink-0' to='/'>
			<img className='w-9 h-14' src='logo.svg' alt='logo' />
		</Link>
	)
}
