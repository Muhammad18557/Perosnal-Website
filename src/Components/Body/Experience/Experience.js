import React, { useEffect, useState } from 'react';
import WorkCard from './WorkCard/WorkCard';
import Quote from '../Education/Quote/Quote';
import './Experience.css';

const quoteData = {
  quote: "\"Work hard in silence, let your success be your noise.\"",
  author: "Frank Ocean"
};

function Experience() {
  const [workData, setWorkData] = useState([]);

  useEffect(() => {
    fetch('/api/work')
      .then(response => response.json())
      .then(data => setWorkData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className='experience-container'>
      {workData.slice(0, workData.length - 2).map((work, index) => (
        <WorkCard {...work} key={index} />
      ))}
      <Quote {...quoteData} />
      {workData.slice(workData.length - 2).map((work, index) => (
        <WorkCard {...work} key={index} />
      ))}
    </div>
  );
}

export default Experience;
