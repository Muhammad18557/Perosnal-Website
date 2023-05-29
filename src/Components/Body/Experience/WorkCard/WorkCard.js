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
        <div className='company-logo-container'>
            <img src={logos[props.company_name]} alt='company logo'  className='company-logo'/>
        </div>
        <div className='job-text'> 
            <div className='company-name'> {props.company_name} </div>
            <div className='role-and-date-container'>
                <div className='role'>  {props.role} </div>
                <div className='date'>  {props.duration}</div>
            </div>
            <div className='description'>
            {props.description}
            </div>
            <div className='job-skills'> 
            Skills and Technologies: {props.skills}
            </div>
        </div>
            
      
    </div>
  )
}

export default WorkCard
