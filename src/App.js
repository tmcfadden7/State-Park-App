import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import ParkDetails from "./components/ParkDetails";
import JumboTron from "./components/JumboTron";
import ArticlesGrid from "./components/ArticlesGrid";
import Carousel from "./components/Carousel";
import StateParksGrid from "./components/StateParksGrid";
import ActivitiesGrid from "./components/ActivitiesGrid";
import Search from "./components/Search";
import Button from "./components/Button";
import axios from "axios";
import './App.css';
import bgImg1 from './images/Ohio-Hocking-Hills-state-park.jpeg'
import bgImg2 from './images/Chugach-State-Park.jpg'
import NationalPark from "./components/NationalPark";

function App() {
  const [parks, setParks] = useState(null);
  const [parkQuery, setParkQuery] = useState('a');
  const [articles, setArticles] = useState('');
  const [activities, setActivities] = useState('');
  const [parkOffset, setParkOffset] = useState(0);
  const [articleOffset, setArticleOffset] = useState(0);

  useEffect(() => {
    const activityUrl = `https://developer.nps.gov/api/v1/activities/parks?limit=50&api_key=vm54maVmJeHyMNy0mUND5YYsKDmg8uFn9gqelknN`;

    axios.get(activityUrl).then((response) => {
      setActivities(response.data);
    });
  }, []);
  // console.log(activities.data);
  
  useEffect(() => {
    const baseURL = `https://developer.nps.gov/api/v1/parks?q=${parkQuery}&limit=3&api_key=vm54maVmJeHyMNy0mUND5YYsKDmg8uFn9gqelknN`;

    axios.get(baseURL).then((response) => {

      console.log('fullname data:', response.data.data[1].fullName)
     
      setParks(response.data);
    });
  }, [parkQuery]);

  useEffect(() => {
    const offsetURL = `https://developer.nps.gov/api/v1/parks?start=${parkOffset}&limit=3&api_key=vm54maVmJeHyMNy0mUND5YYsKDmg8uFn9gqelknN`;

    axios.get(offsetURL).then((response) => {
      setParks(response.data);
    });
  }, [parkOffset])

  useEffect(() => {
    const articlesUrl = `https://developer.nps.gov/api/v1/articles?start=${articleOffset}&limit=3&api_key=vm54maVmJeHyMNy0mUND5YYsKDmg8uFn9gqelknN`;

    axios.get(articlesUrl).then((response) => {
      setArticles(response.data)
      // console.log('ARTICLES:', articles)
    })
  }, [articleOffset]);
  if (!parks) return null;
  if (!articles) return null;
  if (!activities) return null;
  return (
    <>
     <Router>
        <NavBar /> 
            <Routes>
              <Route exact path='/' element={
                <>
                  <JumboTron bgImg={bgImg1}/>
                  <NationalPark />
                  <Search parkQuery={(q) => setParkQuery(q)} />
                  <StateParksGrid parks={parks} />
                  <Button offset={parkOffset} setOffset={setParkOffset}/>
                  <JumboTron bgImg={bgImg2}/>
                  <ArticlesGrid articles={articles}/>
                  <Button offset={articleOffset} setOffset={setArticleOffset}/>
                  <Carousel parks={parks} />
                  <ActivitiesGrid activities={activities} />
                </>
              }/>
              <Route path='/:id' element={<ParkDetails parks={parks}/>} />
            </Routes>
        </Router>
    </>
  );
}

export default App;