import React from 'react'

const StateParks = ({ parks }) => {
    return (
        <>
            {parks.data.map((park) => {
        // console.log(park.id)
          return (
            <>
            <div className="col-sm-4" key={park.id}>
              <h1>{park.fullName}</h1>
              <p>{park.addresses[0].line1}, <br/>
              {park.addresses[0].city}, {park.addresses[0].stateCode} {park.addresses[0].postalCode}</p>
              <p>{park.description}</p>
              <button className="btn btn-secondary" type='button' data-toggle='collapse' data-target={`#activities-collapse${park.id}`}>See Activities</button>
              <div>
                <ul className='list-group list-group-flush'>
                  {park.activities.map((activity) => {
                    return (
                    <>
                      <li key={activity.id} id={`activities-collapse${park.id}`} className='activity list-group-item collapse'>{activity.name}</li>
                    </>
                    )
                  })}
                </ul>
              </div>
           </div>
           </>
          )
      })}
        </>
    )
}

export default StateParks
