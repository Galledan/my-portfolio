import React from "react";
import "./skills.css";

function Skills() {
  
  const knowLogos = [
    {
      name: "HTML",
      img: require("../../assets/logos/html.png"),
    },
    {
      name: "CSS",
      img: require("../../assets/logos/css.png"),
    },
    {
      name: "Javascript",
      img: require("../../assets/logos/js.png"),
    },
    {
      name: "React",
      img: require("../../assets/logos/React.png"),
    },
    {
      name: "NodeJS",
      img: require("../../assets/logos/nodejs.png"),
    },
    {
      name: "Bootstrap",
      img: require("../../assets/logos/bootstrap.png"),
    },
    {
      name: "Python",
      img: require("../../assets/logos/python.png"),
    },
    {
      name: "C#",
      img: require("../../assets/logos/csharp.png"),
    },
    {
      name: "Photoshop",
      img: require("../../assets/logos/photoshop.png"),
    },
  ];

  const wantLogos = [
    {
      name: "Chakra UI",
      img: require("../../assets/logos/chakraui.png"),
    },
    {
      name: "MUI",
      img: require("../../assets/logos/mui.png"),
    },
    {
      name: "VueJS",
      img: require("../../assets/logos/vue.png"),
    },
    {
      name: "NextJS",
      img: require("../../assets/logos/nextjs.png"),
    },
    {
      name: "ThreeJS",
      img: require("../../assets/logos/threejs.png"),
    },
    {
      name: "jQuery",
      img: require("../../assets/logos/jquery.png"),
    },
    {
      name: "Sass",
      img: require("../../assets/logos/sass.png"),
    },
    {
      name: "Figma",
      img: require("../../assets/logos/figma.png"),
    },
  ]

  return (
    <div className="Skills">
      <p className="title1 highlight">My Skills</p>
      <p>You can find languages, frameworks, tools etc. that I am familiar with,  and you can find some of new stuff I want to learn and improve myself below here.</p>
      <div className="know-container skill">
       <p className="title2 highlight">What I Have Experience With</p>
        <div className="know-logos logos">
          {knowLogos &&
            knowLogos.map((logo, i) => (
              <div key={i} className="logo">
                <img src={logo.img} alt="logo" />
                <p className="logo-name">{logo.name}</p>
              </div>
            ))}
        </div>
      </div>
      <div className="want-container skill">
      <p className="title2 highlight">What I Want To Learn</p>
      <div className="want-logos logos">
          {wantLogos &&
            wantLogos.map((logo, i) => (
              <div key={i} className="logo">
                <img src={logo.img} alt="logo" />
                <p className="logo-name">{logo.name}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
