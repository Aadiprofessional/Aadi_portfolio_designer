import React from "react";
import { Link } from "react-router-dom";
import { useParallax } from "react-scroll-parallax";

const AboutAreaTwo = () => {
  const parallax = useParallax({
    translateY: [-24, 24],
    rootMargin: 0,
  });

  return (
    <section className="about-area-two">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-0 order-lg-2">
            <div className="about-img-two text-center">
              <img src="/img/images/h2_about_img.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content-two">
              <div className="section-title white-title title-style-two mb-30">
                <span className="sub-title">I'm a Designer</span>
                <h2 className="title">
                  I Can Design/Develop<br />
                  per Your Requirement
                </h2>
              </div>
              <p>
              Hey there! I'm Aadi, a digital maestro specializing in web development, 
              animation, and design. With 7 years of experience,
               I bring expertise and creativity to every project. From captivating 
               websites to dynamic animations, I thrive on turning ideas into immersive digital 
               experiences. With attention to detail and a passion for pushing boundaries,
                I'm dedicated to making your project a success. Let's embark on this creative 
                journey together and turn your digital dreams into reality!
              </p>
              <Link to="/contact">
                <span className="arrow">
                  <img src="/img/icon/right_arrow.svg" alt="" />
                </span>
                <span className="text">Available jobs</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="about-shape-wrap">
        <img
          src="/img/images/h2_about_shape01.png"
          alt=""
          className="shape-one"
          ref={parallax.ref}
        />
        <img
          src="/img/images/h2_about_shape02.png"
          alt=""
          className="shape-two"
        />
        <img
          src="/img/images/h2_about_shape03.png"
          alt=""
          className="shape-three"
        />
      </div>
    </section>
  );
};

export default AboutAreaTwo;
