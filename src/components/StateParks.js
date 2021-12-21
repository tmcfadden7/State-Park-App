import React from 'react'

const StateParks = ({ parks }) => {
    return (
        <>
            {parks.data.map((park) => {
        // console.log(park.activities[1].name)
  
          return (
            <div className="col-sm-4" key={park.id}>
              <h1>{park.fullName}</h1>
              <p>{park.description}</p>
           </div>
          )
        
        
      })}
        </>
    )
}

export default StateParks
