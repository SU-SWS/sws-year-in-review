import React from 'react';
import Image, { ImageProps } from 'next/image';
import * as styles from './AspectImage.styles';
import * as types from './AspectImage.types';

export interface AspectImageProps extends ImageProps {
  src: string;
  altText?: string;
  aspectRatio?: types.ImageAspectRatioType;
}

/**
 * Image component.
 */
export function AspectImage({
 altText, aspectRatio = '3x4', src, ...rest 
}: AspectImageProps) {
  return (
    <Image
      {...rest}
      className={aspectRatio ? styles.imageAspectRatios[aspectRatio] : ''}
      src={src}
      alt={altText ? altText : ''}
    />
  );
}
