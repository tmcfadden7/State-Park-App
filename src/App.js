import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import JumboTron from "./components/JumboTron";
import Carousel from "./components/Carousel";
import StateParksGrid from "./components/StateParksGrid";
import Search from "./components/Search";
import axios from "axios";
import './App.css';



function App() {
  const [parks, setparks] = useState(null);
  const [parkQuery, setParkQuery] = useState('a');

  useEffect(() => {
    const baseURL = `https://developer.nps.gov/api/v1/parks?limit=3&q=${parkQuery}&api_key=vm54maVmJeHyMNy0mUND5YYsKDmg8uFn9gqelknN`;

    axios.get(baseURL).then((response) => {
      // console.log(response.data)
      setparks(response.data);
    });
  }, [parkQuery]);
  console.log(parks);
  if (!parks) return null;

  return (
    <>
      <NavBar />
      <JumboTron parks={parks}/>
      <Search parkQuery={(q) => setParkQuery(q)} /> 
      <StateParksGrid parks={parks}/>
      <Carousel parks={parks}/>
      
    </>
  );
}

export default App;