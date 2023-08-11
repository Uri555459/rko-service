import { FC } from 'react'
import { Link } from 'react-router-dom'
import { SvgSprite } from '../'
import { Logo } from '../'
import { menuData } from './menu.data'

export const Menu: FC = () => {
	return (
		<nav className='flex w-full items-center gap-12 ' data-testid='menu'>
			<Logo />
			{menuData.map(item => (
				<a
					className='text-sm text-accent hover:text-blue'
					key={item.name}
					href={item.url}
					data-testid='link'
				>
					{item.name}
				</a>
			))}
			<Link
				className='ml-auto flex gap-5 text-accent hover:text-blue'
				to='/login'
			>
				Войти <SvgSprite id='exit' />
			</Link>
		</nav>
	)
}
