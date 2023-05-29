import React from 'react'
import WorkCard from './WorkCard/WorkCard'
import Quote from '../Education/Quote/Quote'
import './Experience.css'
import data from './workData.json'
const quoteData = {
  quote: "\"Work hard in silence, let your success be your noise.\"",
  author: "Frank Ocean"
};


function Experience() {
  return (
    <div className='experience-container'>
        {data.slice(0, data.length - 2).map((work_data, index) => (
        <WorkCard {...work_data} key={index} />
        ))}
        <Quote {...quoteData} />
        {data.slice(data.length - 2).map((work_data, index) => (
        <WorkCard {...work_data} key={index} />
        ))}
    </div>
  )
}

export default Experience
