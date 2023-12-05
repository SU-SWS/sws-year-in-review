'use client';
import React, { HTMLAttributes, useRef } from 'react';
import {
 useScroll, useSpring, motion, MotionStyle, 
} from 'framer-motion';
import { cnb } from 'cnbuilder';
import { Grid, type GridProps } from './Grid';
import { type GridNegativeSpacingType, type GridWidthType } from './Grid.types';
import { marginBottoms, type MarginType } from '@/utilities/datasource';
import * as styles from './Grid.styles';

/**
 * This component place each React node in the children in an alternating grid pattern.
 *
 * @component
 *
 * @example
 * <Timeline startOnRight>
 *  <Paragraph>Item 1 - Lorem Ipsum</Paragraph>
 *  <Paragraph>Item 2 - Lorem Ipsum</Paragraph>
 *  <Paragraph>Item 3 - Lorem Ipsum</Paragraph>
 * </Timeline>
 */

type TimelineProps = HTMLAttributes<HTMLElement> &
  Pick<GridProps, 'as' | 'gap' | 'pt' | 'pb' | 'py'> & {
    startOnRight?: boolean;
    addCenterLine?: boolean;
    width?: GridWidthType;
    spacing?: MarginType | GridNegativeSpacingType;
    // inline CSS Style for grid cell
    gridCellStyle?: MotionStyle;
  };

export const Timeline = ({
  as,
  startOnRight,
  addCenterLine,
  width = 'inset',
  spacing,
  pt,
  pb,
  py,
  children,
  gridCellStyle,
  ...props
}: TimelineProps) => {
  // turn children into array
  const childrenArray = React.Children.toArray(children);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['-500px', '60%'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      className={cnb(styles.alternatingGridWrapper, styles.gridWidths[width])}
      ref={containerRef}
    >
      <Grid as={as} md={3} py={py} pt={pt} pb={pb} {...props} alignItems='center'>
        {childrenArray?.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <React.Fragment key={index}>
            <motion.div
              className={cnb(
                marginBottoms[spacing as MarginType] ||
                  styles.negativeSpacing[spacing as GridNegativeSpacingType],
                styles.cellWithContent,
              )}
              style={gridCellStyle}
            >
              {item}
            </motion.div>
          </React.Fragment>
        ))}
      </Grid>
      {addCenterLine && (
        <>
          <div className={styles.centerlineBg} />
          <motion.div className={styles.centerline} style={{ scaleY }} />
        </>
      )}
    </div>
  );
};
