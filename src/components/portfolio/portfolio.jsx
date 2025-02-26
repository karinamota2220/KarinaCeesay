import React from 'react'
import './portfolio.css'
import IMG from '../../Images/Arts.jpg'
import IMG2 from '../../Images/Meg.jpg'



const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG} alt='Your Image' />
          </div>
          <h3>arturofilms</h3>
          <a href='https://github.com/karinamota2220/ArtsWebsite' className='btn' target='_blank'>GitHub</a>
          <a href='https://arturofilms.com/' className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt='Your Image' />
          </div>
          <h3>Stuck on Sketches</h3>
          <a href='https://github.com/karinamota2220/StuckOnSketches' className='btn' target='_blank'>GitHub</a>
          <a href='https://karinamota2220.github.io/StuckOnSketches/' className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
      </div>

    </section>
  )
}

export default portfolio