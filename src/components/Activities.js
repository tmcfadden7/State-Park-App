
const Activities = ({ activities }) => {
    console.log('this is it: ', activities.data)
    return (
        <>
            {activities.data.map((activity => {
                return (
                    <>
                        <div className="col-4 my-2" key={activity.id}>
                            <button className="btn btn-outline-secondary rounded-pill" type="button" data-toggle="collapse" data-target={`#collapseActivity${activity.id}`} aria-expanded="false" aria-controls="collapseActivity">
                                {activity.name}
                            </button>
                            <div className="collapse" id={`collapseActivity${activity.id}`}>
                                <div className="card card-body">
                                {activity.parks.map((state) => {
                                    return (
                                        <p>{state.states}</p>
                                    )
                                })}
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
