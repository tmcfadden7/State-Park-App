import { useEffect, useState } from "react";
import axios from "axios";

const yellowstone = "https://developer.nps.gov/api/v1/parks?limit=10&parkCode=yell,alca,glac&api_key=vm54maVmJeHyMNy0mUND5YYsKDmg8uFn9gqelknN";

const Carousel = () => {
    const [ysPark, setYsPark] = useState(null);
    
    useEffect(() => {
        axios.get(yellowstone).then((response) => {
          console.log('wellthisis...', response.data.data)
          setYsPark(response.data);
        });
      }, []);
      if (!ysPark) return null;
      
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner carosel-max-height">
                    <div className="carousel-item active">
                    <div className="carousel-caption d-none d-md-block custom-caption">
                        <h5>{ysPark.data[0].fullName}</h5>
                        <p>{ysPark.data[0].description}</p>
                    </div>
                    <img src={ysPark.data[0].images[0].url} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src={ysPark.data[1].images[0].url} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block custom-caption">
                        <h5>{ysPark.data[1].fullName}</h5>
                        <p>{ysPark.data[1].description}</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src={ysPark.data[2].images[0].url} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block custom-caption">
                        <h5>{ysPark.data[2].fullName}</h5>
                        <p>{ysPark.data[2].description}</p>
                    </div>
                    </div>
                    
                </div>
                <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </button>
            </div>
        </>
    )
}

export default Carousel
