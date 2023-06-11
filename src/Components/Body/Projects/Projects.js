import React, {useEffect, useState} from 'react';
import './Projects.css';
import Project from './Project/Project';

function Projects() {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/projects')
      .then(response => response.json())
      .then(data => setProjectsData(data))
      .catch(error => console.error(error));
  }, [])
  
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
