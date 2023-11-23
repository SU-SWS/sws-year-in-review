import React, { AllHTMLAttributes, ReactNode } from 'react';
import { cnb, ClassValue } from 'cnbuilder';
import { logoColors, LogoColorType } from './Logo.styles';

type ContentProps = {
  className?: ClassValue;
  color?: LogoColorType;
  type?: 'short' | 'full' | 'stacked';
  isLink?: boolean;
};

type CNBAttributes = Omit<AllHTMLAttributes<any>, 'className'>;

export const Logo = ({
  className,
  color = 'cardinal-red',
  type,
  isLink,
  ...props
}: ContentProps & CNBAttributes) => {
  const logoColor = logoColors[color];
  let logoText: string | ReactNode;

  switch (type) {
    case 'full':
      logoText = 'Stanford University';
      break;

    case 'stacked':
      logoText = (
        <>
          Stanford
          <br />
          University
        </>
      );
      break;

    case 'short':
    default:
      logoText = 'Stanford';
      break;
  }

  // props.isLink
  // Render logo as link or simple div
  if (isLink) {
    return (
      <a className={cnb('logo', logoColor, className)} href="https://www.stanford.edu" {...props}>
        {logoText}
      </a>
    );
  }

  return (
    <div className={cnb('logo', logoColor, className)} {...props}>
      {logoText}
    </div>
  );
};