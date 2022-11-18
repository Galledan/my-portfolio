import React from "react";
import Card from "../Card/card";
import "./projects.css";

function Projects() {
  const myProjects = [
    {
      title: "Steels Foundation",
      desc: "An Intern project I did when I was an Intern at Argenova. I used ReactJS and Bootstrap to create a donation web application(Data server needs wake up)",
      imgSrc: require("../../assets/project-images/steels.jpg"),
      webpage: "https://steels-foundation.netlify.app",
      github: "https://github.com/Galledan/Steels-Foundation"
    },

    {
        title: "Naruto Quiz",
        desc: "An Quiz application I did by using ReactJS",
        imgSrc: require("../../assets/project-images/narutoquiz.jpg"),
        webpage: "https://my-naruto-quiz.netlify.app",
        github: "https://github.com/Galledan/naruto-quiz"
      },

      {
        title: "My Portfolio Website",
        desc: "The website you currently in. Done by using ReactJS",
        imgSrc: require("../../assets/project-images/portfolio.jpg"),
        webpage: "https://onurcelikler.netlify.app",
        github: "https://github.com/Galledan/my-portfolio"
      },
      {
        title: "Poro Bot",
        desc: "A discord bot which gives informations about Champions, Items and Players. Done by using Python and Discord.py (not active)",
        imgSrc: require("../../assets/project-images/porobot.png"),
        webpage: "",
        github: "https://github.com/Galledan/LOL-Discord-Bot"
      },
      {
        title: "Damalı Bayrak F1 League",
        desc: "A web page for a F1 League on F1 games. Advertises the league and shows the results. Done by using ReactJS and Bootstrap",
        imgSrc: require("../../assets/project-images/dbf1.jpg"),
        webpage: "https://damalibayrak.netlify.app",
        github: ""
      }
  ];

  return (
    <div className="Projects">
      <h1 className="highlight">My Projects</h1>
      <div className="cards">
      {myProjects &&
        myProjects.map((project, i) => (
          <div className="card-content">
            <Card
              title={project.title}
              desc={project.desc}
              imgSrc={project.imgSrc}
              webpage={project.webpage}
              github={project.github}
            />
          </div>
        ))}
         </div>
    </div>
  );
}

export default Projects;
