'use client';
import React, { useRef, HTMLAttributes } from 'react';
import { cnb } from 'cnbuilder';

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
      {...props}
      className={cnb('relative w-full grid gap-y-450', className)}
    >
      {children}
      <div className="hidden md:block w-2 absolute top-0 left-1/2 -ml-1 h-full origin-top bg-purple" />
    </div>
  );
};
