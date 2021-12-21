import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import JumboTron from "./components/JumboTron";
import StateParksGrid from "./components/StateParksGrid";
import axios from "axios";
import './App.css';

const baseURL = "https://developer.nps.gov/api/v1/parks?limit=50&api_key=vm54maVmJeHyMNy0mUND5YYsKDmg8uFn9gqelknN";

function App() {
  const [parks, setparks] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      // console.log(response.data)
      setparks(response.data);
    });
  }, []);
  console.log(parks);
  if (!parks) return null;

  return (
    <>
      <NavBar />
      <JumboTron />
      <StateParksGrid parks={parks}/>
    </>
  );
}

export default App;