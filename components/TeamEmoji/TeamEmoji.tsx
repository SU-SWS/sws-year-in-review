import React from 'react';
import { Paragraph } from '../Typography';
import * as styles from './TeamEmoji.styles';
import * as types from './TeamEmoji.types';

interface TeamEmojiProps {
  color: types.SvgColor;
  svgName: string;
  text: string;
  className?: string;
}

export default function TeamEmoji({
  color,
  svgName,
  text,
  className,
}: TeamEmojiProps) {
  const Svg = require(`../public/images/${svgName}.svg`).default;

  return (
    <div className={className}>
      <Svg className={color && styles.svgColor[color]} />
      <Paragraph>{text}</Paragraph>
    </div>
  );
}
