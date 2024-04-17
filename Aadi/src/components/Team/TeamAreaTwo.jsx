import React from "react";
import SlickSlider from "../SlickSlider/SlickSlider";
import TeamAreaTwoItem from "./TeamAreaTwoItem";

const TeamAreaTwo = () => {
  const team_members = [
    {
      src: "/img/team/inner_team01.jpg",
      url: "/team-details",
      title: "Rajesh Kumar",
      designation: "Lead Developer, TechGenius Pvt. Ltd.",
    },
    {
      src: "/img/team/inner_team02.jpg",
      url: "/team-details",
      title: "Priya Patel",
      designation: "Marketing Manager, DigitalXcel Pvt. Ltd.",
    },
    {
      src: "/img/team/inner_team03.jpg",
      url: "/team-details",
      title: "Suresh Sharma",
      designation: "Creative Director, PixelCraft Studios",
    },
    {
      src: "/img/team/inner_team04.jpg",
      url: "/team-details",
      title: "Meera Singh",
      designation: "Senior Software Engineer, CodeForge Solutions",
    },
    {
      src: "/img/team/inner_team05.jpg",
      url: "/team-details",
      title: "Neha Gupta",
      designation: "HR Manager, TalentSpot Solutions",
    },
  ];

  const slick_settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 3,
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

  return (
    <section className="team-area-two pt-110 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7">
            <div className="section-title title-style-two text-center mb-70">
              <h2 className="title">Meet The Team</h2>
              <p>
                Get to know the amazing individuals behind our success and learn more about their roles and contributions.
              </p>
            </div>
          </div>
        </div>

        <div className="row team-active">
          <SlickSlider settings={slick_settings}>
            {team_members.map((x, index) => (
              <div key={index} className="col-lg-4">
                <TeamAreaTwoItem item={x} />
              </div>
            ))}
          </SlickSlider>
        </div>
      </div>
    </section>
  );
};

export default TeamAreaTwo;
