import React from "react";
import Card from "../Card/card";
import "./projects.css";

function Projects() {
  const myProjects = [
    {
      title: "Steels Foundation",
      desc: "An Intern project I did when I was an Intern at Argenova. I used ReactJS and Bootstrap to create a donation web application",
      imgSrc: require("../../assets/bg.jpg"),
      webpage: "https://steels-foundation.netlify.app",
      github: "https://github.com/Galledan/Steels-Foundation"
    },

    {
        title: "Naruto Quiz",
        desc: "An Quiz application I did by using ReactJS",
        imgSrc: require("../../assets/bg.jpg"),
        webpage: "https://my-naruto-quiz.netlify.app",
        github: "https://github.com/Galledan/naruto-quiz"
      },

      {
        title: "Portfolio Website",
        desc: "The website you currently in done by using ReactJS",
        imgSrc: require("../../assets/bg.jpg"),
        webpage: "https://my-naruto-quiz.netlify.app",
        github: "https://github.com/Galledan/naruto-quiz"
      },
  ];

  return (
    <div className="Projects">
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
  );
}

export default Projects;
