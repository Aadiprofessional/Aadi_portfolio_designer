import React from "react";
import CounterAreaThreeItem from "./CounterAreaThreeItem";

const CounterAreaThree = () => {
  const counter_items = [
    {
      src: "/img/icon/inner_counter_icon01.png",
      titles: ["Years", "of Expertise"],
    },
    {
      src: "/img/icon/inner_counter_icon02.png",
      titles: ["Successful", "Projects Completed"],
    },
    {
      src: "/img/icon/inner_counter_icon03.png",
      titles: ["Creative", "Design Solutions"],
    },
    {
      src: "/img/icon/inner_counter_icon04.png",
      titles: ["Satisfied", "Clients Served"],
    },
  ];

  return (
    <section className="counter-area-three">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-0 order-lg-2">
            <div className="counter-item-wrap-three">
              <ul className="list-wrap">
                {counter_items.map((x, index) => (
                  <li key={index}>
                    <CounterAreaThreeItem item={x} amount={(index + 1) * 15} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="counter-content-three">
              <div className="section-title title-style-two mb-30">
                <h2 className="title">
                  Elevate Your Projects with Our Expertise
                </h2>
              </div>
              <p>
                We are committed to providing top-notch design and development solutions tailored to your needs. Our team brings years of expertise and creativity to every project, ensuring successful outcomes and satisfied clients.
              </p>
              <img src="/img/images/sine.png" alt="" />
              <div className="content-bottom">
                <h4 className="title-two">Aadi</h4>
                <span>CEO,Founder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterAreaThree;
