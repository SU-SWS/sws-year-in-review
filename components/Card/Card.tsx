import { ReactNode } from 'react';
import { cnb } from 'cnbuilder';
import * as types from './Card.types';
import * as styles from './Card.styles';

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  as?: types.CardType;
  className?: string;
  children?: ReactNode;
  icon: styles.IconType;
  // Title for the SVG for accessibility
  title?: string;
  noBaseStyle?: boolean;
  iconColor?: types.IconColor;
  paddingType?: types.PaddingType;
}

export const Card = ({
  as: AsComponent = 'div',
  className,
  children,
  icon,
  title,
  iconColor,
  noBaseStyle,
  paddingType,
  ...rest
}: CardProps) => {
  const Icon = styles.iconMap[icon];

  // Set default base style so icon has reasonable size if used out of the box
  // noBaseStyle boolean allows for user to not attach any base styles if needed
  const baseStyle = noBaseStyle
    ? ''
    : styles.iconBaseStyle[icon] || styles.iconBaseStyleDefault;
  const heroIconStyle = cnb('transition', baseStyle);

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
          title={title}
          // If a title for the SVG is provided, unhide the SVG from screen readers
          className={cnb(
            heroIconStyle,
            iconColor ? styles.iconColor[iconColor] : '',
          )}
          aria-hidden={!title}
        />
      )}
      {children}
    </AsComponent>
  );
};
