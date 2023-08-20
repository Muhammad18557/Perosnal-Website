import React, { useEffect, useState } from 'react';
import './Projects.css';
import Project from './Project/Project';

function Projects() {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/projects')
      .then(response => response.json())
      .then(data => setProjectsData(data))
      .catch(error => console.error(error));
      console.log(projectsData);
  }, []);
  
  return (
    <div className='projects-container'>
      {projectsData && projectsData.map((project, index) => (
        <div className='project-card animate' key={index}>
          <Project {...project} />
        </div>
      ))}
    </div>
  );
}

export default Projects;
