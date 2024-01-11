import { ReactNode } from 'react';
import { cnb } from 'cnbuilder';
import * as types from './Card.types';
import { HeroIcon } from '../HeroIcon';
import * as styles from '../HeroIcon/HeroIcon.styles';

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  as?: types.CardType;
  className?: string;
  children?: ReactNode;
  iconType?: styles.IconType;
  iconColor?: types.IconColor;
  padding?: types.PaddingType;
}

export const Card = ({
  as: AsComponent = 'div',
  className,
  children,
  iconType,
  iconColor,
  ...rest
}: CardProps) => (
  <AsComponent {...rest} className={cnb('bg-black text-white rounded', className)}>
    {iconType && (
      <HeroIcon
        icon={iconType}
        className={iconColor ? styles.iconColor[iconColor] : ''}
      />
    )}
    {children}
  </AsComponent>
);
