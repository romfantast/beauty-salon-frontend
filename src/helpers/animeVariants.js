export const pageVariants = {
  initial: {
    width: 0,
    //  opacity: 0,
  },
  animate: {
    width: '100%',
    //  opacity: 1,
  },
  exit: {
    x: window.innerWidth,
    //  opacity: 0,
  },
};

export const textVariants = {
  hidden: { opacity: 0, y: '-100%' },
  visible: { opacity: 1, y: 0 },
};
export const authVariants = {
  hidden: { opacity: 0, x: '100%' },
  visible: { opacity: 1, x: 0 },
};
