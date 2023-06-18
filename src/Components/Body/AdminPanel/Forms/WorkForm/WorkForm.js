import React, { useState } from 'react';
import CountrySelect from '../CountrySelect/CountrySelect';
import { useHistory } from 'react-router-dom';
import ConfirmationDialog from '../../ConfirmationDialog/ConfirmationDialog';
const WorkForm = () => {
    // State variables
    const [company_name, setCompanyName] = useState('');
    const [role, setRole] = useState('');
    const [description, setDescription] = useState('');
    const [skills, setSkills] = useState('');
    const [duration, setDuration] = useState('');
    const [country, setCountry] = useState('');
    const [userInput, setUserInput] = useState({})
    const [confirm, setConfirm] = useState(false)
  
    const identify = 1;
    const history = useHistory();

    // Form submission handler
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
      console.log('Work Experience one step closer to submission!');
      setUserInput({
        company_name,
        role,
        description,
        skills,
        duration,
        country,
      });
      setConfirm(true)
    };

    const handleOk = (userInput) => {
      fetch('http://localhost:3000/api/admin/work', {
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
            history.push('/work');
          }, 2000);
        })
        .catch(error => {
          console.error('Error adding row:', error);
        });
    };

    const handleCancel = () => {
      setConfirm(false);
      setCompanyName('');
      setDescription('');
      setSkills('');
      setDuration('');
      setCountry('');
      setUserInput({});
    };
  
    return (
      <>
      {!confirm && (<form onSubmit={handleSubmit} className="admin-form-container">

        {/* <h2 className='form-heading'>Add Work Experience</h2> */}

        <div className='two-inputs'>  
        <label htmlFor="companyName">Company Name:</label>
        <input
          type="text"
          id="companyName"
          value={company_name}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="SocioCast"
          required
        />
        <CountrySelect country={country} setCountry={setCountry}/>
        </div>
        <div className='two-inputs'>
          <label htmlFor="role">Role:</label>
          <input
            type="text"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Software Engineering Intern"
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
        </div>
  
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          placeholder = "Improved functions of scobra python package under Prof. Maurice Cheung using Object Oriented Programming fundamentals."
          onChange={(e) => setDescription(e.target.value)}
          required
          className='big-input'
        ></textarea>
  
        <label htmlFor="skills">Skills:</label>
        <input
          type="text"
          id="skills"
          value={skills}
          placeholder = "Python, Object Oriented Programming, Git, Github, Scobra"
          onChange={(e) => setSkills(e.target.value)}
          required
           className='big-input'
        />

      <div className='form-container'>
        <button type="submit">Submit</button>
      </div>
      </form>)}
      {confirm && <ConfirmationDialog
          userInput={userInput}
          handleCancel={handleCancel}
          handleOk={handleOk}
          identify = {identify}
        /> }

      </>
    );
  };
  
  export default WorkForm;
  