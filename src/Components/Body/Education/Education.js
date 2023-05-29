import React from 'react'
import './Education.css'
import yalenus from './collegelogos/yale-nus-logo.png'
import yale from './collegelogos/yale-university-logo.jpeg'
import ubc from './collegelogos/UBC-logo-2.jpeg'
import ac from './collegelogos/aitchison.png'
import sg from './flags/sg.png'
import usa from './flags/usa.png'
import canada from './flags/canada.png'
import Pakistan from './flags/Pakistan.png'
import Quote from './Quote/Quote'
import SchoolCard from './SchoolCard/SchoolCard'
import props from './education-data.json'
function Education() {
  const quoteData = {
    quote: "\"Education is the most powerful weapon which you can use to change the world.\"",
    author: "Nelson Mandela"
  };

  return (
    <div className='education-container'>  
        {props.map ((schoolProps, index) => (
            <SchoolCard {...schoolProps} key={index}/>
        ))}
    </div>
  )
}

export default Education
