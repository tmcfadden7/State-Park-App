import { Link } from 'react-router-dom';

const StateParks = ({ parks }) => {
	return (
		<>
			{parks.map((park) => {
				return (
					<div className='col-md-6 col-lg-3 mb-3 p-0 park-card' key={park.id}>
						<div
							className='card text-dark mb-3 border'
							style={{ height: '100%' }}
						>
							<Link
								to={`/park-details/${park.parkCode}`}
								style={{ height: '100%' }}
							>
								<img
									className='card-img-top'
									src={park.images[0].url}
									alt={park.fullName}
									style={{ maxHeight: '150px', width: '100%' }}
								/>
								<div className='card-body'>
									<h4 className='mt-3 text-center card-title'>
										{park.fullName}
									</h4>
									<p className='text-center text-decoration-none card-text'>
										{park.addresses[0].line1}, <br />
										{park.addresses[0].city}, {park.addresses[0].stateCode}{' '}
										{park.addresses[0].postalCode}
									</p>
									<p className='px-3'>{park.description.slice(0, 150)}...</p>
								</div>
							</Link>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default StateParks;
