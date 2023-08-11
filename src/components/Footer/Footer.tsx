import { FC } from 'react'
import { Link } from 'react-router-dom'

import { Logo } from '../'

export const Footer: FC = () => {
	return (
		<footer className='bg-light-blue pb-10 pt-16'>
			<div className='container'>
				<div className='mb-6 flex gap-32'>
					<div className='font-normal'>
						<Logo />
						<p className='mb-2 mt-7 text-sm'>
							г. Санкт Петербург, ул. Куйбышева 31
						</p>
						<a
							className='mb-2 inline-block text-xl font-medium'
							href='tel:88128449549'
						>
							8 (812) 844-95-49
						</a>
						<p>Ежедневно с 9:00 до 20:00</p>
					</div>

					<div className='flex gap-6 text-2xl uppercase'>
						<span>подписаться</span>
						<Link className='text-[#7079F0]' to='#'>
							TELEGRAM
						</Link>
					</div>
				</div>

				<div className='flex justify-between'>
					<span>© 2023 Все права защищены</span>
					<span>
						<Link className='underline' to='#'>
							Политика конфиденциальности
						</Link>
					</span>
					<span>Design by Bozhenov</span>
				</div>
			</div>
		</footer>
	)
}
