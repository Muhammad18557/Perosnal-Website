import React from 'react';
import './AdminPanel.css';
import EducationForm from './Forms/EducationForm/EducationForm';
import WorkForm from './Forms/WorkForm/WorkForm';
import ProjectsForm from './Forms/ProjectsForm/ProjectsForm';

function AdminPanel() {
  return (
    <div className='admin-panel-container'>
      <h1>Welcome to Admin Panel</h1>

      <div className='form-container'>
        <EducationForm />
        <WorkForm />
        <ProjectsForm />
      </div>
    </div>
  );
}

export default AdminPanel;
