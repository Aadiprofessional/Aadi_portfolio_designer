import React from "react";
import SlickSlider from "../SlickSlider/SlickSlider";
import TestimonialAreaTwoItem from "./TestimonialAreaTwoItem";

const TestimonialAreaTwo = () => {
  const slick_settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
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

  const testimonial_items = [
    {
      desc: `‘’It was a great pleasure working with this team. Lorem Ipsum is simply dummy text of the printing and typesetting
      industry.”`,
      title: "Ananya Sharma",
      designation: "Chief Marketing Officer",
      src: "/img/images/testimonial_avatar01.png",
    },
    {
      desc: `‘’Their professionalism and dedication are truly commendable. Lorem Ipsum is simply dummy text of the printing and typesetting
      industry.”`,
      title: "Rahul Khanna",
      designation: "Chief Financial Officer",
      src: "/img/images/testimonial_avatar02.png",
    },
    {
      desc: `‘’I'm impressed by their creativity and attention to detail. Lorem Ipsum is simply dummy text of the printing and typesetting
      industry.”`,
      title: "Sneha Patel",
      designation: "Chief Operations Officer",
      src: "/img/images/testimonial_avatar03.png",
    },
    {
      desc: `‘’Working with them was a rewarding experience. Lorem Ipsum is simply dummy text of the printing and typesetting
      industry.”`,
      title: "Vivek Kapoor",
      designation: "Chief Technology Officer",
      src: "/img/images/testimonial_avatar04.png",
    },
    {
      desc: `‘’Their professionalism and dedication are truly commendable. Lorem Ipsum is simply dummy text of the printing and typesetting
      industry.”`,
      title: "Kavita Singh",
      designation: "Chief Executive Officer",
      src: "/img/images/testimonial_avatar02.png",
    },
    {
      desc: `‘’Their innovative solutions exceeded our expectations. Lorem Ipsum is simply dummy text of the printing and typesetting
      industry.”`,
      title: "Rajesh Gupta",
      designation: "Chief Information Officer",
      src: "/img/images/testimonial_avatar04.png",
    },
  ];

  return (
    <section className="testimonial-area-two pt-110 pb-50">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="section-title title-style-two white-title text-center mb-60">
              <span className="sub-title">Testimonials</span>
              <h2 className="title">What People Say About Us</h2>
            </div>
          </div>
        </div>

        <div className="row testimonial-active-two">
          <SlickSlider settings={slick_settings}>
            {testimonial_items.map((x, index) => (
              <div key={index} className="col-lg-3">
                <TestimonialAreaTwoItem item={x} />
              </div>
            ))}
          </SlickSlider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialAreaTwo;
