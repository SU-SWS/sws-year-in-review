import { cnb } from 'cnbuilder';
import React, { ReactNode } from 'react';

export interface GradientTextProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  children: ReactNode;
}

export default function GradientText({ className, children }: GradientTextProps) {
  return (
    <div className={cnb('bg-gradient-to-b from-black-50 to-purple inline-block text-transparent bg-clip-text', className)}>
      {children}
    </div>
  );
}
