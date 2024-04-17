import React from "react";
import { Link } from "react-router-dom";
import CounterAreaTwoItem from "./CounterAreaTwoItem";

const CounterAreaTwo = () => {
  const counter_items = [
    {
      src: "/img/icon/counter_icon01.png",
      title: "Years of Experience",
      suffix: "",
    },
    {
      src: "/img/icon/counter_icon02.png",
      title: "Creative Design Solutions",
      suffix: "",
    },
    {
      src: "/img/icon/counter_icon03.png",
      title: "Satisfied Clients",
      suffix: "K",
    },
    {
      src: "/img/icon/counter_icon04.png",
      title: "Successful Projects Completed",
      suffix: "+",
    },
  ];

  return (
    <section className="counter-area-two pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-0 order-lg-2">
            <div className="counter-item-wrap-two">
              <ul className="list-wrap">
                {counter_items.map((x, index) => (
                  <li key={index}>
                    <CounterAreaTwoItem item={x} amount={(index + 1) * 100} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="counter-content">
              <div className="section-title title-style-two mb-20">
                <span className="sub-title">Our Expertise</span>
                <h2 className="title">
                Over 900+ Completed Work & Still Counting.
                </h2>
              </div>
              <p className="info">
                We specialize in providing creative design solutions and have successfully completed numerous projects, earning the satisfaction of our clients. With our years of experience, we ensure every project's success.
              </p>
              <Link to="/services" className="btn">
                Explore Services <span></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterAreaTwo;
