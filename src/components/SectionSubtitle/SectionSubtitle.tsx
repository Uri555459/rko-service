import { FC, ReactNode } from 'react'
import cn from 'clsx'

interface Props {
	children: ReactNode
	className?: string
}

export const SectionSubtitle: FC<Props> = ({ children, className }) => {
	return <p className={cn('text-xl', className)}>{children}</p>
}
