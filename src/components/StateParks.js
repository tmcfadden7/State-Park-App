import { Link } from "react-router-dom"

const StateParks = ({ parks }) => {
    return (
        <>
            {parks.data.map((park) => {
        // console.log(park.id)
          return (
            
            <div className="col-lg-4 mb-5" key={park.id}>
              <img className="img-thumbnail" src={park.images[0].url} alt={park.fullName} />
              <h2><Link to={`/${park.id}`}>{park.fullName}</Link></h2>
              <p>{park.addresses[0].line1}, <br/>
              {park.addresses[0].city}, {park.addresses[0].stateCode} {park.addresses[0].postalCode}</p>
              <p>{park.description}</p>
              <Link to={`/${park.id}`}><button type="button" className="btn btn-secondary">Learn More</button></Link>
           </div>
           
          )
      })}
        </>
    )
}

export default StateParks
