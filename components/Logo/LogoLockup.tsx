import React from 'react';
import { cnb } from 'cnbuilder';
import { StanfordLogo } from './StanfordLogo';
import { FlexBox } from '@/components/FlexBox';
import * as styles from './LogoLockup.styles';

/**
 * Stanford Department Branding Component.
 */
type LogoLockupProps = {
  text: string;
  isLink?: boolean;
  color?: 'default' | 'white';
  className?: string;
}

export const LogoLockup = ({
  text,
  isLink,
  color = 'default',
  className,
  ...rest
}: LogoLockupProps) => {
  const levers: { [key: string]: string } = {};
  levers.textColor = styles.textColor[color];
  levers.bar = styles.barColor[color];

  return (
    <div className={cnb(styles.root, className)} {...rest}>
      <FlexBox className={styles.contentWrapper}>
        <StanfordLogo
          color={color === 'white' ? 'white' : 'cardinal-red'}
          isLink={false}
          className={cnb(styles.logo)}
        />
        <div className={cnb(styles.bar, levers.bar)} aria-hidden />
        <div className={cnb(styles.text, levers.textColor)}>
          {text}
        </div>
      </FlexBox>
    </div>
  );
};
