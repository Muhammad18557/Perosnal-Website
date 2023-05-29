import React from 'react';
import './Projects.css';
import Project from './Project/Project';
import projectsData from './projectsData.json';

function Projects() {
  return (
    <div className='projects-container'>
      <div className='projects-title'> Projects </div>
      {projectsData.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
}

export default Projects;
