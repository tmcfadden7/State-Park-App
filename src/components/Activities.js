import { useState } from 'react';
import { Link } from 'react-router-dom';

const Activities = ({ activities }) => {
	const [openId, setOpenId] = useState(null);

	const toggleAccordion = (id) => {
		setOpenId(id === openId ? null : id);
	};

	return (
		<>
			<div className='accordion row' id={`accordionExample`}>
				{activities.data.map((activity, index) => {
					return (
						<div
							className='col-sm-4 my-2 align-self-start activities-section'
							key={activity.id + activity.name + index}
						>
							<div className='accordion-item' key={activity.id}>
								<h2 className='accordion-header' id={`heading${activity.id}`}>
									<button
										className='accordion-button btn w-100 p-3 fs-5 text-dark fw-bolder text-center'
										style={{ backgroundColor: '#d3d3d3' }}
										type='button'
										onClick={() => toggleAccordion(activity.id)}
										data-bs-toggle={`collapse`}
										data-bs-target={`#collapse${activity.id}`}
										aria-expanded={activity.id === openId}
										aria-controls={`collapse${activity.id}`}
									>
										{activity.name}
									</button>
								</h2>
								<div
									id={`collapse${activity.id}`}
									className={`accordion-collapse collapse ${
										activity.id === openId ? 'show' : ''
									}`}
									aria-labelledby={`heading${activity.id}`}
									data-bs-parent={`#accordionExample`}
								>
									<div
										className='accordion-body p-0'
										style={{ height: '300px', overflowY: 'scroll' }}
									>
										{activity.parks.map((todo, index) => {
											return (
												<Link
													className='activity-park-name'
													key={index + todo.parkCode}
													to={`/park-details/${todo.parkCode}`}
												>
													<p className='p-3 mb-0 border-bottom'>
														{todo.fullName}, {todo.states.replaceAll(',', ', ')}
													</p>
												</Link>
											);
										})}
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Activities;
