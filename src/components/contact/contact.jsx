import React, { useRef } from 'react';  // ✅ Only import once
import './contact.css';
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa6";
import emailjs from 'emailjs-com';




const contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_78kix5w', 'template_3mxrs3e', form.current, '8R4Nbzly85dJM_ZBY')

    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <CiMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>karinamota2220@gmail.com</h5>
            <a href='mailto:karinamota2220@gmail.com' target='_blank'>Send a message</a>
          </article>
         
          

        </div>
        {/* End Of Contact Options */}
        <form ref={form} onSubmit={sendEmail} >
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>

      </div>
      
      </section>
  )
}

export default contact