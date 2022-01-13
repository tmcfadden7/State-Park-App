import React from 'react'

const StateParks = ({ parks }) => {
    return (
        <>
            {parks.data.map((park) => {
        // console.log(park.id)
          return (
            <>
            <div className="col-lg-4 mb-5" key={park.id}>
              <img className="img-thumbnail" src={park.images[0].url} alt={park.fullName} />
              <h2>{park.fullName}</h2>
              <p>{park.addresses[0].line1}, <br/>
              {park.addresses[0].city}, {park.addresses[0].stateCode} {park.addresses[0].postalCode}</p>
              <p>{park.description}</p>

              {/* Button trigger modal */}
              <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#activityModal${park.id}`}>
                See Activities
              </button>

              {/* Modal */}
              <div className="modal fade" id={`activityModal${park.id}`} tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" >{park.fullName}</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                    <ul className='list-group list-group-flush'>
                      {park.activities.map((activity) => {
                        return (
                        <>
                          <li key={activity.id} className='activity list-group-item'>{activity.name}</li>
                        </>
                        )
                      })}
                    </ul>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
           </div>
           </>
          )
      })}
        </>
    )
}

export default StateParks
