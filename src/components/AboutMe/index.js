 import React from 'react'
 import './about.css'
 
 function AboutMe() {
   return (
     <div className='AboutMe'>
        <div className='me-container'>
          <div className='me-texts'>
            <h1 className='hi'>Hello, I'm <span className='highlight'>Onur Çelikler</span></h1>
            <h1>I'm a junior software engineer</h1>
            <p>I am a new gradutated Software Engineer from Bahcesehir University. At start, I was learning software for developing games, but later I find out my passion was on web development. So I learned about web development.</p>
            <p>You can learn more about me through my socials and my resume below here.</p>
          </div>
          <div className='me-buttons'>
            <a href="https://twitter.com/galledann" target="_blank" rel="noopener noreferrer"><div className='me-button twitter'><i class="fab fa-twitter"></i></div></a>
            <a href="https://www.instagram.com/onrclklrr/" target="_blank" rel="noopener noreferrer"><div className='me-button instagram'><i class="fab fa-instagram"></i></div></a>
            <a href="https://twitter.com/galledann" target="_blank" rel="noopener noreferrer"><div className='me-button cv'><i class="fas fa-file"></i></div></a>
          </div>
        </div>
     </div>
   )
 }
 
 export default AboutMe