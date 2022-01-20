import StateParks from "./StateParks"

const StateParksGrid = ({ parks }) => {
    return (
        <> 
            <section>
                <div className="container py-5">
                    <div className="row"> 
                        <StateParks parks={parks} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default StateParksGrid
