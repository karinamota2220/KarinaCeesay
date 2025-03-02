import React from 'react'
import './services.css'
import { GoCheck } from "react-icons/go";

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
          <li>
              <GoCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        {/* Web Development */}
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
          <li>
              <GoCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
            </li>
          </ul>
        </article>
        {/* END OF Web Development */}
        {/* Content Creation */}
        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
          <li>
              <GoCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
            </li>
          </ul>
        </article>
        {/* END OF Content Creation */}
      </div>
      </section>
  )
}

export default services