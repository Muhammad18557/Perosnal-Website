import React, { useState } from 'react'

const ProjectForm = () => {
  // State variables
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [techStacks, setTechStacks] = useState('');
  const [year, setYear] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [webLink, setWebLink] = useState('');
  const [image, setImage] = useState(null);

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Project Form Submitted!');
    console.log({
      title,
      description,
      techStacks,
      year,
      githubLink,
      webLink,
      image,
    });
    // Reset form fields
    setTitle('');
    setDescription('');
    setTechStacks('');
    setYear('');
    setGithubLink('');
    setWebLink('');
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Project</h2>

      <label htmlFor="title">Project Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        placeholder = "Auctions Web Application"
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder = "Developed a web application in Python's Django framework that allows users to create auctions and bid on other auctions."
        required
      ></textarea>

      <label htmlFor="techStacks">Tech Stacks:</label>
      <input
        type="text"
        id="techStacks"
        value={techStacks}
        placeholder = "Django, Python, HTML, CSS, Bootstrap, SQLite"
        onChange={(e) => setTechStacks(e.target.value)}
        required
      />

      <label htmlFor="year">Year:</label>
      <input
        type="text"
        id="year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        placeholder = "2022"
        required
      />

      <label htmlFor="githubLink">GitHub Link:</label>
      <input
        type="text"
        id="githubLink"
        value={githubLink}
        onChange={(e) => setGithubLink(e.target.value)}
        placeholder = "https:/github.com/username/project"
        required
      />

      <label htmlFor="webLink">Web Link:</label>
      <input
        type="text"
        id="webLink"
        value={webLink}
        placeholder = "Optional"
        onChange={(e) => setWebLink(e.target.value)}
      />

      <label htmlFor="image">Image:</label>
      <input
        type="file"
        id="image"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <button type="submit">Add Project</button>
    </form>
  );
};

export default ProjectForm;
