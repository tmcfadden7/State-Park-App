import React from 'react'

const Carousel = ({parks}) => {
    return (
        <>
            <div className="jumbotron jumbo-2 pt-3 mb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img className="img-fluid" src={parks.data[9].images[0].url} alt="" />
                            <h2>{parks.data[9].fullName}</h2>
                           <p>{parks.data[9].description}</p>
                           <button className="btn btn-secondary btn-lg">Learn more</button>
                        </div>
                        <div className="col-lg-6">
                            <img className="img-thumbnail" src={parks.data[9].images[0].url} alt="" />
                            <h2>{parks.data[9].fullName}</h2>
                           <p>{parks.data[9].description}</p>
                           <button className="btn btn-secondary btn-lg">Learn more</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carousel
