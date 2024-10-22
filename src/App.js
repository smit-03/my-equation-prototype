import React from 'react';
import './index.css';
import { Navbar } from './Components/Navbar/Navbar';
import Courses from './Components/Courses/Courses';
import Sponsors from './Components/Partners/Partners';
import Workshops from './Components/Workshops/Workshops';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Testimonial from './Components/Testimonial/Testimonial';
import testimonials from './Components/Testimonial/testimonialsData';
import Scroll from './Components/ScrollToTop/Scroll';
import Query from './Components/Query/Query';

// import Testimonial from "./Components/Testimonial/Testimonial";
// import testimonialsData from "./Components/Testimonial/testimonialsData";
// import Card from "./Components/Testimonial/Card";

function App() {
  return (
    <div>
      {/* jatin */}
      <Navbar />

      {/* jatin */}
      <Hero />

      {/* jainish */}
      <Sponsors />

      <section className="section-style">
        <Courses />
        {/* krishil */}
        <Workshops />
      </section>

      {/* smit */}
      <Testimonial cards={testimonials} height="500px" width="70%" offset={2} showArrows={false} />

      {/* jainish */}
      <Query />

      {/* krishil */}
      <Footer />

      {/* jainish */}
      <Scroll />
    </div>
  );
}

export default App;
