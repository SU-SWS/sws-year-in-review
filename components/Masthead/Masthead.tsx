import React from 'react';
import { LockUp } from '../LockUp';
import { FlexBox } from '../FlexBox';
import { Link } from '../Link';
import * as styles from './Masthead.styles';

export const Masthead = () => {

  return (
    <div>
      <FlexBox
        as="header"
        alignItems="center"
        justifyContent="between"
        className={styles.root}
      >
        <Link href="/" className={styles.logoLink}>
          <div className={styles.lockUpWrapper}>
            <LockUp text="Web Services" />
          </div>
        </Link>
      </FlexBox>
    </div>
  );
};