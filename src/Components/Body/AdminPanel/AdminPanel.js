import React, { useState } from 'react';
import './AdminPanel.css';
import EducationForm from './Forms/EducationForm/EducationForm';
import WorkForm from './Forms/WorkForm/WorkForm';
import ProjectsForm from './Forms/ProjectsForm/ProjectsForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield } from '@fortawesome/free-solid-svg-icons';

function AdminPanel() {
  const [activeIndices, setActiveIndices] = useState([]);
  const toggleOption = (index) => {
    if (activeIndices.includes(index)) {
      setActiveIndices(activeIndices.filter((i) => i !== index));
    } else {
      setActiveIndices([...activeIndices, index]);
    }
  };




  return (
    <div className='admin-panel-container'>
      <h1> <FontAwesomeIcon icon={faUserShield} size="3x" /></h1>
      <h1 className='welcome'> Welcome to Admin Panel </h1>

      <div className='forms-container'>
        <button
            className={`form-option ${
              activeIndices.includes(2) ? 'form-option-active' : ''
            }`}
            onClick={() => toggleOption(2)} >
          <h2 className='option'>Add Project</h2>
        </button>
        {activeIndices.includes(2) && <ProjectsForm />}
        
        <button
          className={`form-option ${
            activeIndices.includes(1) ? 'form-option-active' : ''
          }`}
          onClick={() => toggleOption(1)}
        >
          <h2 className='option'>Add Work Experience Record</h2>
        </button>
        {activeIndices.includes(1) && <WorkForm />}

        <button
          className={`form-option ${
            activeIndices.includes(0) ? 'form-option-active' : ''
          }`}
          onClick={() => toggleOption(0)}
        >
          <h2 className='option'>Add Education Record</h2>
        </button>
        {activeIndices.includes(0) && <EducationForm />}
      </div>
    </div>
  );
}

export default AdminPanel;
