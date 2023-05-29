import React from 'react'
import './WorkCard.css'
import yale_nus from '../../Education/collegelogos/yale-nus-logo.png'
import ync_hacks from '../worklogos/ync_hacks-logo.png'
import nus from '../worklogos/nus-logo-2.png'


function WorkCard(props) {
  const logos = {
    'Yale-NUS College': yale_nus,
    'YNC_Hacks': ync_hacks, 
    'National University of Singapore': nus
  };

  return (
    <div className='work-card-container'>
        <div className='job-company-logo-container'>
            <img src={logos[props.company_name]} alt='company logo'  className='job-company-logo'/>
        </div>
        <div className='job-text'> 
            <div className='role'> {props.role} </div>
            <div className='company-name-and-date-container'>
                <div className='job-company-name'>  {props.company_name} </div>
                <div className='date'>  {props.duration}</div>
            </div>
            <div className='job-description'>
            {props.description}
            </div>
            <div className='job-skills'>
            {props.skills}
            </div>


        </div>
            
      
    </div>
  )
}

export default WorkCard
