import React from 'react';
import Header from './components/header/header'; // Capitalized since components should start with uppercase
import Nav from './components/nav/nav';
import About from './components/about/about'
import Experience from './components/experience/experience'
import Portfolio from './components/portfolio/portfolio'
import Testimonials from './components/testimonials/testimonials'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

export default function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
