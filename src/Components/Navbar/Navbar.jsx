import { React, useState } from 'react';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { HamburgerIcon } from './HamburgerIcon';
import { CollapsibleMenu } from './CollapsibleMenu';
import { LoginButton } from './LoginButton';

export const Navbar = () => {
  const [changeNavbarBackground, setChangeNavbarBackground] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest >= 0.1) {
      setChangeNavbarBackground(true);
    } else {
      setChangeNavbarBackground(false);
    }
  });

  return (
    <motion.nav
      className={`z-50 w-full sticky h-[60px] ${
        changeNavbarBackground
          ? 'bg-white/100 sm:backdrop-blur-sm sm:bg-white/30 top-0 border-b-[1px] border-slate-100'
          : 'sm:bg-transparent bg-white/100 sm:border-none border-b-[1px] border-slate-100'
      }`}
      layout
    >
      <section className="min-w-screen-lg h-full flex justify-between px-4 sm:justify-around sm:px-0">
        <div className="flex">
          <HamburgerIcon isOpen={isOpen} setIsOpen={setIsOpen} />
          <Logo />
        </div>
        <Navigation />
        <LoginButton />
      </section>
      <CollapsibleMenu isOpen={isOpen} />
    </motion.nav>
  );
};
