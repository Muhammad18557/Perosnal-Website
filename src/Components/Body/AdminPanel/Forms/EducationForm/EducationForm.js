import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import CountrySelect from '../CountrySelect/CountrySelect';
import ConfirmationDialog from '../../ConfirmationDialog/ConfirmationDialog';


const EducationForm = () => {
  const [school_name, setSchoolName] = useState('');
  const [degree, setDegree] = useState('');
  const [activities, setActivities] = useState('');
  const [skills, setSkills] = useState('');
  const [duration, setDuration] = useState('');
  const [country, setCountry] = useState('');
  const [timetaken, setTimeTaken] = useState('');
  const [countryList, setCountryList] = useState([]);
  const [confirm, setConfirm] = useState(false);
  const [userInput, setUserInput] = useState({});

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setUserInput({
      school_name,
      degree,
      activities,
      skills,
      duration,
      country,
      timetaken
    });

    setConfirm(true);
  };
  const handleOk = (userInput) => {
    fetch('http://localhost:3000/api/admin/education', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInput)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Row added successfully:', data);
        setTimeout(() => {
          setConfirm(false);
          history.push('/education');
        }, 4000);
  
      })
      .catch(error => {
        console.error('Error adding row:', error);
      });
  };
  
      

    const handleCancel = () => {
        setConfirm(false);
        setSchoolName('');
        setDegree('');
        setActivities('');
        setSkills('');
        setDuration('');
        setCountry('');
        setTimeTaken('');
    };

    const identify = 0;



  return (
    <>
    { !confirm && <form onSubmit={handleSubmit} className='admin-form-container'>
      {/* <h2 className='form-heading'>Add Education</h2> */}

      <div className='two-inputs'>
        <label htmlFor="schoolName">School Name:</label>
        <input
          type="text"
          id="schoolName"
          value={school_name}
          onChange={(e) => setSchoolName(e.target.value)}
          placeholder="Yale University"
          required
        />
        <CountrySelect country={country} setCountry={setCountry}/>
      </div>

      <label htmlFor="degree">Degree Program:</label>
      <input
        type="text"
        id="degree"
        value={degree}
        onChange={(e) => setDegree(e.target.value)}
        placeholder="BS in Computer Science"
        required
      />

      <label htmlFor="duration">Time Period:</label>
      <input
        type="text"
        id="duration"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        placeholder="Jun 2023 - Dec 2023"
        required
      />

      <label htmlFor="timeTaken">Time Spent:</label>
      <input
        type="text"
        id="timeTaken"
        value={timetaken}
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
        className='big-input'
      />

      <label htmlFor="skills">Skills:</label>
      <input
        type="text"
        id="skills"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
        placeholder="React, Node, Express, MongoDB, etc.."
        className='big-input'
        required
      />
      <div className='form-container'>
        <button type="submit" className=''>Submit</button>
      </div>
    </form>}

    {confirm && <ConfirmationDialog userInput={userInput} handleCancel = {handleCancel} handleOk = {handleOk} identify = {identify} />}
    </>
  );
};

export default EducationForm;
