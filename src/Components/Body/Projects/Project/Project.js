import React from 'react';
import './Project.css';
import egrocery from '../projectImages/egrocery.jpeg';
import auctions from '../projectImages/auctions.jpeg';
import portfolio from '../projectImages/pw.jpeg';
import masters from '../projectImages/masters.jpeg';

function Project(props) {
  const images = [egrocery, auctions, portfolio, masters]
  return (
    <div className='project-card-container'>
      <div className='company-logo-container'>
        <img
          src={ images[props.id] }
          alt='company logo'
          className='company-logo'
          href={props.link ? props.link : props.code}
          target="_blank"
        />
      </div>
      <div className='job-text'>
        <div className='project-name'>{props.title}</div>
        <div className='year-and-stacks-container'>
          <div className='year'>{props.year}</div>
          <div className='stacks'>{props.stacks}</div>
        </div>
        <div className='description'>{props.description}</div>
        <div className='code-and-website-container'>
          <div className='website'>
            {props.link ? (
              <a href={props.link} target="_blank">
                <i className='fas fa-rocket fa-2xl'></i> &nbsp;
                <span className='web'>View Project</span>
              </a>
            ) : null}
          </div>
          <div className='code'>
            {props.code ? (
              <a href={props.code} target="_blank">
                <i className='fab fa-github fa-2xl'></i> &nbsp;
                <span className='cod'>View Code </span>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
