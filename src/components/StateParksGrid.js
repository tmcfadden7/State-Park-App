import StateParks from "./StateParks"

const StateParksGrid = ({ parks }) => {
    return (
        <> 
            <div className="park-grid-container">
                <div className="container py-3">
                    <div className="row"> 
                    <StateParks parks={parks} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default StateParksGrid
