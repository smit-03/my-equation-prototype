import React from 'react';
import { Carousel, IconButton } from '@material-tailwind/react';
import WorkshopCard from './WorkshopCard';
import { useEffect, useState } from 'react';
import WorkshopCardMobile from './WorkshopCardMobile';
import { motion } from 'framer-motion';
import styles from './Workshops.module.css';

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

function Workshops() {
  const [paused, setPaused] = useState(false);
  const [showArrowNavigation, setShowArrowNavigation] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = debounce(() => {
      setWindowWidth(window.innerWidth);
    });
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 750) {
      setShowArrowNavigation(false);
    } else {
      setShowArrowNavigation(true);
    }
  }, [windowWidth]);

  const handleMouseEnter = () => {
    setPaused(true);
  };

  const handleMouseLeave = () => {
    setPaused(false);
  };

  return (
    <section className={`my-[50px]`}>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={`${styles['heading']} font-headingFont`}
      >
        Upcoming Workshops
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="h-fit"
      >
        <Carousel
          transition={{ duration: 1 }}
          className="rounded-xl w-[100%] sm:w-[85%] mx-auto"
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="#4e46e5"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 left-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#4e46e5"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#4e46e5"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="#4e46e5"
              size="lg"
              onClick={handleNext}
              className="!absolute top-2/4 !right-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#4e46e5"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#4e46e5"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </IconButton>
          )}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill('').map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? 'w-8 bg-[#4e46e5]' : 'w-4 bg-white/50'
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
          autoplay={!paused}
          interval={4000}
          loop={true}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {showArrowNavigation ? <WorkshopCard /> : <WorkshopCardMobile />}
          {showArrowNavigation ? <WorkshopCard /> : <WorkshopCardMobile />}
          {showArrowNavigation ? <WorkshopCard /> : <WorkshopCardMobile />}
        </Carousel>
      </motion.div>
    </section>
  );
}

export default Workshops;
