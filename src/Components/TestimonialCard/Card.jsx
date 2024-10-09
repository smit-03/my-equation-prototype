import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import PropTypes from "prop-types";
import leftQuoteImg from "../../assets/quote-left.svg";
import rightQuoteImg from "../../assets/quote-right.svg";
import styles from "./Card.module.css";

function Card({ data }) {
  const [isHovered, setIsHovered] = useState(false);

  const props3 = useSpring({
    transform: isHovered ? "scale(1.03)" : "scale(1)",
    boxShadow: isHovered
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });

  return (
    <animated.div
      className={styles.card}
      style={props3}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img className={styles.avatar} src={data.imgSrc} alt="" />
      <div className={styles.text}>
        <img src={leftQuoteImg} alt="Quote Left" className={`${styles.quoteImg} ${styles.left}`} />
        <p className={styles.testimony}>{data.quote}</p>
        <img src={rightQuoteImg} alt="Quote Right" className={`${styles.quoteImg} ${styles.right}`} />
      </div>
      <i className={styles.position}>{data.position}</i>
      <h2 className={styles.name}>{data.name}</h2>
    </animated.div>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    imgSrc: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
