import React from "react";
import ToolsAreaItem from "./ToolsAreaItem";

const ToolsArea = () => {
  const tools = [
    {
      src: "/img/icon/tools_icon01.png",
      title: "Photoshop",
      desc: `Photoshop is a powerful image editing software used by designers and photographers.`,
    },
    {
      src: "/img/icon/tools_icon02.png",
      title: "Illustrator",
      desc: `Illustrator is a vector graphics editor used for creating logos, icons, and illustrations.`,
    },
    {
      src: "/img/icon/tools_icon03.png",
      title: "Figma",
      desc: `Figma is a collaborative interface design tool used for creating prototypes and user interfaces.`,
    },
    {
      src: "/img/icon/tools_icon04.png",
      title: "Solidity",
      desc: `Solidity is a programming language used for writing smart contracts on the Ethereum blockchain.`,
    },
    {
      src: "/img/icon/tools_icon05.png",
      title: "Web3/Blockchain",
      desc: `Web3 and blockchain technologies enable decentralized applications and secure transactions online.`,
    },
    {
      src: "/img/icon/tools_icon06.png",
      title: "After Effects",
      desc: `After Effects is a digital visual effects, motion graphics, and compositing software used for animation and video editing.`,
    },
    {
      src: "/img/icon/tools_icon07.png",
      title: "Flutter",
      desc: `Flutter is an open-source UI software development kit created by Google for building natively compiled applications for mobile, web, and desktop from a single codebase.`,
    },
    {
      src: "/img/icon/tools_icon08.png",
      title: "Blender",
      desc: `Blender is a free and open-source 3D creation suite used for modeling, rigging, animation, simulation, rendering, compositing, and motion tracking.`,
    },
  ];

  return (
    <section className="tools-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title title-style-two white-title text-center mb-50">
              <span className="sub-title">My Tools</span>
              <h2 className="title">What Tools I Use</h2>
            </div>
          </div>
        </div>

        <div className="tools-item-wrap">
          <div className="row justify-content-center">
            {tools.map((x, index) => (
              <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                <ToolsAreaItem item={x} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsArea;
