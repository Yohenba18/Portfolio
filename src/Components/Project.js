import React from "react";
import "./Project.css";
import ProjectCard from "./ProjectCard";
import facebook from "../images/facebook.png"

function Project() {
  return (
    <div className="project" id="project">
      <div className="project__title">
        <h1>PROJECTS</h1>
      </div>
      <div className="project__cards">
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

        />
        <ProjectCard
          title="Twitter clone"
          description="Guided projects to practice Frontend devlopment and backend with Firebase and Firestore"
          link="https://github.com/Yohenba18/twitter-clone"
        />
        <ProjectCard
          title="Instagram clone"
          description="Guided projects to practice Frontend devlopment and backend with Firebase and Firestore"
          link="https://github.com/Yohenba18/instagram-clone"
        />
        <ProjectCard
          title="Portfolio"
          description="My basic beginner Portfolio made with HTML, CSS and JAVASCRIPT"
          link="https://github.com/Yohenba18/Portfolio-uncomplete"
        />
      </div>
    </div>
  );
}

export default Project;
