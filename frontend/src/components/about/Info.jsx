import React from 'react'
import "./about.css";
const Info = () => {
  return (
    <div className="about__info gr">
      <div className="about__box">
          <i className='bx bx-code-alt about__icon'></i>
        <h3 className="about__title">Skills</h3>
          <span className="about__subtitle">Full-Stack Web Developer</span>
        
      </div>
      <div className="about__box">
         <i className='bx bx-task about__icon'></i>
        <h3 className="about__title">Projects</h3>
          <span className="about__subtitle">10+ Completed Projects</span>
        
      </div>
      <div className="about__box">
      <i className='bx bx-book-reader about__icon'></i>
        <h3 className="about__title">Learning</h3>
          <span className="about__subtitle">Actively Exploring MERN Stack</span>
        
      </div>
    </div> 
    
  )
}

export default Info