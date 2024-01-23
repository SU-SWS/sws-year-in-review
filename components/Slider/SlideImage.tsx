import React from 'react';
import Image, { ImageProps } from 'next/image';
import { cnb } from 'cnbuilder';
import { Paragraph } from '../Typography';

export interface SlideImageProps extends ImageProps {
  src: string;
  altText?: string;
  caption?: string;
  className?: string;
}

export function SlideImage({
  altText,
  src,
  caption,
  className,
  ...rest
}: SlideImageProps) {
  return (
<div>
    <img
    {...rest}
    src={src}
    alt={altText ? altText : ''}
    className={cnb(
      'rounded w-full h-500',
      className,
    )}
  />
      {caption && <Paragraph>{caption}</Paragraph>}
</div>
  );
}
