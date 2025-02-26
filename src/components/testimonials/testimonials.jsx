import React, { useState } from 'react';
import './testimonials.css';
import Art from '../../Images/Art_testimonial.jpg';
import Stuck from '../../Images/StuckOn1.jpg';

const testimonials = [
  {
    avatar: Art,
    name: 'Arturo',
    review: 'Karina did an amazing job creating my portfolio photography webpage. I wasn’t sure about the layout at first, but she took the initiative to design multiple drafts for me to choose from, making the process so much easier.'
  },
  {
    avatar: Stuck,
    name: 'Stuck on Sketches',
    review: 'Karina did an incredible job on my webpage! She took all my ideas and artwork and brought my vision to life, making the site truly stand out.'
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="testimonial-container">
        <div className="testimonial">
          <div className="client__avatar">
            <img src={testimonials[index].avatar} alt={testimonials[index].name} />
          </div>
          <h5 className="client__name">{testimonials[index].name}</h5>
          <small className="client__review">{testimonials[index].review}</small>
        </div>

        {/* Navigation Buttons */}
        <button 
          className="prev-btn" 
          onClick={() => setIndex((index - 1 + testimonials.length) % testimonials.length)}
        >
          ❮
        </button>
        <button 
          className="next-btn" 
          onClick={() => setIndex((index + 1) % testimonials.length)}
        >
          ❯
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
