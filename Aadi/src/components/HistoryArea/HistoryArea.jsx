import React from "react";
import HistoryAreaRoadmap from "./HistoryAreaRoadmap";

const HistoryArea = () => {
  return (
    <section className="history-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title white-title text-center mb-45">
              <span className="sub-title">Our Journey</span>
              <h2 className="title">Tracing Our Path</h2>
              <p>
                Explore the story behind our growth, innovation, and success.
              </p>
            </div>
          </div>
        </div>
        <div className="history-inner">
          <div className="history-img">
            <img src="/img/images/history_img.jpg" alt="Company history" />
          </div>
          <div className="row g-0 justify-content-end">
            <div className="col-lg-6">
              <div className="history-content">
                <h2 className="title">
                  The Inception of Our Company
                </h2>
                <p>
                  Our journey began with a vision to redefine the landscape of technology. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat magna sed elit cursus mattis.
                </p>
                <ul className="list-wrap">
                  <li>
                    <i className="far fa-check"></i>We prioritize innovation and customer satisfaction in every step.
                  </li>
                  <li>
                    <i className="far fa-check"></i>Our commitment to quality design sets us apart in the industry.
                  </li>
                  <li>
                    <i className="far fa-check"></i>We strive to create designs that resonate globally and inspire change.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* road map */}
        <HistoryAreaRoadmap />
      </div>

      <div className="history-shape-wrap">
        <img src="/img/images/history_shape01.png" alt="History shapes" />
        <img src="/img/images/history_shape02.png" alt="History shapes" />
      </div>
    </section>
  );
};

export default HistoryArea;
