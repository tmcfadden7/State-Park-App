import { Link } from "react-router-dom"
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom"

const ParkDetails = ({parks}) => {
    let { id } = useParams();
    // console.log(id);
    return (
        <div>
            
            <nav aria-label="breadcrumb" style={{background: '#e9ecef'}}>
            <div className="container px-0">
                <ol className="breadcrumb px-0">
                    <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Park Details</li>
                </ol>
                </div>
            </nav>
        
        <div className="container">
            <div className="row">
                    {parks.data.map((park) => {
                        if ( park.id === id) {
                            return ( 
                                <>
                                <div className="row">
                                <div className="col-12">
                                    <div key={park.id}>
                                        <h1>{park.name}</h1>
                                        <p>{park.addresses[0].line1},<br/> {park.addresses[0].city}, {park.addresses[0].stateCode} {park.addresses[0].postalCode}</p>
                                        <p>{park.description}...<a href="#" data-toggle="modal" data-target={`#activityModal${park.id}`}><strong>See Activities</strong></a></p>
                                        {/* Button trigger modal */}
                                        {/* <button type="button" className="btn btn-secondary btn-sm" data-toggle="modal" data-target={`#activityModal${park.id}`}>
                                        See Activities
                                    </button> */}
                                        <h4><strong>Entrance Fee</strong></h4>

                                        {park.entranceFees.map((fee) => {
                                            if(fee.cost === '0.00') {
                                                return <p>Free</p>;
                                            } else {
                                                return (
                                                    <p><strong>${fee.cost}</strong>: {fee.description} </p>
                                                    );
                                            }
                                        })}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                    

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
                                </div>
                                    <div className="row">
                                        
                                        {park.images.map((img) => {
                                            return (
                                                <>
                                                <div className="col-6">
                                                <figure className="figure">
                                                    <img style={{maxHeight: '300px'}}className="figure-img img-thumbnail rounded" src={img.url} alt={img.altText} />
                                                    <figcaption className="figure-caption">{img.caption}</figcaption>
                                                </figure>
                                                </div>
                                                
                                                </>
                                            )
                                        })}
                                        
                                    </div>
                                    
                                </div>
                                </>
                            )
                        }
                        
                    })}
            </div>
        </div>
        </div>
    )
}

export default ParkDetails
