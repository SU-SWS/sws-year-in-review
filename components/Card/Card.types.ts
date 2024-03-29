import * as styles from './Card.styles';

export type CardType = 'div' | 'article';

export type IconType = keyof typeof styles.iconMap;

export type IconColor = keyof typeof styles.iconColor;

export type PaddingType = keyof typeof styles.paddingType;