import React from "react";
import "./Project.css";
import ProjectCard from "./ProjectCard";

function Project() {
  return (
    <div className="project" id="project">
      <div className="project__title">
        <h1>PROJECTS</h1>
      </div>
      <div className="project__cards">
        <ProjectCard title="Portfolio" />
        <ProjectCard title="Portfolio"/>
        <ProjectCard title="Portfolio"/>
        <ProjectCard title="Portfolio"/>
        <ProjectCard title="Portfolio"/>
        <ProjectCard title="Portfolio"/>

      </div>
    </div>
  );
}

export default Project;
