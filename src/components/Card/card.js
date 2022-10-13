import React from 'react'
import "./card.css"

function Card(props) {
  return (
    <div className='Card'>
        <div className='upper'>
            <img src={props.imgSrc} alt="project-alt"/>
        </div>
        <div className='lower'>
            <div className='texts'>
            <p>{props.title}</p>
            <p>{props.desc}</p>
            </div>
            <div className='buttons'>
            <a href={props.webpage} target="_blank" rel="noopener noreferrer" className='showSite'>View Live <i class="fas fa-file-code"></i></a>
            <a href={props.github} target="_blank" rel="noopener noreferrer" className='showCode'>View Code <i class="fab fa-github"></i></a>
            </div>
           
        </div>
    </div>
  )
}

export default Card