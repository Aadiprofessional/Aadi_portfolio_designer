import React from "react";
import ServicesAreaTwoItem from "./ServicesAreaTwoItem";

const ServicesAreaTwo = () => {
  const services_two_items = [
    {
      src: "/img/icon/services_icon01.png",
      url: "/services-details",
      title: "Web Design",
      desc: "Crafting visually appealing and user-friendly websites for optimal user experience.",
    },
    {
      src: "/img/icon/services_icon21.png",
      url: "/services-details",
      title: "Motion Design",
      desc: "Creating dynamic and engaging animations to enhance user interaction and experience.",
    },
    {
      src: "/img/icon/services_icon03.png",
      url: "/services-details",
      title: "Prototype Development",
      desc: "Building interactive prototypes to test and refine product concepts and features.",
    },
    {
      src: "/img/icon/services_icon04.png",
      url: "/services-details",
      title: "UX Research",
      desc: "Conducting user research to understand user behaviors and preferences for informed design decisions.",
    },
  ];

  return (
    <section className="services-area-two">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title title-style-two white-title mb-65 text-center">
              <span className="sub-title">What I Offer</span>
              <h2 className="title">Explore My Services</h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {services_two_items.map((x, index) => (
            <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
              <ServicesAreaTwoItem item={x} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesAreaTwo;
