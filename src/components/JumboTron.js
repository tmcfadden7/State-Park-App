import JumboImage from '../../src/images/Ohio-Hocking-Hills-state-park.jpeg'

const JumboTron = () => {
    return (
        <>
            <div className="jumbotron pt-3 mb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-8">
                            <img className="img-fluid" src={JumboImage} alt="" />
                        </div>
                        <div className="col-12 col-lg-4 text-white">
                            <h1 className="display-4">Hello, world!</h1>
                            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                            <a className="btn btn-secondary btn-lg" href="#" role="button">Learn more</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JumboTron
