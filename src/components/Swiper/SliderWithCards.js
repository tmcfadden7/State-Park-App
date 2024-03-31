import React, { useEffect, useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
// import { Navigation } from 'swiper';

const SliderWithCards = ({ data }) => {
	const swiperElRef = useRef(null);

	useEffect(() => {
		// Register Swiper web component
		register();

		// listen for Swiper events using addEventListener
		swiperElRef.current.addEventListener('swiperprogress', (e) => {
			const [swiper, progress] = e.detail;
			console.log(progress);
		});

		swiperElRef.current.addEventListener('swiperslidechange', (e) => {
			console.log('slide changed');
		});

		// Object with parameters
		const params = {
			slidesPerView: 3,
			breakpoints: {
				768: {
					slidesPerView: 4,
				},
			},
		};

		// Assign it to swiper element
		Object.assign(swiperElRef.current, params);

		// initialize swiper
		swiperElRef.current.initialize();
	}, []);

	return (
		<swiper-container
			ref={swiperElRef}
			slides-per-view='1'
			navigation='true'
			pagination='true'
		>
			{data.map((card) => (
				<swiper-slide key={card.id}>
					<div className='card' style={{ width: '18rem', minHeight: '500px' }}>
						<img
							src={card.images[0].url}
							alt={card.images[0].title}
							className='card-img-top'
						/>
						<div className='card-body'>
							<h5 className='card-title'>{card.title}</h5>
							<p className='card-text'>{card.description}</p>
							<p>
								Duration: {card.durationMin} - {card.durationMax}{' '}
								{card.durationUnit === 'm' ? 'min' : 'hours'}
							</p>
						</div>
					</div>
				</swiper-slide>
			))}
		</swiper-container>
	);
};

export default SliderWithCards;
