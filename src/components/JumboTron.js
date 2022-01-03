import JumboImage from '../../src/images/Ohio-Hocking-Hills-state-park.jpeg'

const JumboTron = ({ parks }) => {
    console.log('this is parks', parks.data[9].fullName)
    return (
        <>
            <div className="jumbotron jumbo-1 pt-3 mb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-8">
                            <img className="img-fluid" src={JumboImage} alt="" />
                        </div>
                        <div className="col-12 col-lg-4 text-white">
                            <h1 className="display-4">Welcome</h1>
                            <p className="lead">Learn more about Hocking Hills State Park in Ohio and other state parks with our website</p>
                            <button className="btn btn-secondary btn-lg">Learn more</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JumboTron
