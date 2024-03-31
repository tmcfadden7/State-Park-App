import React from 'react';

const Header = ({ title, address }) => {
	return (
		<>
			<h1>{title}</h1>
			<p>
				{address.line1},<br /> {address.city},{' '}
				{address.stateCode} {address.postalCode}
			</p>
		</>
	);
};

export default Header;
