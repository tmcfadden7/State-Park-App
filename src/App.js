import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import JumboTron from "./components/JumboTron";
import Carousel from "./components/Carousel";
import StateParksGrid from "./components/StateParksGrid";
import ActivitiesGrid from "./components/ActivitiesGrid";
import Search from "./components/Search";
import axios from "axios";
import './App.css';
import ParkDetails from "./components/ParkDetails";



function App() {
  const [parks, setparks] = useState(null);
  const [parkQuery, setParkQuery] = useState('a');
  const [activities, setActivities] = useState('')

  useEffect(() => {
    const activityUrl = `https://developer.nps.gov/api/v1/activities/parks?limit=50&api_key=vm54maVmJeHyMNy0mUND5YYsKDmg8uFn9gqelknN`;

    axios.get(activityUrl).then((response) => {
      setActivities(response.data);
    });
  }, []);
  // console.log(activities.data);
  
  useEffect(() => {
    const baseURL = `https://developer.nps.gov/api/v1/parks?limit=3&q=${parkQuery}&api_key=vm54maVmJeHyMNy0mUND5YYsKDmg8uFn9gqelknN`;

    axios.get(baseURL).then((response) => {
      // console.log(response.data)
      setparks(response.data);
    });
  }, [parkQuery]);
  // console.log(parks);
  if (!parks) return null;
  if (!activities) return null;
  return (
    <>
     
          {/* <NavBar />
          <JumboTron parks={parks}/>
          <Search parkQuery={(q) => setParkQuery(q)} /> 
          <StateParksGrid parks={parks}/>
          <Carousel parks={parks}/>
          <ActivitiesGrid activities={activities} /> */}
      <Router>
      <NavBar />
        <Routes>
          <Route path ='/' element={<>
          
          <JumboTron parks={parks}/>
          <Search parkQuery={(q) => setParkQuery(q)} /> 
          <StateParksGrid parks={parks}/>
          <Carousel parks={parks}/>
          <ActivitiesGrid activities={activities} /></>} />
          <Route path='/park-details' element={ <ParkDetails /> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;