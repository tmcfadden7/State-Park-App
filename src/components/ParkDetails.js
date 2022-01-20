import { Link } from "react-router-dom"
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom"

const ParkDetails = ({parks}) => {
    let { id } = useParams();
    // console.log(id);
    return (
        <div>
            <div className="container">
            <nav aria-label="breadcrumb" style={{background: '#e9ecef'}}>
            
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to='/'>Home</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Park Details</li>
                </ol>
                
            </nav>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    {parks.data.map((park) => {
                        if ( park.id === id) {
                            return ( 
                                <>
                                    <div key={park.id}>
                                        <h1>{park.name}</h1>  
                                        <p>{park.description}</p>
                                        
                                    </div>
                                    {/* Button trigger modal */}
                                    <button type="button" className="btn btn-secondary" data-toggle="modal" data-target={`#activityModal${park.id}`}>
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
                                </>
                            )
                        }
                        
                    })}
                </div>
            </div>
        </div>
        </div>
    )
}

export default ParkDetails
