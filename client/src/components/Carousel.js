import React, { Component } from "react";
import "../styles/Carousel.css";

class Carousel extends Component {
  render() {
    return (
      <div className="row mb-2">
        <div className="col-md-12">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              />
              <li data-target="#carouselExampleIndicators" data-slide-to="1" />
              <li data-target="#carouselExampleIndicators" data-slide-to="2" />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100 image-carousel"
                  src="https://cdn.dynamicyield.com/api/8768743/images/26534b5d932ca__TN_Wk38_Slider_onsite_B2S_Laptop_1500_13092018.jpg"
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100 image-carousel"
                  src="https://cdn.dynamicyield.com/api/8768743/images/37a775cfc172__TN_WK38_Slider_Onsite_Appliance_1500_12092018.jpg"
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100 image-carousel"
                  src="https://cdn.dynamicyield.com/api/8768743/images/1835d2706e1e3__TN_WK38_Slider_Onsite_Phone_1500_21092018_v3.jpg"
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
