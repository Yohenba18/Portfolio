import React from "react";
import "./Project.css";
import ProjectCard from "./ProjectCard";
import facebook from "../images/facebook.png";
import linkedin from "../images/Linkedin.png";
import portfolio from "../images/portfolio.png";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";
import weather from "../images/weather.png";
import quiz from "../images/quiz.png";


function Project() {
  return (
    <div className="project" id="project">
      <div className="project__title">
        <h1>PROJECTS</h1>
      </div>
      <div className="project__cards">
        <ProjectCard
          title="Quiz-App"
          description="Quiz app made using reactJS"
          link="https://github.com/Yohenba18/Quiz-app"
          image={quiz}
        />
        <ProjectCard
          title="Weather-App"
          description="Weather app made using reactJS and openweatherapp API"
          link="https://github.com/Yohenba18/Weather-app"
          image={weather}
        />
        <ProjectCard
          title="Facebook clone"
          description="Guided projects to practice Frontend devlopment and backend with Firebase and Firestore with authentication"
          link="https://github.com/Yohenba18/fb-react.github.io"
          image={facebook}
        />
        <ProjectCard
          title="LinkedIn clone"
          description="Guided projects to practice Frontend devlopment and backend with Firebase and Firestore"
          link="https://github.com/Yohenba18/LinkedIn-clone"
          image={linkedin}

        />
        <ProjectCard
          title="Twitter clone"
          description="Guided projects to practice Frontend devlopment and backend with Firebase and Firestore"
          link="https://github.com/Yohenba18/twitter-clone"
          image={twitter}
        />
        <ProjectCard
          title="Instagram clone"
          description="Guided projects to practice Frontend devlopment and backend with Firebase and Firestore with authentication"
          link="https://github.com/Yohenba18/instagram-clone"
          image={instagram}
        />
        <ProjectCard
          title="Portfolio"
          description="My basic beginner Portfolio made with HTML, CSS and JAVASCRIPT"
          link="https://github.com/Yohenba18/Portfolio-uncomplete"
          image={portfolio}
        />
      </div>
    </div>
  );
}

export default Project;
