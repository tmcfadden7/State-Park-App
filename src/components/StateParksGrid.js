import StateParks from "./StateParks"

const StateParksGrid = ({ parks }) => {
    return (
        <> 
            <section>
                <div className="container pt-3">
                    <div className="row"> 
                        <StateParks parks={parks} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default StateParksGrid
