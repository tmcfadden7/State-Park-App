import StateParks from './StateParks';

const StateParksGrid = ({ parks }) => {
	return (
		<>
			<section id='state-park-grid'>
				<div className='container pt-3'>
					<div className='row justify-content-between'>
						<StateParks parks={parks} />
					</div>
				</div>
			</section>
		</>
	);
};

export default StateParksGrid;
