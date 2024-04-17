import React from "react";
import SuccessList from "./SuccessList";

const SuccessArea = () => {
  return (
    <section className="success-area pb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-0 order-lg-2">
            <div className="success-img">
              <img src="/img/images/success_img.png" alt="Success Image" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="success-content">
              <div className="section-title title-style-two mb-30">
                <span className="sub-title">Empowering Web3</span>
                <h2 className="title">
                  Pioneering Web3 Solutions with Innovative Animation
                </h2>
              </div>
              <p>
                Our commitment to Web3 technology drives us to develop
                groundbreaking solutions that empower decentralized ecosystems.
                Leveraging cutting-edge animation techniques, we bring these
                concepts to life with immersive user experiences.
              </p>

              {/* success list */}
              <SuccessList />
            </div>
          </div>
        </div>
      </div>

      <div className="success-shape-wrap">
        <img src="/img/images/success_shape01.png" alt="Success Shape 1" />
        <img src="/img/images/success_shape02.png" alt="Success Shape 2" />
      </div>
    </section>
  );
};

export default SuccessArea;
