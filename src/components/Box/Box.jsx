import React from 'react';
import { motion } from 'framer-motion';

export const Box = ({ styles, children }) => {
  return (
    <motion.section
      initial={{ x: '-100%', opacity: 0, width: '0%' }}
      animate={{ x: '0%', opacity: 1, width: '100%' }}
      exit={{
        x: window.innerWidth,
        opacity: 0.5,
        transition: {
          duration: 0.15,
        },
      }}
      transition={{ duration: 0.15 }}
      className={styles}
    >
      {children}
    </motion.section>
  );
};
