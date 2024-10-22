import React from 'react';
import Marquee from 'react-fast-marquee';
import styles from './Partners.module.css';
import { motion } from 'framer-motion';

function Sponsors() {
  const sponsors = [
    { name: 'Sponsor 1', logo: 'images/iitb.png' },
    { name: 'Sponsor 2', logo: 'images/bits.svg' },
    { name: 'Sponsor 3', logo: 'images/iitr.png' },
    { name: 'Sponsor 4', logo: 'images/iitk.png' },
    { name: 'Sponsor 5', logo: 'images/du.png' },
    { name: 'Sponsor 6', logo: 'images/iitb.png' },
    { name: 'Sponsor 7', logo: 'images/bits.svg' },
    { name: 'Sponsor 8', logo: 'images/iitr.png' },
    { name: 'Sponsor 9', logo: 'images/iitk.png' },
    { name: 'Sponsor 10', logo: 'images/du.png' }
  ];

  return (
    <div className="my-[50px]">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="heading font-headingFont"
      >
        Industry & College Partners
      </motion.h1>
      <Marquee speed={40} loop={0}>
        {sponsors.map((sponsor, index) => (
          <div className={styles['sponsor-box']} key={index}>
            <img className={styles['sponsor-image']} src={sponsor.logo} alt={sponsor.name} />
          </div>
        ))}
      </Marquee>
      <Marquee speed={40} loop={0} direction={'right'}>
        {sponsors.map((sponsor, index) => (
          <div className={styles['sponsor-box']} key={index}>
            <img className={styles['sponsor-image']} src={sponsor.logo} alt={sponsor.name} />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default Sponsors;
