import React from 'react';

const Carousel = ({ parkImages }) => {
	return (
		<div
			id='carouselExampleCaptions'
			className='carousel slide'
			data-bs-ride='carousel'
		>
			<div className='carousel-indicators'>
				{parkImages.map((img, index) => {
					return (
						<button
							key={img.url + index}
							type='button'
							data-bs-target='#carouselExampleCaptions'
							data-bs-slide-to={index}
							className={index && 'active'}
							aria-current='true'
							aria-label={'Slide 1'}
						></button>
					);
				})}
			</div>
			<div className='carousel-inner'>
				{parkImages.map((img, index) => {
					return (
						<div
							key={img.altText + index}
							className={`carousel-item ${index === 0 && 'active'}`}
						>
							<img
								src={img.url}
								alt={img.altText}
								className='d-block w-100 park-details-carousel-img'
							/>
							<div className='carousel-caption d-none d-md-block'>
								<h5>{img.caption}</h5>
							</div>
						</div>
					);
				})}
			</div>
			<button
				className='carousel-control-prev'
				type='button'
				data-bs-target={'#carouselExampleCaptions'}
				data-bs-slide='prev'
			>
				<span className='carousel-control-prev-icon' aria-hidden='true'></span>
				<span className='visually-hidden'>Previous</span>
			</button>
			<button
				className='carousel-control-next'
				type='button'
				data-bs-target='#carouselExampleCaptions'
				data-bs-slide='next'
			>
				<span className='carousel-control-next-icon' aria-hidden='true'></span>
				<span className='visually-hidden'>Next</span>
			</button>
		</div>
	);
};

export default Carousel;
