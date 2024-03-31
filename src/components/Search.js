import React from 'react';
import { useState } from 'react/cjs/react.development';

const Search = ({
	setParkQuery,
	setTourQuery,
	setIsParksTabActive,
	setIsActivitiesTabActive,
	setIsToursTabActive,
}) => {
	const [parkText, setParkText] = useState('');
	const [tourText, setTourText] = useState('');

	const parkOnChange = (q) => {
		console.log('Q', q);
		setParkText(q);
		setParkQuery(q);
	};

	const tourOnChange = (q) => {
		console.log('Q', q);
		setTourText(q);
		setTourQuery(q);
	};
	return (
		<section id='search-parks'>
			<div className='container pt-5'>
				<ul className='nav nav-tabs' id='myTabs'>
					<li
						className='nav-item text-center border border-light'
						style={{ width: '33.33%', backgroundColor: '#e39a37' }}
					>
						<a
							className='nav-link text-dark active'
							id='tab1'
							data-bs-toggle='tab'
							href='#search-by-parks'
							onClick={() => {
								setIsParksTabActive(true);
								setIsActivitiesTabActive(false);
								setIsToursTabActive(false);
							}}
						>
							Parks
						</a>
					</li>
					<li
						className='nav-item text-center border border-light'
						style={{ width: '33.33%', backgroundColor: '#e39a37' }}
					>
						<a
							className='nav-link text-dark'
							id='tab2'
							data-bs-toggle='tab'
							href='#content2'
							onClick={() => {
								setIsParksTabActive(false);
								setIsActivitiesTabActive(true);
								setIsToursTabActive(false);
							}}
						>
							Activities
						</a>
					</li>
					<li
						className='nav-item text-center border border-light'
						style={{ width: '33.33%', backgroundColor: '#e39a37' }}
					>
						<a
							className='nav-link text-dark'
							id='tab3'
							data-bs-toggle='tab'
							href='#content3'
							onClick={() => {
								setIsParksTabActive(false);
								setIsActivitiesTabActive(false);
								setIsToursTabActive(true);
							}}
						>
							Tours
						</a>
					</li>
				</ul>
				<div className='tab-content'>
					<div className='tab-pane fade show active' id='search-by-parks'>
						<h3 className='h3 text-center my-4'>Search by Park</h3>
						<input
							className='form-control mb-4'
							type='text'
							placeholder='Search'
							onChange={(e) => parkOnChange(e.target.value)}
							value={parkText}
						/>
					</div>
					<div className='tab-pane fade' id='content2'>
						<h3 className='h3 text-center my-4'>Search Parks By Activity</h3>
					</div>
					<div className='tab-pane fade' id='content3'>
						<h3 className='h3 text-center my-4'>Search by Tour Location</h3>
						<input
							className='form-control mb-4'
							type='text'
							placeholder='Search'
							onChange={(e) => tourOnChange(e.target.value)}
							value={tourText}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Search;
