import {
  BookmarkSquareIcon, CheckBadgeIcon, ClockIcon, UserCircleIcon, 
} from '@heroicons/react/24/solid';

export const iconMap = {
  user: UserCircleIcon,
  badge: CheckBadgeIcon,
  clock: ClockIcon,
  bookmark: BookmarkSquareIcon,
};
export type IconType = keyof typeof iconMap;

/**
 * Normalized base size and position of each icon (finetuned manually) for use in eg, buttons
 * Only add to this map if different from default class w-1em
 * If you wish to use the HeroIcon without any base styles, set the noBaseStyle boolean prop to true
 */

// This basically means that the keys from iconBaseStyle are from the keys of iconMap
type IconBaseStyleType = Partial<{
  [Key in IconType]: string;
}>;

export const iconBaseStyleDefault = 'w-1em';
export const iconBaseStyle: IconBaseStyleType = {
  user: 'w-60',
  badge: 'w-60',
  clock: 'w-60',
  bookmark: 'w-60',
};

export const iconColor = {
  default: '', // Interit from the base
  teal: 'text-teal',
  purple: 'text-purple',
  blue: 'text-sky-blue-bright',
  illuminating: 'text-illuminating',
};

export const paddingType = {
  default: '',
  small: 'rs-p-3',
  large: 'rs-p-6',
};
