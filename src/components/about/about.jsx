import React from 'react'
import './about.css'
import ME from '../../Images/Teacher-6.jpg'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { MdOutlineFolderCopy } from "react-icons/md";




const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Image' />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>1+ Years Working</small>
            </article>
            <article className='about__card'>
              <MdOutlineFolderCopy className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
          My background is in Computational Data Science, and I worked as a Data Analyst Consultant at Accenture for 1.5 years, gaining valuable experience in consulting and problem-solving. 
          Now, I am transitioning into front-end development, a field I enjoy more and find both exciting and challenging.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
      </section>
  )
}

export default about