import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="container-fluid home-container">
      {/* Carousel Section */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <div id="mainCarousel" 
                 className="carousel slide shadow-lg rounded-4 overflow-hidden" 
                 data-bs-ride="carousel"
                 data-bs-interval="3000">
              
              {/* Carousel Items */}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img 
                    src="./img1.jpeg" 
                    className="d-block w-100 carousel-image"
                    alt="Gourmet creation 1"
                  />
                </div>
                <div className="carousel-item">
                  <img 
                    src="./img2.jpeg" 
                    className="d-block w-100 carousel-image"
                    alt="Gourmet creation 2"
                  />
                </div>
                <div className="carousel-item">
                  <img 
                    src="./img3.jpeg" 
                    className="d-block w-100 carousel-image"
                    alt="Gourmet creation 3"
                  />
                </div>
              </div>

              {/* Carousel Controls */}
              <button 
                className="carousel-control-prev" 
                type="button" 
                data-bs-target="#mainCarousel" 
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button 
                className="carousel-control-next" 
                type="button" 
                data-bs-target="#mainCarousel" 
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;