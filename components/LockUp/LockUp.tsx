import React, { AllHTMLAttributes } from 'react';
import { cnb, ClassValue } from 'cnbuilder';
import { Logo } from '../Logo';
import { Link } from '../Link';
import { FlexBox } from '../FlexBox/FlexBox';
import * as styles from './LockUp.styles';

/**
 * Stanford Department Branding Component.
 *
 */
export type LockUpProps = {
  className?: ClassValue;
  color?: 'default' | 'white';
  text: string;
  href?: string;
}

type CNBAttributes = Omit<AllHTMLAttributes<any>, 'className'>;

export const LockUp = ({
  className,
  color = 'default',
  text,
  href,
  ...rest
}: LockUpProps & CNBAttributes) => {
  const levers: { [key: string]: string } = {};
  levers.textColor = styles.textColor[color];
  levers.bar = styles.barColor[color];

  // Partials
  const LockUpContent = (
    <FlexBox alignItems="center">
      <Logo
        color={color === 'white' ? 'white' : 'cardinal-red'}
        isLink={false}
        className={cnb(styles.logo)}
      />
      <div className={cnb(styles.bar, levers.bar)} aria-hidden />
      <div className={cnb(styles.text, levers.textColor)}>
        {text}
      </div>
    </FlexBox>
  );

  if (href) {
    return (
      <Link
        className={cnb(styles.root, className)}
        href={href}
        {...rest}
      >
        {LockUpContent}
      </Link>
    );
  }

  return (
    <div className={cnb(styles.root, className)} {...rest}>
      {LockUpContent}
    </div>
  );
};