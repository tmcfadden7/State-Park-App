import StateParks from "./StateParks"

const StateParksGrid = ({ parks }) => {
    return (
        <> 
            <div id="parks" className="park-grid-container">
                <div className="container py-5">
                    <div className="row"> 
                    <StateParks parks={parks} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default StateParksGrid
