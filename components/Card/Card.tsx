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
  icon,
  iconColor,
  paddingType,
  ...rest
}: CardProps) => {
  const Icon = icon ? styles.iconMap[icon] : '';

  return (
    <AsComponent
      {...rest}
      className={cnb(
        'bg-black rounded-[0.8rem]',
        paddingType ? styles.paddingType[paddingType] : '',
        className,
      )}
    >
      {Icon && (
        <Icon
          className={cnb(
            'rs-mb-2', 
            styles.iconBaseStyleDefault,
            iconColor ? styles.iconColor[iconColor] : '',
          )}
        />
      )}
      <div className="children:text-white">
        {children}
      </div>
    </AsComponent>
  );
};
