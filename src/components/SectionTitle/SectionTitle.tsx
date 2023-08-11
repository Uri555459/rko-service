import { FC, ReactNode } from 'react'

interface Props {
	children: ReactNode
	tag?: 'h1' | 'h2' | 'h3' | 'h4'
}

export const SectionTitle: FC<Props> = ({ children, tag = 'h2' }) => {
	const baseClasses =
		' section-title mb-10 text-[42px] leading-none pl-5 relative'

	switch (tag) {
		case 'h1':
			return <h1 className={baseClasses}>{children}</h1>
		case 'h2':
			return <h2 className={baseClasses}>{children}</h2>
		case 'h3':
			return <h3 className={baseClasses}>{children}</h3>
		case 'h4':
			return <h4 className={baseClasses}>{children}</h4>

		default:
			return <></>
	}
}
