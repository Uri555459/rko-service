import { FC, PropsWithChildren } from 'react'

export const ButtonRounded: FC<PropsWithChildren> = ({ children }) => {
	return (
		<button className='button-rounded'>
			<span>{children}</span>
		</button>
	)
}
