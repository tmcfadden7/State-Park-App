import React from 'react';
import { Map, Marker, ZoomControl } from 'pigeon-maps';

const ParkDetailsMap = ({ lat, long }) => {
	return (
		<div
			style={{
				width: '100%',
				position: 'relative',
			}}
		>
			<Map
				defaultCenter={[Number(lat), Number(long)]}
				defaultZoom={6}
				height={400}
			>
				<Marker width={50} anchor={[Number(lat), Number(long)]} />
				<ZoomControl />
			</Map>
		</div>
	);
};

export default ParkDetailsMap;
