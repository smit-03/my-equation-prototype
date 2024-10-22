import React, { useState, useEffect, useRef, useCallback } from 'react';
import { config } from 'react-spring';
import PropTypes from 'prop-types';
import styles from './Testimonial.module.css';
import Carousel from 'react-spring-3d-carousel';
import { v4 as uuidv4 } from 'uuid';
import debounce from 'lodash.debounce';
import Card from './Card';
import { useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';

function Testimonial(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [goToSlide, setGoToSlide] = useState(null);
  const [cards] = useState(props.cards);
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoPlayInterval = props.autoPlayInterval || 4000;

  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current =
      !isHovered &&
      setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % cards.length);
      }, autoPlayInterval);

    return () => clearInterval(intervalRef.current);
  }, [cards.length, autoPlayInterval, isHovered]);

  const handleResize = useCallback(
    debounce(() => {
      if (window.innerWidth < 480) {
        setOffsetRadius(0);
      } else if (window.innerWidth < 940) {
        setOffsetRadius(1);
      } else if (window.innerWidth < 1100) {
        setOffsetRadius(1);
      } else {
        setOffsetRadius(2);
      }
    }, 500),
    []
  );

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  useEffect(() => {
    setOffsetRadius(props.offset);
  }, [props.offset, props.showArrows]);

  useEffect(() => {
    setGoToSlide(currentSlide);
  }, [currentSlide]);

  const handleCardHoverChange = (isHovered) => {
    setIsHovered(isHovered);
  };

  const handleCardDotClick = useCallback(
    (index) => {
      setCurrentSlide(index);
      setGoToSlide(index);
      clearInterval(intervalRef.current);
    },
    [intervalRef]
  );

  const isMobile = useMediaQuery('(max-width: 480px)');
  const isTablet = useMediaQuery('(max-width: 940px)');
  const isDesktop = useMediaQuery('(max-width: 1100px)');

  const width = isMobile ? '85vw' : isTablet ? '80vw' : isDesktop ? '80vw' : '70vw';
  const height = isMobile ? '35vh' : isTablet ? '30vh' : isDesktop ? '32vh' : '40vh';

  return (
    <section>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="heading font-headingFont text-font-default"
      >
        Voices of Satisfaction
      </motion.h1>
      <section className={styles.carouselContainer} aria-label="Testimonial Carousel">
        <div style={{ width, height }}>
          <Carousel
            slides={cards.map((card, index) => ({
              key: uuidv4(),
              ...card,
              onClick: () => handleCardDotClick(index),
              content: (
                <Card data={card} onHoverChange={(isHovered) => handleCardHoverChange(isHovered)} />
              )
            }))}
            goToSlide={goToSlide}
            offsetRadius={offsetRadius}
            animationConfig={config.gentle}
          />
        </div>
        <div className={styles.dotsContainer} style={{ paddingTop: '5em' }}>
          {cards.map((card) => (
            <button
              key={card.name}
              onClick={() => handleCardDotClick(cards.indexOf(card))}
              style={{
                backgroundColor:
                  currentSlide === cards.indexOf(card)
                    ? 'var(--color-secondary-dark)'
                    : 'var(--color-neutral-dark)'
              }}
              aria-label={`Slide ${cards.indexOf(card) + 1}`}
            />
          ))}
        </div>
      </section>
    </section>
  );
}

Testimonial.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      imgSrc: PropTypes.string.isRequired,
      quote: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  autoPlayInterval: PropTypes.number,
  offset: PropTypes.number,
  showArrows: PropTypes.bool
};

export default Testimonial;
