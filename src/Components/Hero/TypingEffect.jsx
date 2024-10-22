import React from 'react';
import Typewriter from 'typewriter-effect';
import style from './TypingEffect.module.css';

const TypingEffect = () => {
  return (
    <div className={`inline-block ${style['typewriter-container']}`}>
      <div className="flex font-bold">
        <Typewriter
          options={{
            strings: ['Career', 'Success', 'Victory'],
            autoStart: true,
            loop: true,
            cursor: ''
          }}
        ></Typewriter>
        <span className={style['blinking-cursor']}></span>
      </div>
    </div>
  );
};

export default TypingEffect;
