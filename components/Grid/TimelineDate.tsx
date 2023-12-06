'use client';
import React, { useState, useRef } from 'react';
import {
 useScroll, useTransform, motion, MotionStyle, 
} from 'framer-motion';
import { Grid } from '.';

/**
 * This component should be used in combination with the Timeline component
 * and place between each React node children in an alternating grid pattern.
 *
 * @component
 *
 * @example
 * <Timeline startOnRight>
 *  <Paragraph>Item 1 - Lorem Ipsum</Paragraph>
 *  <TimelineDate>Item 2 - Lorem Ipsum</TimelineDate>
 *  <Paragraph>Item 3 - Lorem Ipsum</Paragraph>
 * </Timeline>
 */

type TimelineDateProps = {
  month: string;
  date: string;
};

export const TimelineDate = ({ month, date, ...props }: TimelineDateProps) => {
  const timelineDateRef = useRef(null);

  const animation = {
    initial: 0,
    fadeInStart: 0.5,
    fadeInEnd: 1,
  };
  const { scrollYProgress } = useScroll({
    target: timelineDateRef,
  });

  // Map the scroll position to color values
  const scale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [0.2, 1, 1, 0.15],
  );
  const color = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 0.7, 1],
    ['transparent', '#FF0000', '#FF0000', 'transparent', 'transparent'],
  );
  const border = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['#B870BD', '#F83535', '#B870BD'],
  );

  const monthFont = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['18', '26', '18'],
  );
  const dateFont = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['18', '36', '18'],
  );
  const edge = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['-6rem', 'unset', '-6em']);
  const position = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 0.7, 1],
    ['absolute', 'relative', 'relative','absolute', 'absolute'],
  );

  return (
    <div
      className='hidden md:flex justify-center items-center w-full flex-col relative'
      ref={timelineDateRef}
    >
      <motion.div
        className='h-100 w-100 rounded-full border-8 flex justify-center items-center flex-col'
        style={{
          scale,
          backgroundColor: color,
          borderColor: border,
        }}
        initial={{ scale: 0.2 }}
      >
        <motion.p
          className='card-paragraph mb-0'
          style={{
            fontSize: monthFont,
            position,
            left: edge,
          }}
        >
          {month}
        </motion.p>
        <motion.p
          className='card-paragraph mb-0'
          style={{
            fontSize: dateFont,
            position,
            right: edge,
          }}
        >
          {date}
        </motion.p>
      </motion.div>
    </div>
  );
};
