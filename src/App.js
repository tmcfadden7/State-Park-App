import { useState, useEffect } from "react";
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
      <div>
      {parks.data.map((park) => {
        // console.log(park.fullName)
  
          return (
            <div>
              <h1 key={park.id}>{park.fullName}</h1>
              <p>{park.description}</p>
           </div>
          )
        
        
      })}
      </div>
    </>
  );
}

export default App;