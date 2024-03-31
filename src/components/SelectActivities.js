import React from 'react';

const SelectActivities = ({ activities, onChange, setParkQuery }) => {
	console.log('select act', activities);
	return (
		<select
			className='form-select'
			aria-label='Default select example'
			// value={setParkQuery}
			onChange={(e) => setParkQuery(e.target.value)}
		>
			{activities.data.map((activity, index) => {
				return (
					<option key={index} value={activity.name}>
						{activity.name}
					</option>
				);
			})}
		</select>
	);
};

export default SelectActivities;
