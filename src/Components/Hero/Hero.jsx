import React from 'react';
import TypingEffect from './TypingEffect';
import Waves from './Waves';
import EnrollNowButton from './EnrollNowButton';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div>
      <div className="hero text-3xl mx-9 md:mx-32 flex justify-between flex-wrap lg:flex-nowrap h-fit lg:h-screen lg:max-h-[750px] mb-[70px]">
        <motion.section
          initial={{ x: -100, opacity: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-20 font-semibold leading-[70px] w-full lg:w-[55%]"
        >
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-[1.4em] md:text-[1.7em]"
          >
            <span className="whitespace-nowrap mr-4">Find Your Own</span>
            <span className="whitespace-nowrap">
              <img
                src="images/sigma.svg"
                className="inline-block w-14 align-baseline"
                alt="sigma"
              />
              quation
            </span>
            <br />
            <span className="whitespace-nowrap">
              for <TypingEffect />
            </span>
          </motion.p>

          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 text-[30px] leading-[40px]"
          >
            <span className="mr-2">Boost your career with our courses</span>
            <img src="images/rocket.gif" className="inline-block h-[75px]" alt="rocket" />
          </motion.p>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="leading-[25px]"
          >
            <p className="mt-2 text-[20px]">
              Platform for Vocational Training with 5x Better Experience!
            </p>
            <p className="mt-2 text-[15px] text-gray-600">
              Expanding the learning horizon for CORE branches of Engineering
            </p>
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <EnrollNowButton />
          </motion.div>
        </motion.section>
        <motion.section
          animate={{ opacity: 1, x: 0.2 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="hero-img w-4/5 lg:w-[45%] m-auto h-fit hidden lg:block"
        >
          <dotlottie-player
            src="https://lottie.host/7a86c80e-8f2b-419c-948f-f0c4d43c4776/xXUZTECrHj.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </motion.section>
      </div>
      <Waves />
    </div>
  );
};

export default Hero;
