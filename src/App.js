import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ParkDetails from './components/ParkDetails/index';
import JumboTron from './components/JumboTron';
import Carousel from './components/Carousel';
import StateParksGrid from './components/StateParksGrid';
import ActivitiesGrid from './components/ActivitiesGrid';
import Search from './components/Search';
import Button from './components/Button';
import './App.css';
import bgImg1 from './images/Ohio-Hocking-Hills-state-park.jpeg';
import bgImg2 from './images/Chugach-State-Park.jpg';
import NationalPark from './components/NationalPark';
import Footer from './components/Footer';
import useFetch from './hooks/useFetch';
import ToursGrid from './components/ToursGrid';

function App() {
	const [parkQuery, setParkQuery] = useState('a');
	const [tourQuery, setTourQuery] = useState('a');
	const [parkOffset, setParkOffset] = useState(0);
	const [tourOffset, setTourOffset] = useState(0);
	const [isParksTabActive, setIsParksTabActive] = useState(true);
	const [isActivitiesTabActive, setIsActivitiesTabActive] = useState(false);
	const [isToursTabActive, setIsToursTabActive] = useState(false);

	const {
		data: activitiesData,
		isLoading: activitiesIsLoading,
		isError: activitiesIsError,
	} = useFetch('https://developer.nps.gov/api/v1/activities/parks?limit=50');

	const {
		data: parksData,
		isLoading: parksIsLoading,
		isError: parksIsError,
	} = useFetch(
		`https://developer.nps.gov/api/v1/parks?q=${parkQuery}&start=${parkOffset}&limit=4`,
		isParksTabActive
	);

	const {
		data: toursData,
		isLoading: toursIsLoading,
		isError: toursIsError,
	} = useFetch(
		`https://developer.nps.gov/api/v1/tours?q=${tourQuery}&start=${tourOffset}&limit=4`
	);

	if (!parksData) return null;
	if (!activitiesData) return null;
	if (!toursData) return null;
	return (
		<>
			<Router>
				<NavBar />
				<Routes>
					<Route
						exact
						path='/'
						element={
							<>
								<JumboTron bgImg={bgImg1} />
								<div className='info-section'>
									<NationalPark />
									<Search
										setParkQuery={setParkQuery}
										setTourQuery={setTourQuery}
										setIsParksTabActive={setIsParksTabActive}
										setIsActivitiesTabActive={setIsActivitiesTabActive}
										setIsToursTabActive={setIsToursTabActive}
									/>
									{isParksTabActive && (
										<>
											<StateParksGrid parks={parksData?.data} />
											<Button offset={parkOffset} setOffset={setParkOffset} />
										</>
									)}
									{isActivitiesTabActive && (
										<ActivitiesGrid activities={activitiesData} />
									)}
									{isToursTabActive && (
										<>
											<ToursGrid tours={toursData?.data} />
											<Button offset={tourOffset} setOffset={setTourOffset} />
										</>
									)}
								</div>
								<JumboTron bgImg={bgImg2} />
								<div className='info-section'>
									{/* <ArticlesGrid articles={articles} />
									<Button offset={articleOffset} setOffset={setArticleOffset} /> */}
									<Carousel parks={parksData?.data} />
									{/* <ActivitiesGrid activities={activities} /> */}
								</div>
							</>
						}
					/>
					<Route path='park-details/:parkCode' element={<ParkDetails />} />
				</Routes>
				<Footer />
			</Router>
		</>
	);
}

export default App;
