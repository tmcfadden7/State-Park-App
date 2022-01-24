
const Activities = ({ activities }) => {
    console.log('this is it: ', activities.data)
    return (
        <>
            {activities.data.map((activity => {
                return (
                    <>
                    <div className="col-4 my-2" key={activity.id}>
                        <button type="button" className="btn btn-outline-secondary rounded-pill" data-toggle="modal" data-target={`#modalActivity${activity.id}`}>
                            {activity.name}
                        </button>
                    
                        {/* MODAL */}
                        <div className="modal fade" id={`modalActivity${activity.id}`} tabIndex="-1" aria-labelledby="activityModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                <div className="modal-header sticky-top bg-light">
                                    <h5 className="modal-title" id="exampleModalLabel">{activity.name}</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                {activity.parks.map((todo) => {
                                    return (
                                        <>
                                        <div className="modal-body" key={todo.parkCode}>
                                            {todo.fullName}, {todo.states}
                                        </div>    
                                        </>
                                    )
                                })}
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </>
                )
            }))}
        </>
    )
}

export default Activities
