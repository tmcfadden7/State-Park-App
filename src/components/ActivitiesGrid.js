import Activities from './Activities';

const ActivitiesGrid = ({ activities }) => {
    return (
        <div className="container py-4">
            <div className="row">
                <Activities activities={activities}/>
            </div>
            
        </div>
    )
}

export default ActivitiesGrid
