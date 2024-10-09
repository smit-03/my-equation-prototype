import React from 'react'
import Testimonial from '../Components/TestimonialCarousel/Testimonial';
import items from '../Components/TestimonialCarousel/testimonialsData';
import { v4 as uuidv4 } from "uuid";
import Card from '../Components/TestimonialCard/Card';

function HomePage() {
  const formattedItems = items.map(item => ({
    key: uuidv4(),
    content: (
      <Card data={item} />
    )
  }));
  return (
      <Testimonial
        cards={formattedItems}
        height="500px"
        width="70%"
        offset={2}
        showArrows={false}
      />
  );
}

export default HomePage