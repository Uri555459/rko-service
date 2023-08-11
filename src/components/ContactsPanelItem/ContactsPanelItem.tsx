import { FC } from 'react'
import { Link } from 'react-router-dom'

import { SvgSprite } from '../'

interface Props {
	link: string
	icon: string
}

export const ContactsPanelItem: FC<Props> = ({ link, icon }) => {
	return (
		<Link className='w-9 h-9 rounded-full m-4 block' to={link}>
			<SvgSprite id={icon} />
		</Link>
	)
}
