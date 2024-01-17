import { LogoLockup } from '@/components/Logo';
import * as styles from './Masthead.styles';
import { Container } from '@/components/Container';

export const Masthead = () => {

  return (
    <Container as="header" pt={5} pb={2} className={styles.root}>
      <LogoLockup text="Web Services" color="white" className={styles.lockup} />
    </Container>
  );
};
