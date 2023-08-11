import { FC } from 'react'
import { Menu } from '../'

export const Header: FC = () => {
	return (
		<header
			className='t-0 fixed left-1/2 z-10 w-full -translate-x-1/2 pt-2'
			data-testid='header'
		>
			<div className='container'>
				<div className='flex items-center justify-center'>
					<Menu />
				</div>
			</div>
		</header>
	)
}
