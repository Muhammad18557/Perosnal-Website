import React from 'react'
import './Footer.css'
import sun from './footer-pics/sun-black.png'
function Footer() {
  return (
    <div className='footer-container'>
      <section className='contact-me'>
      <p className='heading-contact'>
      <i className="fa-regular fa-handshake fa-xl"></i> Connect
      </p>
      <p className='contact-description'>
      Contact me either through the form below or any of the social media platforms if you wish to have a chat.
      </p>
      <div className='contact-form'>
        <form className='form-container'>
          <input className='message-required' name='message' type='text' placeholder='Your Message for Me' required/>
          <div className='submitting'>
          <input className='email-address-optional' name='email' type='email' placeholder='Your Email (Optional)'/>
          <button> Send </button>
          </div>
        </form>
      </div>
      </section>
      <div className='social-media-container'> 
        <a href="mailto:your-email@example.com"> <i className="far fa-envelope "></i></a> 
        <a href="https://www.linkedin.com/in/your-profile"><i className="fab fa-linkedin fa-2xl "></i></a> 
        <a href="https://www.instagram.com/your-profile"><i className="fa-brands fa-instagram fa-2xl"></i></a>
        <a href="https://www.instagram.com/your-profile"><i className="fa-brands fa-telegram fa-2xl"></i></a>
      </div>
      <div className='footer-bottom'>
        <img className='footer-sun' src={sun} alt='sun'/>
      </div>
    </div>
  )
}

export default Footer
