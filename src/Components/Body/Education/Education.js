import React, { useEffect, useState } from 'react';
import './Education.css';
import Quote from './Quote/Quote';
import SchoolCard from './SchoolCard/SchoolCard';

function Education() {
  const [schoolData, setSchoolData] = useState([]);

  useEffect(() => {
    // Fetch the data from the API endpoint in the backend
    fetch('/api/education')
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
      {schoolData.map((schoolProps, index) => (
        <SchoolCard {...schoolProps} key={index} />
      ))}
    </div>
  );
}

export default Education;
