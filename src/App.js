import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
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

  if (!parks) return null;

  return (
    <>
      <NavBar />
      <div>
      {parks.data.map((park) => {
        // console.log(park.activities[1].name)
  
          return (
            <div key={park.id}>
              <h1>{park.fullName}</h1>
              <p>{park.description}</p>
           </div>
          )
        
        
      })}
      </div>
    </>
  );
}

export default App;