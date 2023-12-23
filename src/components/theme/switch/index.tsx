'use client';

import { Switch, Tooltip, VisuallyHidden } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';
import cx from 'clsx';
import { motion } from 'framer-motion';

import classes from './index.module.css';

import { IconStars } from '@/components';
import { useColorScheme } from '@/hooks';

import { spring, variants } from './variants';

export function ThemeSwitch() {
  const { computedColorScheme, toggleColorScheme } = useColorScheme();
  const isDarkColorScheme = computedColorScheme === 'dark';

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <label className={cx(classes.wrapper)}>
      <Switch
        classNames={{
          root: cx(classes.switch),
        }}
        checked={isDarkColorScheme}
        onChange={() => toggleColorScheme()}
        aria-label='Color scheme switch'
      />

      <Tooltip
        label='Ctrl + J'
        position='bottom'
        offset={12}
        transitionProps={{ transition: 'fade', duration: 500 }}
        classNames={{
          tooltip: cx(classes.tooltip, 'glassmorphism'),
        }}
      >
        <motion.div
          className={cx(classes.icons)}
          animate={isDarkColorScheme ? 'dark' : 'light'}
          variants={variants.icons}
          transition={spring}
        >
          <motion.div
            className={cx(classes.clouds)}
            animate={isDarkColorScheme ? 'dark' : 'light'}
            variants={variants.clouds}
            transition={spring}
          />

          <motion.div
            className={cx(classes.stars)}
            animate={isDarkColorScheme ? 'dark' : 'light'}
            variants={variants.stars}
            transition={spring}
          >
            <IconStars />
          </motion.div>

          <motion.div
            className={cx(classes.circle)}
            animate={isDarkColorScheme ? 'dark' : 'light'}
            variants={variants.circle}
            transition={spring}
          >
            <div className={cx(classes.moonlight)}>
              <motion.div
                className={cx(classes.moon)}
                animate={isDarkColorScheme ? 'dark' : 'light'}
                variants={variants.moon}
                transition={spring}
              >
                <div className={cx(classes.spot)} />
                <div className={cx(classes.spot)} />
                <div className={cx(classes.spot)} />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </Tooltip>

      <VisuallyHidden>Color scheme switch</VisuallyHidden>
    </label>
  );
}
