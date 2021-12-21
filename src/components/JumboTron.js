import JumboImage from '../../src/images/Ohio-Hocking-Hills-state-park.jpeg'

const JumboTron = () => {
    return (
        <>
            <div class="jumbotron py-0">
                <div className="container">
                    <img className="img-fluid" src={JumboImage} alt="" />
                    <h1 class="display-4">Hello, world!</h1>
                    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr class="my-4" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </div>
            </div>
        </>
    )
}

export default JumboTron
