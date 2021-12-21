import StateParks from "./StateParks"

const StateParksGrid = ({ parks }) => {
    return (
        <>
            <div className="container">
                <div className="row"> 
                  <StateParks parks={parks} />
                </div>
            </div>
        </>
    )
}

export default StateParksGrid
