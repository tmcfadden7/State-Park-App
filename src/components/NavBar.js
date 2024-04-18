import React from 'react';
import searchIcon from '../assets/search-icon-30.png';

const NavBar = () => {
	return (
		<>
			<nav
				className='navbar text-center navbar-expand-md navbar-light bg-light'
				id='home'
			>
				<div className='container'>
					<div className='d-flex w-100 justify-content-between align-items-center'>
						<a className='navbar-brand' href='/'>
							State Parks
						</a>
						<a href='/#search-parks'>
							<img src={searchIcon} alt='search icon' />
						</a>
					</div>
				</div>
			</nav>
		</>
	);
};

export default NavBar;
