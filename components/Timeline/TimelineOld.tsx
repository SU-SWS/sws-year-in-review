'use client';
import React, { HTMLAttributes, useRef } from 'react';
import {
  useScroll,
  useSpring,
  motion,
  MotionStyle,
  useTransform,
} from 'framer-motion';
import { cnb } from 'cnbuilder';
import { Grid, type GridProps } from '../Grid/Grid';
import { type GridNegativeSpacingType, type GridWidthType } from '../Grid/Grid.types';
import { marginBottoms, type MarginType } from '@/utilities/datasource';
import * as styles from '../Grid/Grid.styles';

/**
 * This component place each React node in the children in an alternating grid pattern.
 *
 * @component
 *
 * @example
 * <TimelineOld startOnRight>
 *  <Paragraph>Item 1 - Lorem Ipsum</Paragraph>
 *  <Paragraph>Item 2 - Lorem Ipsum</Paragraph>
 * </TimelineOld>
 */

type TimelineOldProps = HTMLAttributes<HTMLElement> &
  Pick<GridProps, 'as' | 'gap' | 'pt' | 'pb' | 'py'> & {
    startOnRight?: boolean;
    addCenterLine?: boolean;
    width?: GridWidthType;
    spacing?: MarginType | GridNegativeSpacingType;
    // inline CSS Style for grid cell
    gridCellStyle?: MotionStyle;
    month: string;
    date: string;
  };

export const TimelineOld = ({
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
  month,
  date,
  ...props
}: TimelineOldProps) => {
  // turn children into array
  const childrenArray = React.Children.toArray(children);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['-500px', '60%'],
  });


  // Map the scroll position to color values
  const scale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [0.2, 1, 1, 0.15],
  );
  const color = useTransform(
    scrollYProgress,
    [0, 0.4, 0.5, 0.6, 0.7, 1],
    [
      'transparent',
      '#FF0000',
      '#FF0000',
      '#FF0000',
      'transparent',
      'transparent',
    ],
  );
  const border = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['#B870BD', '#F83535', '#B870BD'],
  );

  const monthFont = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['18', '26', '18'],
  );
  const dateFont = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['18', '36', '18'],
  );
  const edge = useTransform(scrollYProgress, [0, 0.5, 1], ['6em', '0', '6em']);
  const position = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 0.7, 1],
    ['absolute', 'relative', 'relative', 'absolute', 'absolute'],
  );

  return (
    <div
      className={cnb(styles.alternatingGridWrapper, styles.gridWidths[width])}
      ref={containerRef}
    >
      <Grid
        as={as}
        md={2}
        py={py}
        pt={pt}
        pb={pb}
        {...props}
        gap='split'
        justifyContent='between'
        alignItems='center'
        className='z-10'
      >
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
        <div className='block'>
          <div className='z-10 absolute top-1/2 left-1/2 -ml-1'>
            <motion.div
              className='h-100 w-100 rounded-full border-8 flex justify-center items-center flex-col'
              style={{
                scale,
                backgroundColor: color,
                borderColor: border,
              }}
              initial={{ scale: 0.2 }}
            >
              <motion.p
                className='card-paragraph mb-0'
                style={{
                  fontSize: monthFont,
                  position,
                  left: edge,
                }}
              >
                {month}
              </motion.p>
              <motion.p
                className='card-paragraph mb-0'
                style={{
                  fontSize: dateFont,
                  position,
                  right: edge,
                }}
              >
                {date}
              </motion.p>
            </motion.div>
          </div>
          <div className='z-0'>
            <div className={styles.centerlineBg} />
            <motion.div className={styles.centerline} style={{ pathLength: scrollYProgress }} />
          </div>
        </div>
      )}
    </div>
  );
};
