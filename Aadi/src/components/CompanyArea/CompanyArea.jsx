import React from "react";
import { useParallax } from "react-scroll-parallax";

const CompanyArea = () => {
  const parallax = useParallax({
    translateX: [-24, 24],
    rootMargin: 0,
  });

  return (
    <section className="company-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9">
            <div className="section-title white-title text-center mb-65">
              <span className="sub-title">Our Expertise</span>
              <h2 className="title">
                Crafting Creative Solutions for Web Development Challenges
              </h2>
              <p>
                Dive into our world of innovation where we offer specialized services to meet your unique needs. From web development and blockchain technology to animation and designing, we provide tailored solutions for every project.
              </p>
            </div>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="company-img">
              <img src="/img/images/company_img01.png" alt="" />
              <img
                src="/img/images/company_img02.png"
                alt=""
                data-parallax='{"x" : 120 }'
                ref={parallax.ref}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="company-content">
              <h2 className="title">Explore Our Services</h2>
              <div className="company-list">
                <ul className="list-wrap">
                  <li>
                    <img src="/img/icon/check_icon.png" alt="" />
                    Custom Web Development
                  </li>
                  <li>
                    <img src="/img/icon/check_icon.png" alt="" />
                    Blockchain Integration
                  </li>
                  <li>
                    <img src="/img/icon/check_icon.png" alt="" />
                    Innovative Animation Solutions
                  </li>
                  <li>
                    <img src="/img/icon/check_icon.png" alt="" />
                    Creative Designing Services
                  </li>
                </ul>
              </div>
              <a href="about-me.html" className="btn">
                Discover More <span></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="company-shape-wrap">
        <img src="/img/images/company_shape.png" alt="" />
      </div>
    </section>
  );
};

export default CompanyArea;
