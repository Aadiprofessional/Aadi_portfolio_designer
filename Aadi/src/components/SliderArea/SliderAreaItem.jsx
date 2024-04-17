import React from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Iframe from "react-iframe";

const SliderAreaItem = () => {
  return (
    <div className="single-slider wow fadeInUp">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-0 order-lg-2">
            <div
              className="slider-img text-end"
              data-animation="fadeInRight"
              data-delay=".8s"
            >
              <img src="/img/slider/slider_img01.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="slider-content">
              <h2 className="title" data-animation="fadeInUp" data-delay=".2s">
                Grow Your Business with Digital Solutions.
              </h2>
              <p data-animation="fadeInUp" data-delay=".4s">
                In today's digital age, leveraging advanced technologies can
                propel your business to new heights. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="slider-btn">
                <Link
                  to="/contact"
                  className="btn"
                  data-animation="fadeInLeft"
                  data-delay=".6s"
                >
                  Get Started <span></span>
                </Link>

                <Popup
                  trigger={
                    <a
                      href="#"
                      className="popup-video"
                      data-animation="fadeInRight"
                      data-delay=".6s"
                    >
                      Watch Demo <i className="fas fa-play pulse"></i>
                    </a>
                  }
                  position=""
                  modal={true}
                >
                  <Iframe
                    url="https://www.youtube.com/embed/bixR-KIJKYM"
                    width="100%"
                    height="350px"
                    id=""
                    className=""
                    display="block"
                    position="relative"
                  />
                </Popup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderAreaItem;
