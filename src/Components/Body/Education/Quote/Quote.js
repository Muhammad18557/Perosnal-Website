import React from 'react'
import './Quote.css'

function Quote(props) {
  return (
    <div className='quote-container'>
            <p className='quote'> {props.quote}</p>
            <p className='author'> {props.author}</p>
    </div>
  )
}

export default Quote
