import React from "react";
import InnerServiceAreaTwoItem from "./InnerServiceAreaTwoItem";

const InnerServiceAreaTwo = () => {
  const services = [
    {
      src: "/img/icon/inner_two_services_icon01.png",
      url: "/services-details",
      titles: ["Blockchain", "Integration"],
      desc: `Explore seamless integration with blockchain technology.`,
    },
    {
      src: "/img/icon/inner_two_services_icon02.png",
      url: "/services-details",
      titles: ["NFT", "Development"],
      desc: `Unlock the potential of non-fungible tokens with our development expertise.`,
    },
    {
      src: "/img/icon/inner_two_services_icon03.png",
      url: "/services-details",
      titles: ["Decentralized", "Finance (DeFi)"],
      desc: `Dive into the world of decentralized finance with our comprehensive solutions.`,
    },
    {
      src: "/img/icon/inner_two_services_icon04.png",
      url: "/services-details",
      titles: ["Smart Contract", "Auditing"],
      desc: `Ensure the security and reliability of your smart contracts with our auditing services.`,
    },
  ];

  return (
    <section className="inner-services-area-two pt-110 pb-90">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8">
            <div className="section-title text-center mb-65">
              <h2 className="title">
                We Offer Innovative Solutions for Web3 Development
              </h2>
              <p>
                Explore our wide range of services tailored for the Web3 era.
              </p>
            </div>
          </div>
        </div>

        <div className="inner-services-wrap-two">
          <div className="row justify-content-center">
            {services.map((x, index) => (
              <div key={index} className="col-xl-3 col-lg-3 col-md-6 col-sm-10">
                <InnerServiceAreaTwoItem item={x} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerServiceAreaTwo;
