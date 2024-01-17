'use client';
import React, { HTMLAttributes, useRef } from 'react';
import {
  useScroll,
  useSpring,
  motion,
  MotionStyle,
  useTransform,
} from 'framer-motion';
import { cnb } from 'cnbuilder';
import { Grid, type GridProps } from '../Grid/Grid';
import { type GridNegativeSpacingType, type GridWidthType } from '../Grid/Grid.types';
import { marginBottoms, type MarginType } from '@/utilities/datasource';
import * as styles from '../Grid/Grid.styles';

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

type TimelineProps = HTMLAttributes<HTMLDivElement>;

export const Timeline = ({
  children,
  className,
  ...props
}: TimelineProps) => {

  return (
    <div
      className={cnb('relative w-full grid gap-y-500', className)}
    >
      {children}
      <div
        className="hidden md:block w-2 absolute top-0 left-1/2 -ml-1 h-full origin-top bg-purple"
      />
    </div>
  );
};
