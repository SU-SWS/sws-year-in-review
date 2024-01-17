'use client';
import { HTMLAttributes, useRef } from 'react';
import {
  useScroll,
  motion,
  MotionStyle,
  useTransform,
  useInView,
} from 'framer-motion';
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
    hidden: { width: 20, height: 20, x: -10 },
    visible: { width: 170, height: 170, x: -85 },
  };
  const circleAnimation = {
    hidden: {
      width: 20,
      height: 20,
      x: -10,
      borderWidth: '.2rem',
      backgroundColor: '#000000',
      borderColor: '#B870BD',
    },
    visible: {
      width: 170,
      height: 170,
      x:-85,
      borderWidth: '2rem',
      backgroundColor: '#E50808',
      borderColor: '#F8353554',
    },
  };
  const barAnimation = {
    hidden: { scaleY: 0,  },
    visible: { scaleY: 1,  },
  };
  const textOpacity = {
    hidden: { opacity: 0.3 },
    visible: { opacity: 1 },
  };

  return (
    <div
      {...props}
      ref={ref}
      className="relative w-full z-10"
    >
      {/* <motion.div className="group flex items-center justify-center absolute size-40 hover:size-170 top-0 left-1/2 -ml-20 hover:-ml-85"> */}
      <motion.div
        variants={containerAnimation}
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ duration: 0.3 }}
        className="group flex items-center justify-center absolute top-0 left-1/2"
      >
        {/* <motion.div
          animate={isInView ? 'visible' : 'hidden'}
          className="flex items-center justify-center absolute top-0 left-1/2 -ml-20 group-hover:-ml-85 size-40 group-hover:size-170 rounded-full bg-clip-padding bg-digital-red-light border-[2rem] border-digital-red-light/30"
        /> */}
        <motion.div
          variants={barAnimation}
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.3 }}
          className="hidden md:block w-2 h-[47rem] -mt-[15rem] absolute top-0 left-1/2 -ml-1 origin-center bg-black z-10 bg-gradient-to-b from-purple via-digital-red-light to-purple"
        />
        <motion.div
          variants={circleAnimation}
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center absolute top-0 left-1/2 rounded-full bg-clip-padding"
        />
        <div className="text-center z-20">
          <motion.span className="">{month}</motion.span>
          <motion.span className="">{day}</motion.span>
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
