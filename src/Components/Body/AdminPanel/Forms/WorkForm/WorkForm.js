import React, { useState } from 'react';

const WorkForm = () => {
    // State variables
    const [companyName, setCompanyName] = useState('');
    const [role, setRole] = useState('');
    const [description, setDescription] = useState('');
    const [skills, setSkills] = useState('');
    const [duration, setDuration] = useState('');
    const [country, setCountry] = useState('');
  
    // Form submission handler
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
      console.log('Work Experience Form Submitted!');
      console.log({
        companyName,
        role,
        description,
        skills,
        duration,
        country,
      });
      // Reset form fields
      setCompanyName('');
      setRole('');
      setDescription('');
      setSkills('');
      setDuration('');
      setCountry('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <h2>Add Work Experience</h2>
  
        <label htmlFor="companyName">Company Name:</label>
        <input
          type="text"
          id="companyName"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="SocioCast"
          required
        />
  
        <label htmlFor="role">Role:</label>
        <input
          type="text"
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Software Engineering Intern"
          required
        />
  
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          placeholder = "Improved functions of scobra python package under Prof. Maurice Cheung using Object Oriented Programming fundamentals."
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
  
        <label htmlFor="skills">Skills:</label>
        <input
          type="text"
          id="skills"
          value={skills}
          placeholder = "Python, Object Oriented Programming, Git, Github, Scobra"
          onChange={(e) => setSkills(e.target.value)}
          required
        />
  
        <label htmlFor="duration">Duration:</label>
        <input
          type="text"
          id="duration"
          value={duration}
          placeholder = "3 months"
          onChange={(e) => setDuration(e.target.value)}
          required
        />
  
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          value={country}
          placeholder = "Pakistan"
          onChange={(e) => setCountry(e.target.value)}
          required
        />
  
        <button type="submit">Add Work Experience</button>
      </form>
    );
  };
  
  export default WorkForm;
  