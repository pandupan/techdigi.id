export const itemShow = (duration: number = .8, usingScale = true) => ({
  initial: {
    opacity: 0,
    scale: usingScale ? .8 : 1,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration,
      type: 'spring',
      damping: 10,
      stiffness: 100,
      friction: 5,
    },
  },
});