import type { Transition, Variants } from 'framer-motion';

export const variants = {
  icons: {
    dark: { backgroundColor: 'var(--mantine-color-dark-6)' },
    light: { backgroundColor: 'var(--mantine-color-blue-4)' },
  },
  clouds: {
    dark: {
      bottom: '-4.062em',
    },
    light: {
      bottom: '-0.625em',
    },
  },
  stars: {
    dark: {
      top: '50%',
      y: '-50%',
    },
    light: {
      top: '-100%',
      y: 0,
    },
  },
  circle: {
    dark: {
      left: '55%',
      transition: {
        delay: 0.1,
      },
    },
    light: {
      left: '10%',
    },
  },
  moon: {
    dark: {
      x: 0,
    },
    light: {
      x: '100%',
    },
  },
} satisfies Record<string, Variants>;

export const spring: Transition = {
  type: 'spring',
  damping: 10,
  stiffness: 100,
};
