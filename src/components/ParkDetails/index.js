import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
	BrowserRouter,
	Routes,
	Route,
	useParams,
	useLocation,
} from 'react-router-dom';
import { Map, Marker, ZoomControl } from 'pigeon-maps';
import DropDown from './DropDown';
import ParkDetailsMap from './Map';
import Header from './Header';
import Carousel from './Carousel';
import useFetch from '../../hooks/useFetch';
import Breadcrumb from '../Breadcrumb';
import { useParkDetailsInfo } from './hooks/useParkDetailsInfo';
import SliderWithCards from '../Swiper/SliderWithCards';

const ParkDetails = () => {
	let { parkCode } = useParams();

	const {
		data: parksData,
		isLoading: parksIsLoading,
		isError: parksIsError,
	} = useFetch(
		`https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&limit=4`
	);

	const {
		data: toursData,
		isLoading: toursIsLoading,
		isError: toursIsError,
	} = useFetch(
		`https://developer.nps.gov/api/v1/tours?parkCode=${parkCode}&limit=4`
	);

	console.log('TOURS', toursData);

	const { hoursOfOperation, additionalAddresses, contactInformation } =
		useParkDetailsInfo(parksData);

	return (
		<div>
			<Breadcrumb />
			<div className='container mt-4'>
				<div className='row justify-content-center'>
					<div className='col col-lg-8'>
						{parksData?.data?.map((park) => {
							return (
								<>
									<div key={park.id}>
										<Header title={park.name} address={park.addresses[0]} />
										<Carousel parkImages={park.images} />

										<p className='mt-4'>
											{park.description}...
											<a
												href='#'
												data-toggle='modal'
												data-target={`#activityModal${park.id}`}
											>
												<strong>See Activities</strong>
											</a>
										</p>
										<ParkDetailsMap
											lat={Number(park.latitude)}
											long={Number(park.longitude)}
										/>
										{/* ACTIVITIES */}
										{park.activities && (
											<>
												<button
													className='btn w-100 p-3 fs-5 text fw-bolder border-bottom'
													style={{ backgroundColor: '#e39a37' }}
													type='button'
													data-bs-toggle='collapse'
													data-bs-target={`#multiCollapseExample${0}`}
													aria-expanded='false'
													aria-controls={`multiCollapseExample${0}`}
												>
													Activities
												</button>
												<div className='col'>
													<div
														className='collapse multi-collapse'
														id={`multiCollapseExample${0}`}
													>
														<div
															className='card card-body'
															style={{
																maxHeight: '350px',
																overflowY: 'scroll',
															}}
														>
															<div className='container'>
																<div className='row'>
																	{park.activities.map((activity) => {
																		return (
																			<>
																				<div
																					className='col-12 col-md-6 col-lg-4'
																					key={activity.id}
																				>
																					<p>&bull; {activity.name}</p>
																				</div>
																			</>
																		);
																	})}
																</div>
															</div>
														</div>
													</div>
												</div>
											</>
										)}
										{/* WEATHER */}
										{park.weatherInfo && (
											<DropDown
												title='Weather Information'
												body={park.weatherInfo}
												targetIndex={1}
											/>
										)}
										{/* DIRECTIONS */}
										{park.directionsInfo && (
											<DropDown
												title='Directions'
												body={park.directionsInfo}
												targetIndex={2}
											/>
										)}
										{/* HOURS */}
										{park.operatingHours && (
											<DropDown
												title='Hours of Operation'
												body={hoursOfOperation}
												targetIndex={3}
											/>
										)}
										{/* ADDRESSES */}
										{park.addresses && (
											<DropDown
												title='Additional Addresses'
												body={additionalAddresses}
												targetIndex={4}
											/>
										)}
										{/* CONTACT INFO */}
										{park.contacts && (
											<DropDown
												title='Contact Information'
												body={contactInformation}
												targetIndex={5}
											/>
										)}

										{/* PARK FEES */}
										{park.entranceFees && park.entranceFees.length > 0 && (
											<>
												<h4 className='mt-2'>
													<strong>Entrance Fee</strong>
												</h4>

												{park.entranceFees.map((fee) => {
													return (
														<>
															<p>
																<strong>
																	{fee.cost === '0.00'
																		? 'Free'
																		: '$' + fee.cost}
																</strong>
																: {fee.title}{' '}
															</p>
															<p>{fee.description}</p>
														</>
													);
												})}
											</>
										)}
									</div>
									{toursData && (
										<div className='row mt-5'>
											<SliderWithCards data={toursData.data} />
											<h2>
												<strong>Tours</strong>
											</h2>
											{toursData.data.map((tour, index) => (
												<>
													<p className='lead'>{tour.title}</p>
													<p>
														{tour.description} Duration: {tour.durationMin} -{' '}
														{tour.durationMax}{' '}
														{tour.durationUnit === 'm' ? 'min' : 'hours'}
													</p>
													<img
														className='card-img-top'
														src={tour.images[0].url}
														alt={tour.images[0].title}
														style={{ maxHeight: '350px', width: '100%' }}
													/>
												</>
											))}
										</div>
									)}
									{/* SEE ACTIVITIES MODAL BODY */}
									<div className='row'>
										<div className='col-12'>
											{/* Modal */}
											<div
												className='modal fade'
												id={`activityModal${park.id}`}
												tabIndex='-1'
												aria-hidden='true'
											>
												<div className='modal-dialog'>
													<div className='modal-content'>
														<div className='modal-header'>
															<h5 className='modal-title'>{park.fullName}</h5>
															<button
																type='button'
																className='close border-0 bg-light'
																data-dismiss='modal'
																aria-label='Close'
															>
																<span
																	aria-hidden='true'
																	className='fs-2 bg-light'
																>
																	&times;
																</span>
															</button>
														</div>
														<div className='modal-body'>
															<ul className='list-group list-group-flush'>
																{park.activities.map((activity) => {
																	return (
																		<>
																			<li
																				key={activity.id}
																				className='activity list-group-item fs-6'
																			>
																				{activity.name}
																			</li>
																		</>
																	);
																})}
															</ul>
														</div>
														<div className='modal-footer'>
															<button
																type='button'
																className='btn btn-secondary'
																data-dismiss='modal'
															>
																Close
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ParkDetails;
