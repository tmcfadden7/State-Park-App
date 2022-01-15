import Activities from './Activities';

const ActivitiesGrid = ({ activities }) => {
    return (
        <div className="container py-4">
            <div className="row mb-3">
                <div className="col-12">
                    <h2 className='h2 text-center'>Search By Activity</h2>
                </div>
            </div>
            <div className="row">
                <Activities activities={activities}/>
            </div>
            
        </div>
    )
}

export default ActivitiesGrid
