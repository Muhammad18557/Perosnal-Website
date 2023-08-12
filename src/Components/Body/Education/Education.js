import React, { useEffect, useState } from 'react';
import './Education.css';
import SchoolCard from './SchoolCard/SchoolCard';

function Education() {
  const [schoolData, setSchoolData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/education')
      .then(response => response.json())
      .then(data => setSchoolData(data))
      .catch(error => console.error(error));
  }, []);

  const quoteData = {
    quote: "\"Education is the most powerful weapon which you can use to change the world.\"",
    author: "Nelson Mandela"
  };

  return (
    <div className='education-container'>  
    {schoolData && schoolData.map((schoolProps, index) => (
      <div className="school-card" key={index}>
        <SchoolCard {...schoolProps} />
      </div>
    ))}
  </div>
);
}

export default Education;
