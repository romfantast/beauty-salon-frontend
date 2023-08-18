import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Slider from 'react-slick/lib/slider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slides from 'helpers/slides';
import css from './OnBoard.module.css';
import settingsSlider from 'helpers/settingsSlider';

export const OnBoard = () => {
  const textVariants = {
    hidden: { opacity: 0, y: '-100%' },
    visible: { opacity: 1, y: 0 },
  };
  const authVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <section className={css.section}>
      <div className="relative ">
        <Slider {...settingsSlider}>
          {slides.map(slide => (
            <div key={slide.src}>
              <img
                style={{
                  boxShadow: '0 0 0 2038px rgba(0,0,0,0.05)',
                }}
                className="relative h-screen w-full object-cover "
                src={slide.src}
                alt={slide.alt}
              />
              <motion.p
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.7,
                }}
                className="absolute top-1/3 w-screen px-4 text-3xl font-semibold text-slate-50"
              >
                {slide.desc}
              </motion.p>
            </div>
          ))}
        </Slider>
      </div>
      <motion.div
        variants={authVariants}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 0.5,
        }}
        className="absolute bottom-14 flex gap-x-4 w-full px-4"
      >
        <Link
          to="/login"
          className="border border-solid border-slate-50 rounded-lg text-center text-slate-50 font-bold bg-transparent py-3 w-1/2"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="border border-solid border-slate-50 rounded-lg text-center text-indigo-500 font-bold bg-slate-50 py-3 w-1/2"
        >
          Get started
        </Link>
      </motion.div>
    </section>
  );
};
