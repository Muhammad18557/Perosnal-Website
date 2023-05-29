import React from 'react';
import './Home.css';
import myPhoto from './mypic/mypic-5.jpeg';
import Footer from '../../Footer/Footer';

function Home() {
  return (
    <>
    <div className='home-container'>

      <div className='intro'>
        <h1>Hi, I'm Abdullah</h1>
        
        <h2>I am a Computer Science major (sophomore) at Yale-NUS College of National University of Singapore, and currently enjoying my summer break back home in Lahore, Pakistan. I am a computer science enthusiast and love trying out new technology stacks. Hit me up if you want to work on a project together from anywhere in the world.</h2>

        <h2 className='skillset'>Skills:  Python, JavaScript, React, Java, C++, C, OCaml, Html, CSS, git, Machine Learning, Linear Algebra, Data Structures and Algorithms, Object Oriented Porgramming.</h2> 
        <div className='resume-and-contact'>
            <div className='contact-link'>
                <a href='https://marketplace.canva.com/EAE8mhdnw_g/2/0/1131w/canva-grey-clean-cv-resume-photo-pIsBixsev8I.jpg' target="_blank"> <i className="fa-brands fa-github"></i> 
                <h1 className="label-github">GitHub</h1> </a>
            </div>

            <div className='resume-link'> 
                <a href='https://marketplace.canva.com/EAE8mhdnw_g/2/0/1131w/canva-grey-clean-cv-resume-photo-pIsBixsev8I.jpg' target="_blank"><i className="fas fa-file-alt"></i>
                <h1 className="label-resume">Resume</h1> </a>
            </div>
        </div>
        <h2 className='skillset'> Interests: Swimming, Squash, Table Tennis, Cricket. </h2>
        <div className='languages'>
              <i className='fas fa-language fa-xl language-name'></i>
              <div className='language-name'>English </div> 
              <div className='language-name'>Urdu</div>
              <div className='language-name'>Punjabi</div>
        </div>      
      </div>
      <div className='my-photo-container'>
      <img src={myPhoto} className='my-photo' alt='My Photo' />
       </div>

    </div>
    </>
  );
}

export default Home;

