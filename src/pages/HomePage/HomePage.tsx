import { FC } from 'react'

import { LayoutDefault } from '../../Layouts'
import {
	ButtonRounded,
	SectionSubtitle,
	SectionTitle,
	SvgSprite
} from '../../components'

const HomePage: FC = () => {
	return (
		<LayoutDefault>
			<section className='py-32'>
				<div className='container relative'>
					<img
						className='absolute -top-32 -z-10'
						src='images/offer/offer-bg.png'
						alt=''
					/>
					<div className='flex'>
						<div className='w-full max-w-[607px]'>
							<h1 className='mb-10 text-[42px] leading-none'>
								Платформа по заработку на финансовых продуктах
							</h1>
							<SectionSubtitle className='mb-14'>
								Готовые предложения для развития вашего бизнеса и прочего
								прочего прочего
							</SectionSubtitle>
							<div className='mb-14 flex gap-14'>
								<div className='flex items-center gap-4'>
									<SvgSprite id='file' />
									<div className='text-sm'>
										<span className='block'>Offer list</span>
										<span className='block'>Список предложений</span>
									</div>
								</div>

								<div className='flex items-center gap-4'>
									<SvgSprite id='add' />
									<div className='text-sm'>
										<span className='block'>Join</span>
										<span className='block'>Присоединиться</span>
									</div>
								</div>
							</div>

							<ButtonRounded>Как это работает</ButtonRounded>
						</div>

						<div className='h-[426px] w-[619px]'>
							<img
								className='object-contain'
								src='images/offer/laptop.png'
								alt=''
							/>
						</div>
					</div>
				</div>
			</section>

			<section className='py-32'>
				<div className='container'>
					<SectionTitle tag='h2'>Мы предлагаем:</SectionTitle>
					<SectionSubtitle>
						Конкурентную процентную ставку, современный сервис для работы,
						удобный формат. Официальное оформление и договор, дружескую
						атмосферу и поддержку команды.
					</SectionSubtitle>
				</div>
			</section>
		</LayoutDefault>
	)
}

export default HomePage
