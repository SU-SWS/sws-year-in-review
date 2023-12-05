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
  const rowItems = [];
  for (let i = 0; i < childrenArray.length; i += 2) {
    if (i + 1 < childrenArray.length) {
      rowItems.push([childrenArray[i], childrenArray[i + 1]]);
    } else {
      rowItems.push([childrenArray[i]]);
    }
  }
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['-600px', '60%'],
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
      <Grid as={as} md={3} py={py} pt={pt} pb={pb} {...props}>
        {rowItems?.map((item, index) => (
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
              {item[0]}
            </motion.div>
            <div>
              <motion.figure
                className={styles.circleWrapper}
                animate={{
                  height: 100,
                  width: 100,
                }}
              >
                <svg
                  id='timeline-circle'
                  width='100%'
                  height='100%'
                  viewBox='0 0 100 100'
                >
                  <circle
                    cx='50'
                    cy='50'
                    r='30'
                    pathLength='1'
                    className={styles.circle}
                  />
                </svg>
              </motion.figure>
            </div>
            <motion.div
              className={cnb(
                marginBottoms[spacing as MarginType] ||
                  styles.negativeSpacing[spacing as GridNegativeSpacingType],
                styles.cellWithContent,
              )}
              style={gridCellStyle}
            >
              {item[1]}
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
