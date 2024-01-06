import { LogoLockup } from '@/components/Logo';
import * as styles from './Masthead.styles';
import { Container } from '@/components/Container';

export const Masthead = () => {

  return (
    <Container pt={5} pb={2} className="bg-black-true w-full">
      <LogoLockup text="Web Services" color="white" className="text-[3.4rem]" />
    </Container>
  );
};
