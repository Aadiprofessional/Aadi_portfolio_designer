import React from "react";
import SlickSlider from "../SlickSlider/SlickSlider";
import TestimonialAreaItem from "./TestimonialAreaItem";
import $ from "jquery";
import { doAnimations } from "../../lib/helpers";
import cn from "classnames";

const TestimonialArea = () => {
  const slick_settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    beforeChange: function (currentSlide, nextSlide) {
      var $animatingElements = $(
        '.single-slider[data-slick-index="' + nextSlide + '"]'
      ).find("[data-animation]");
      doAnimations($animatingElements);
    },
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const slider_items = [
    {
      title: "Ravi Patel",
      designation: "Senior Developer at TechGenius",
      desc: `I'm amazed by Aadi's proficiency in blockchain and app development. He delivered top-notch solutions for our project.`,
      src: 1,
    },
    {
      title: "Priya Sharma",
      designation: "Lead Designer at Creative Minds",
      desc: `Aadi's creativity knows no bounds. He transformed our ideas into visually stunning designs for our app.`,
      src: 2,
    },
    {
      title: "Rahul Verma",
      designation: "CEO at InnovateTech Solutions",
      desc: `Aadi's dedication to our project was commendable. His expertise in blockchain development exceeded our expectations.`,
      src: 3,
    },
    {
      title: "Sneha Reddy",
      designation: "Founder of WebWonders",
      desc: `Working with Aadi was a pleasure. His professionalism and problem-solving skills made our collaboration seamless.`,
      src: 1,
    },
    {
      title: "Ananya Gupta",
      designation: "Lead Developer at CodeCrafters",
      desc: `Aadi's coding skills are exceptional. He delivered complex functionalities with ease and precision.`,
      src: 4,
    },
    {
      title: "",
      designation: "UI/UX Designer at PixelPerfect",
      desc: `Aadi's attention to detail is impressive. He ensured our website's user interface was intuitive and visually appealing.`,
      src: 1,
    },
    {
      title: "Arun Kumar",
      designation: "Blockchain Specialist at CryptoInnovate",
      desc: `Aadi's knowledge of blockchain technology is outstanding. He provided invaluable insights throughout the project.`,
      src: 3,
    },
  ];

  return (
    <section className="testimonial-area pt-110 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-title text-center mb-60">
              <span className="sub-title">Testimonials</span>
              <h2 className="title">What Our Customers Say About Us</h2>
            </div>
          </div>
        </div>

        <div className="testimonial-item-wrap">
          <div className="row testimonial-active">
            <SlickSlider settings={slick_settings}>
              {slider_items.map((x, index) => (
                <div
                  key={index}
                  className={cn(
                    "col-lg-3",
                    index % 2 === 0 && "testimonial-item-wrap-item-even"
                  )}
                >
                  <TestimonialAreaItem item={x} />
                </div>
              ))}
            </SlickSlider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialArea;
