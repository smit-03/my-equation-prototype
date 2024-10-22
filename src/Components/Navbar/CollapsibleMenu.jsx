import React from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

export const CollapsibleMenu = ({ isOpen }) => {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.section
          key="menu"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="sm:hidden h-fit flex justify-center border-[1px] border-slate-100 bg-white shadow-md"
        >
          <ul className="py-1 w-full grid grid-cols-1">
            <li className="ml-9 py-2 font-medium">
              <i className="fa-solid fa-arrow-right mr-3"></i>
              <a href="/#home" className="text-black font-bold hover:text-primary-default">
                Home
              </a>
            </li>
            <li className="ml-9 py-2 font-medium">
              <i className="fa-solid fa-arrow-right mr-3"></i>
              <a href="/#courses" className="text-black font-bold hover:text-primary-default">
                Courses
              </a>
            </li>
            <li className="ml-9 py-2 font-medium">
              <i className="fa-solid fa-arrow-right mr-3"></i>
              <a href="/#aboutus" className="text-black font-bold hover:text-primary-default">
                About Us
              </a>
            </li>
          </ul>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

CollapsibleMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired
};
