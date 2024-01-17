'use client';
import { HTMLAttributes, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cnb } from 'cnbuilder';
import { Grid } from '../Grid/Grid';

/**
 * This component place each React node in the children in an alternating grid pattern.
 *
 * @component
 *
 * @example
 * <Timeline startOnRight>
 *  <Paragraph>Item 1 - Lorem Ipsum</Paragraph>
 *  <Paragraph>Item 2 - Lorem Ipsum</Paragraph>
 * </Timeline>
 */

type TimelineItemProps = HTMLAttributes<HTMLDivElement> & {
  month: string;
  day: string;
};

export const TimelineItem = ({
  month,
  day,
  children,
  ...props
}: TimelineItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: false,
    margin: '-30% -30%',
  });
  const containerAnimation = {
    hidden: { width: 16, height: 16, x: -8 },
    visible: { width: 170, height: 170, x: -85 },
  };
  const circleAnimation = {
    hidden: {
      width: 16,
      height: 16,
      x: -8,
      borderWidth: '.2rem',
      backgroundColor: '#000000',
      borderColor: '#B870BD',
    },
    visible: {
      width: 170,
      height: 170,
      x: -85,
      borderWidth: '2rem',
      backgroundColor: '#E50808',
      borderColor: '#F8353554',
    },
  };
  const barAnimation = {
    hidden: { scaleY: 0 },
    visible: { scaleY: 1 },
  };
  const textOpacity = {
    hidden: { opacity: 0.3 },
    visible: { opacity: 1 },
  };
  const monthAnimation = {
    hidden: { fontSize: '1em', width: '6rem', opacity: '0.4' },
    visible: { fontSize: '1.3em', width: 'auto', opacity: '1' },
  };
  const dayAnimation = {
    hidden: {
      fontSize: '1em', fontWeight: 'normal', width: '6rem', opacity: '0.4',
    },
    visible: {
      fontSize: '2em', fontWeight: 'bold', width: 'auto', opacity: '1',
    },
  };

  return (
    <div
      {...props}
      ref={ref}
      className="relative w-full z-10"
    >
      <motion.div
        variants={containerAnimation}
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ duration: 0.3 }}
        className="group flex items-center justify-center absolute top-0 left-1/2"
      >
        <motion.div
          variants={barAnimation}
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.3, ease: 'easeIn' }}
          className="hidden md:block w-2 h-[57rem] -mt-[20rem] absolute top-0 left-1/2 -ml-1 origin-center bg-gradient-to-b from-purple via-digital-red-light to-purple z-10"
        />
        <motion.div
          variants={circleAnimation}
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center absolute top-0 left-1/2 rounded-full bg-clip-padding z-20"
        />
        <div
          className={cnb('flex z-30 text-center transition-all', isInView ? 'flex-col' : 'flex-row gap-x-36')}
        >
          <motion.span
            variants={monthAnimation}
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.3 }}
            className={cnb('inline-block leading-display', isInView ? 'text-center' : 'text-right')}
          >
            {month}
          </motion.span>
          <motion.span
            variants={dayAnimation}
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.3 }}
            className={cnb('inline-block leading-display', isInView ? 'text-center' : 'text-left')}
          >
            {day}
          </motion.span>
        </div>
      </motion.div>
      <motion.div
        variants={textOpacity}
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ duration: 0.3 }}
      >
        <Grid
          md={2}
          className="gap-x-[24.4rem]"
          {...props}
        >
          {children}
        </Grid>
      </motion.div>
    </div>
  );
};
