import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";
import PropTypes from "prop-types";
import styles from "./Testimonial.module.css";

function Testimonial(props) {
  const table = props.cards.map((element, index) => {
    return { ...element, onClick: () => handleCardClick(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState(2);
  const [goToSlide, setGoToSlide] = useState(null);
  const [cards] = useState(table);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoPlayInterval = props.autoPlayInterval || 2000;

  useEffect(() => {
    const interval = !isHovered && setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % cards.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [cards.length, autoPlayInterval, isHovered]);

  // Responsive adjustments
  const [carouselWidth, setCarouselWidth] = useState("70vw");
  const [carouselHeight, setCarouselHeight] = useState("40vh");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setOffsetRadius(0);
        setCarouselWidth("85vw");
        setCarouselHeight("50vh");
      } else if (window.innerWidth < 768) {
        setOffsetRadius(1);
        setCarouselWidth("80vw");
        setCarouselHeight("45vh");
      } else {
        setOffsetRadius(2);
        setCarouselWidth("70vw");
        setCarouselHeight("40vh");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setOffsetRadius(props.offset);
  }, [props.offset, props.showArrows]);

  useEffect(() => {
    setGoToSlide(currentSlide);
  }, [currentSlide]);

  const handleCardClick = (index) => {
    setCurrentSlide(index);
    setGoToSlide(index);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    setGoToSlide(index);
  };

  return (
    <section
      className={styles.carouselContainer}
      aria-label="Testimonial Carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          width: carouselWidth,
          height: carouselHeight,
          margin: "0 auto",
        }}
      >
        <Carousel
          slides={cards}
          goToSlide={goToSlide}
          offsetRadius={offsetRadius}
          animationConfig={config.gentle}
        />
      </div>
      <div className={styles.dotsContainer}>
        {cards.map((card) => (
          <button
            key={card.name}
            onClick={() => handleDotClick(cards.indexOf(card))}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleDotClick(cards.indexOf(card));
              }
            }}
            style={{
              cursor: "pointer",
              height: "10px",
              width: "10px",
              margin: "0 5px",
              backgroundColor: currentSlide === cards.indexOf(card) ? "#333" : "#bbb",
              borderRadius: "50%",
              display: "inline-block",
              border: "none",
              outline: "none",
              padding: 0,
            }}
            aria-label={`Slide ${cards.indexOf(card) + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

Testimonial.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      imgSrc: PropTypes.string.isRequired,
      quote: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  autoPlayInterval: PropTypes.number,
  offset: PropTypes.number,
  showArrows: PropTypes.bool,
};

export default Testimonial;
