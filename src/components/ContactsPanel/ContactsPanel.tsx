import { FC } from 'react'

import { ContactsPanelItem } from '../'

export const ContactsPanel: FC = () => {
	const contactsLinks: { link: string; icon: string }[] = [
		{
			link: '/telegram',
			icon: 'telegram'
		},
		{
			link: '/telegram',
			icon: 'email'
		}
	]
	return (
		<div className='fixed right-0 top-28 rounded-bl-lg rounded-tl-lg bg-[#E8EEFF]'>
			{contactsLinks.map(item => (
				<ContactsPanelItem key={item.icon} link={item.link} icon={item.icon} />
			))}
		</div>
	)
}
