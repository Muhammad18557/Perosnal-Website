import React from 'react';
import emailjs from 'emailjs-com';
import './Footer.css';
import sun from './footer-pics/sun-black.png';

function Footer() {
  const handleSubmit = (event) => {
    event.preventDefault();

    // Configure your EmailJS service
    emailjs.init('KQB0EZXHZDXrzEjun');

    // Prepare the email parameters
    const templateParams = {
      message: event.target.message.value,
      email: event.target.email.value,
    };

    // Send the email
    emailjs.send('service_k2yp6zu', 'template_bxc3b1h', templateParams)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        // Handle success, e.g., display a success message
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        // Handle error, e.g., display an error message
      });

    // Clear the form
    event.target.reset();
  };

  return (
    <div className="footer-container">
      <section className="contact-me">
        <p className="heading-contact">
          <i className="fa-regular fa-handshake fa-xl"></i> Connect
        </p>
        <p className="contact-description">
          Contact me either through the form below or any of the social media platforms if you wish to have a chat.
        </p>
        <div className="contact-form">
          <form className="form-container" onSubmit={handleSubmit}>
            <input className="message-required" name="message" type="text" placeholder="Your Message for Me" required />
            <div className="submitting">
              <input className="email-address-optional" name="email" type="email" placeholder="Your Email (Optional)" />
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </section>
      <div className="social-media-container">
        <a href="mailto:bdllharshad@gmail.com">
          <i className="far fa-envelope"></i>
        </a>
        <a href="https://www.linkedin.com/in/muhammad-abdullah-5a49741ba/" target="_blank">
          <i className="fab fa-linkedin fa-2xl"></i>
        </a>
        <a href="https://www.instagram.com/abdullah_18557" target="_blank">
          <i className="fa-brands fa-instagram fa-2xl"></i>
        </a>
        <a href="https://t.me/abdullah_18557" target="_blank">
          <i className="fa-brands fa-telegram fa-2xl"></i>
        </a>
      </div>
      <div className="footer-bottom">
        <img className="footer-sun" src={sun} alt="sun" />
      </div>
    </div>
  );
}

export default Footer;
