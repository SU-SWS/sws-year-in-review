import { LogoLockup } from '@/components/Logo';
import * as styles from './Masthead.styles';

export const Masthead = () => {

  return (
    <div className="cc bg-black rs-py-4">
      <LogoLockup text="Web Services" color="white" className="text-[3.4rem]" />
    </div>
  );
};
