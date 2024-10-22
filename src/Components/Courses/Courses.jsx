import React from 'react';
import styles from './Courses.module.css';
import { motion } from 'framer-motion';

const coursesData = [
  {
    title: 'Robotics',
    description:
      'Go to this step by step guideline process on how to certify for your weekly benefits:'
  },
  {
    title: 'Artificial Intelligence',
    description: "Learn the basics of AI and how it's changing the world."
  },
  {
    title: 'Data Science',
    description: "Discover the power of data science and how it's used in real-world applications."
  },
  {
    title: 'Cyber Security',
    description: 'Protect yourself and your organization from cyber threats.'
  }
];

function Courses() {
  return (
    <section id="course-section" className="my-[50px]">
      <div className="courses-container-wrapper">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`${styles['heading']} font-headingFont`}
        >
          Our Courses
        </motion.h1>
        <div className={styles['courses-container']}>
          {coursesData.map((course, index) => (
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              key={index}
              className={styles['course-container']}
            >
              <div className={styles['go-corner']} href="#">
                <div className={styles['go-arrow']}>→</div>
              </div>
              <img className={styles['course-icon']} src="images/robotics.svg" alt="Robotics"></img>
              <h5 className={`${styles['course-title']} font-subHeadingFont`}>{course.title}</h5>
              <p className={styles['course-description']}>{course.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.button
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={styles['view-all-btn']}
        >
          <a href="{{}}">View More</a>
        </motion.button>
      </div>
    </section>
  );
}

export default Courses;
