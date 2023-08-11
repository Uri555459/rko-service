import { FC, PropsWithChildren } from 'react'
import { ContactsPanel, Footer, Header } from '../components'

export const LayoutDefault: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<ContactsPanel />
			<Header />
			<main className='flex-grow'>{children}</main>
			<Footer />
		</>
	)
}
