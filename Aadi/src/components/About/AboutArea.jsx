import React from "react";
import { Link } from "react-router-dom";

const AboutArea = () => {
  return (
    <section className="about-area">
      <div className="container custom-container">
        <div className="about-inner">
          <div className="row align-items-center justify-content-center">
            <div className="col-46 order-0 order-lg-2">
              <div className="about-img text-end">
                <img src="/img/images/about_img.jpg" alt="About Image" />
              </div>
            </div>
            <div className="col-54">
              <div className="about-content">
                <div className="section-title mb-25">
                  <span className="sub-title">About Our Company</span>
                  <h2 className="title">
                    Elevate Your Brand with Our Creative Solutions
                  </h2>
                </div>
                <p>
                  We are a dynamic design and branding agency dedicated to delivering innovative solutions that resonate with your audience. With a focus on creativity and excellence, we craft compelling designs that leave a lasting impression.
                </p>
                <ul className="list-wrap">
                  <li>
                    <div className="icon">
                      <img src="/img/icon/about_icon01.png" alt="Concept Creation Icon" />
                    </div>
                    <div className="content">
                      <h4 className="title">Concept Creation</h4>
                      <p>
                        Our expert team specializes in generating unique concepts that align with your brand's vision and objectives, ensuring a distinctive identity in the market.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="/img/icon/about_icon02.png" alt="Sketch Drawing Icon" />
                    </div>
                    <div className="content">
                      <h4 className="title">Sketch Drawing</h4>
                      <p>
                        We transform ideas into visual masterpieces through our meticulous sketching process, laying the foundation for stunning designs that captivate your audience.
                      </p>
                    </div>
                  </li>
                </ul>
                
                <div className="about-content-bottom">
                  <span>Think Creative Agency is Your Partner for Success</span>
                  <div className="read-more-btn">
                    <Link to="/about-us" className="btn">
                      Discover More <span></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutArea;
