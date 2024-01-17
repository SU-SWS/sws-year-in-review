import React, { HTMLAttributes } from 'react';
import { cnb } from 'cnbuilder';

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
