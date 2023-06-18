import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ConfirmationDialog from '../../ConfirmationDialog/ConfirmationDialog';

const ProjectForm = () => {
  // State variables
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [stacks, setTechStacks] = useState('');
  const [year, setYear] = useState('');
  const [code, setGithubLink] = useState('');
  const [link, setWebLink] = useState('');
  const [image, setImage] = useState(null);
  const [confirm, setConfirm] = useState(false);
  const [userInput, setUserInput] = useState({});
  
  const identify = 2;
  const history = useHistory();

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Project Form Submitted!');
    setUserInput({
      title,
      description,
      stacks,
      year,
      code,
      link,
      image,
    });
    setConfirm(true);
  };

  const handleOk = (userInput) => {
    fetch('http://localhost:3000/api/admin/projects', {
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
          history.push('/projects');
        }, 2000);
      })
      .catch(error => {
        console.error('Error adding row:', error);
      });
  };

  const handleCancel = () => {
    setConfirm(false);
    setTitle('');
    setDescription('');
    setTechStacks('');
    setYear('');
    setGithubLink('');
    setWebLink('');
    setImage(null);
  };

  return (
    <>
      {!confirm && (<form onSubmit={handleSubmit} className="admin-form-container">

        <label htmlFor="title">Project Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          placeholder="Auctions Web Application"
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Developed a web application in Python's Django framework that allows users to create auctions and bid on other auctions."
          required
          className="big-input"
        ></textarea>

        <label htmlFor="techStacks">Tech Stacks:</label>
        <input
          type="text"
          id="techStacks"
          value={stacks}
          placeholder="Django, Python, HTML, CSS, Bootstrap, SQLite"
          onChange={(e) => setTechStacks(e.target.value)}
          required
        />

        <label htmlFor="year">Year:</label>
        <input
          type="text"
          id="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="2022"
          required
        />

        <label htmlFor="githubLink">GitHub Link:</label>
        <input
          type="text"
          id="githubLink"
          value={code}
          onChange={(e) => setGithubLink(e.target.value)}
          placeholder="https:/github.com/username/project"
          required
        />

        <label htmlFor="webLink">Web Link:</label>
        <input
          type="text"
          id="webLink"
          value={link}
          placeholder="Optional"
          onChange={(e) => setWebLink(e.target.value)}
        />

        <label htmlFor="image">Image:</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onloadend = () => {
                setImage(reader.result);
              };
              reader.readAsDataURL(file);
            }
        }}
        />

        <div className="form-container">
          <button type="submit" className="">
            Submit
          </button>
        </div>
      </form>)}

      {confirm && (
        <ConfirmationDialog
          userInput={userInput}
          handleCancel={handleCancel}
          handleOk={handleOk}
          identify = {identify}
        />
      )}
    </>
  );
};

export default ProjectForm;
