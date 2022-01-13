
const Activities = ({ activities }) => {
    console.log('this is it: ', activities.data)
    return (
        <>
            {activities.data.map((activity => {
                return (
                    <div className="col-4">
                        <h2>{activity.name}</h2>
                    </div>
                )
            }))}
        </>
    )
}

export default Activities
