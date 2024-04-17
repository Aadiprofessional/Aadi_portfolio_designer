import React from "react";
import CounterWrapFour from "../CounterArea/CounterWrapFour";

const ProjectDetailsArea = () => {
  return (
    <section className="project-details-area pt-40 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="project-details-inner">
              <div className="project-details-img">
                <img src="/img/images/project_details_img.jpg" alt="" />
              </div>
              <div className="project-details-content">
                <h2 className="title">Web3-Based Digital Agency</h2>
                <p>
                  Discover the world of Web3 with our innovative digital agency. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>

              <div className="row align-items-center">
                <div className="col-lg-12">
                  {/* counter wrap four */}
                  <CounterWrapFour />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="project-shape-wrap">
        <img src="/img/images/services_details_shape.png" alt="" />
      </div>
    </section>
  );
};

export default ProjectDetailsArea;
