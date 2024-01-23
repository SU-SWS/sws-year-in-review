import React from 'react';
import { Paragraph } from '../Typography';

export type SlideQuoteProps = {
  quote: string;
  author: string;
  subtitle: string;
  className?: string;
}

export function SlideQuote({
  quote,
  author,
  subtitle,
  className,
  ...rest
}: SlideQuoteProps) {
  return (
    <div {...rest}>
      <Paragraph>&ldquo;</Paragraph>
      <Paragraph>{quote}</Paragraph>
      <Paragraph>{author}</Paragraph>
      {subtitle && <Paragraph>{subtitle}</Paragraph>}
    </div>
  );
}
