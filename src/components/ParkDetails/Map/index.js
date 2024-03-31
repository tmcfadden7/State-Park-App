import React from 'react';
import { Map, Marker, ZoomControl } from 'pigeon-maps';

const ParkDetailsMap = ({ lat, long }) => {
	return (
		<div
			style={{
				width: '100%',
				height: '500px',
				position: 'relative',
			}}
		>
			<Map
				defaultCenter={[Number(lat), Number(long)]}
				defaultZoom={6}
				height={400}
			>
				<Marker
					width={50}
					anchor={[Number(lat), Number(long)]}
					// onClick={() =>
					// 	handleMarkerHover('Marker 1', [Number(lat), Number(long)])
					// }
				/>
				<ZoomControl />
			</Map>
		</div>
	);
};

export default ParkDetailsMap;
