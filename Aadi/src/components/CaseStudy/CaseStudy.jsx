import React from "react";
import CaseStudyItem from "./CaseStudyItem";
import { Link } from "react-router-dom";

const CaseStudy = () => {
  const studies = [
    {
      colClassName: "col-lg-4 col-md-6",
      src: "/img/project/inner_project01.jpg",
      url: "/project-details",
      title: "Web3 Development",
      desc: "Explore our latest projects in Web3 development.",
    },
    {
      colClassName: "col-lg-4 col-md-6",
      src: "/img/project/inner_project02.jpg",
      url: "/project-details",
      title: "Blockchain Solutions",
      desc: "Discover our innovative blockchain solutions and use cases.",
    },
    {
      colClassName: "col-lg-4 col-md-6",
      src: "/img/project/inner_project03.jpg",
      url: "/project-details",
      title: "Animation Projects",
      desc: "See how we bring ideas to life with our animation projects.",
    },
    {
      colClassName: "col-lg-8 col-md-6",
      src: "/img/project/inner_project04.jpg",
      url: "/project-details",
      title: "Designing Excellence",
      desc: "Experience our commitment to designing excellence in every project.",
    },
    {
      colClassName: "col-lg-4 col-md-6",
      src: "/img/project/inner_project05.jpg",
      url: "/project-details",
      title: "App Development Showcase",
      desc: "Check out our portfolio showcasing our expertise in app development.",
    },
    {
      colClassName: "col-lg-6 col-md-6",
      src: "/img/project/inner_project06.jpg",
      url: "/project-details",
      title: "Creative Solutions",
      desc: "Explore our creative solutions tailored to meet your unique needs.",
    },
    {
      colClassName: "col-lg-6 col-md-6",
      src: "/img/project/inner_project07.jpg",
      url: "/project-details",
      title: "Innovative Development",
      desc: "Witness our innovative approach to development in action.",
    },
  ];

  return (
    <section className="inner-project-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-title text-center mb-65">
              <h2 className="title">Case Studies</h2>
              <p>
                Explore our latest case studies showcasing our expertise and innovative solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="inner-project-item-wrap">
          <div className="row justify-content-center">
            {studies.map((x, index) => (
              <CaseStudyItem key={index} item={x} />
            ))}
          </div>

          <div className="more-btn text-center mt-45">
            <Link to="/case-studies" className="btn">
              View More <span></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
