import { ReactNode } from 'react';
import { cnb } from 'cnbuilder';
import * as types from './Card.types';
import * as styles from './Card.styles';

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  as?: types.CardType;
  className?: string;
  children?: ReactNode;
  icon?: types.IconType;
  iconColor?: types.IconColor;
  paddingType?: types.PaddingType;
}

export const Card = ({
  as: AsComponent = 'div',
  className,
  children,
  icon = 'user',
  iconColor,
  paddingType,
  ...rest
}: CardProps) => {
  const Icon = styles.iconMap[icon];

  return (
    <AsComponent
      {...rest}
      className={cnb(
        'bg-black text-white rounded',
        paddingType ? styles.paddingType[paddingType] : '',
        className,
      )}
    >
      {icon && (
        <Icon
          className={cnb(
            styles.iconBaseStyleDefault,
            iconColor ? styles.iconColor[iconColor] : '',
          )}
        />
      )}
      {children}
    </AsComponent>
  );
};
