import React from "react";
import TeamAreaTwoItem from "./TeamAreaTwoItem";

const TeamAreaThree = () => {
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
    {
      src: "/img/team/inner_team06.jpg",
      url: "/team-details",
      title: "Vikram Malhotra",
      designation: "Financial Analyst, WealthGrow Advisors",
    },
  ];

  return (
    <section className="team-area-two pt-110 pb-100">
      <div className="container">
        <div className="row justify-content-center">
          {team_members.map((x, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-10">
              <TeamAreaTwoItem item={x} className="team-item-hover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamAreaThree;
