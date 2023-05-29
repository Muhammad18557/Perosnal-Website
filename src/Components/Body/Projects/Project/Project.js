import React from 'react'
import './Project.css'
function Project(props) {
  return (
    <div className='project-card-container'>
        <div className='company-logo-container'>
            <img src={props.image} alt='company logo'  className='company-logo'/>
        </div>
        <div className='job-text'> 
            <div className='project-name'> {props.title} </div>
            <div className='year-and-stacks-container'>
                <div className='year'>  {props.year} </div>
                <div className='stacks'>  {props.stacks}</div>
            </div>
            <div className='description'>
            {props.description}
            </div>
            <div className='code-and-website-container'> 
              <div className='website'> {props.link ? <a href={props.link}> <i className="fas fa-rocket fa-2xl"></i> &nbsp; <span className='web'>View Project</span> </a> : null}</div>
              <div className='code'>  {props.code ? <a href={props.code}> <i className="fab fa-github fa-2xl"></i> &nbsp; <span className='cod'>View Code </span></a> : null} </div>       
           </div>
        </div>
    </div>
  )
}

export default Project
