import React from 'react';
import { Paragraph } from '../Typography';
import * as styles from './TeamEmoji.styles';
import * as types from './TeamEmoji.types';

interface TeamEmojiProps {
  color: types.SvgColor;
  svgName: types.TeamMap;
  text: string;
  className?: string;
}

export default function TeamEmoji({
  color,
  svgName,
  text,
  className,
}: TeamEmojiProps) {
  const Svg = svgName ? styles.teamMap[svgName] : '';

  return (
    <div className={className}>
      {Svg && <Svg className={color && styles.svgColor[color]} />}
      <Paragraph>{text}</Paragraph>
    </div>
  );
}
