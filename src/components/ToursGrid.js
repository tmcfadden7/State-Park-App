import Tours from './Tours';

const ToursGrid = ({ tours }) => {
	return (
		<>
			<section id='state-park-grid'>
				<div className='container pt-3'>
					<div className='row justify-content-between'>
						<Tours tours={tours} />
					</div>
				</div>
			</section>
		</>
	);
};

export default ToursGrid;
