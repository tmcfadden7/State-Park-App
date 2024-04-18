import React, { useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';

const SliderWithCards = ({ data }) => {
	const [isCollapsed, setIsCollapsed] = useState(true);
	const toggleCollapse = (index) => {
		setIsCollapsed(index);
	};
	return (
		<Swiper
			modules={[Navigation, Pagination, Scrollbar, A11y]}
			spaceBetween={30}
			slidesPerView={1}
			breakpoints={{
				320: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				576: {
					slidesPerView: data.length > 1 ? 2 : data.length,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: data.length > 2 ? 3 : data.length,
					spaceBetween: 20,
				},
			}}
			slidesOffsetBefore={0}
			rewind={true}
			navigation
			pagination={{ clickable: true }}
			scrollbar={{ draggable: true }}
			onSwiper={(swiper) => console.log(swiper)}
			onSlideChange={() => console.log('slide change')}
		>
			{data.map((card, index) => (
				<SwiperSlide
					key={card.id}
					style={{
						justifyContent: 'center',
					}}
				>
					<div
						className='card'
						style={{
							height: '500px',
							width: '100%',
							...(card.description.length > 225 &&
								!isCollapsed && { overflowY: 'scroll' }),
						}}
					>
						<img
							src={card.images[0].url}
							alt={card.images[0].title}
							className='img-fluid p-0'
							style={{ maxHeight: '180px' }}
						/>
						<div className='card-body'>
							<h5 className='card-title'>{card.title}</h5>
							{isCollapsed && card.description.length < 225 ? (
								<p className='card-text'>{card.description}</p>
							) : isCollapsed ? (
								<p className='card-text'>
									{card.description.slice(0, 225)}
									{card.description.length > 225 && (
										<span
											onClick={toggleCollapse}
											style={{ color: '#e39a37', cursor: 'pointer' }}
										>
											{isCollapsed === index &&
												card.description.length > 225 &&
												'... Read more'}
										</span>
									)}
								</p>
							) : (
								<p className='card-text'>{card.description}</p>
							)}
							<p>
								Duration: {card.durationMin} - {card.durationMax}{' '}
								{card.durationUnit === 'm' ? 'min' : 'hours'}
							</p>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default SliderWithCards;
