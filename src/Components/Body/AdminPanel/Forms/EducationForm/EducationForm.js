import React, { useState } from 'react';

const EducationForm = () => {
  const [schoolName, setSchoolName] = useState('');
  const [degree, setDegree] = useState('');
  const [activities, setActivities] = useState('');
  const [skills, setSkills] = useState('');
  const [duration, setDuration] = useState('');
  const [country, setCountry] = useState('');
  const [timeTaken, setTimeTaken] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Education Form Submitted!');
    console.log({
      schoolName,
      degree,
      activities,
      skills,
      duration,
      country,
      timeTaken,
    });
    // Reset form fields
    setSchoolName('');
    setDegree('');
    setActivities('');
    setSkills('');
    setDuration('');
    setCountry('');
    setTimeTaken('');
  };

  return (
    <form onSubmit={handleSubmit}>
  <h2>Add Education</h2>
  
  <label htmlFor="schoolName">School Name:</label>
  <input
    type="text"
    id="schoolName"
    value={schoolName}
    onChange={(e) => setSchoolName(e.target.value)}
    placeholder="Yale University"
    required
  />

  <label htmlFor="degree">Degree Program:</label>
  <input
    type="text"
    id="degree"
    value={degree}
    onChange={(e) => setDegree(e.target.value)}
    placeholder="BS in Computer Science"
    required
  />
<label htmlFor="country">Country:</label>
  <input
    type="text"
    id="country"
    value={country}
    onChange={(e) => setCountry(e.target.value)}
    placeholder="USA"
    required
  />

  <label htmlFor="duration">Time Period</label>
  <input
    type="text"
    id="duration"
    value={duration}
    onChange={(e) => setDuration(e.target.value)}
    placeholder="Jun 2023 - Dec 2023"
    required
  />


  <label htmlFor="timeTaken">Time Taken:</label>
  <input
    type="text"
    id="timeTaken"
    value={timeTaken}
    placeholder="6 months"
    onChange={(e) => setTimeTaken(e.target.value)}
    required
  />
  <label htmlFor="activities">Activities:</label>
  <input
    type="text"
    id="activities"
    value={activities}
    onChange={(e) => setActivities(e.target.value)}
    placeholder="President of Computer Science Club etc.."
    required
  />

  <label htmlFor="skills">Skills:</label>
  <input
    type="text"
    id="skills"
    value={skills}
    onChange={(e) => setSkills(e.target.value)}
    placeholder="React, Node, Express, MongoDB, etc.."
    required
  />

  <button type="submit">Add Education</button>
</form>
);
};

export default EducationForm;
