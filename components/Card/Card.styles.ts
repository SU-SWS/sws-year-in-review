import {
  BookmarkSquareIcon, CheckBadgeIcon, ClockIcon, UserCircleIcon, 
} from '@heroicons/react/24/solid';

export const iconMap = {
  user: UserCircleIcon,
  badge: CheckBadgeIcon,
  clock: ClockIcon,
  bookmark: BookmarkSquareIcon,
};

export const iconBaseStyleDefault = 'w-60';

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
