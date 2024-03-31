import Activities from './Activities';

const ActivitiesGrid = ({ activities }) => {
	return (
		<div className='container pb-5' id='activity-grid'>
			<div className='row'>
				<Activities activities={activities} />
			</div>
		</div>
	);
};

export default ActivitiesGrid;
