import { Heading, Paragraph, Text } from '@/components/Typography';
import { ArrowDownIcon } from '@heroicons/react/16/solid';

export const IntroSection = () => (
  <section className="rs-mt-8 rs-mb-10 h-full cc">
    <div className="relative">
    <div className="max-w-[120rem]">
      <Heading as="h1" size={8} leading="tight" className="rs-mb-2">
        2023 Year in review.
      </Heading>
      <Paragraph weight="semibold" size={4} leading="display" color="black-50">
        We took on{' '}
        <Text as="span" color="white">
          new challenges
        </Text>{' '}
        that <Text as="span" color="white"></Text>expanded our{' '}
        <Text as="span" color="white">
          staff
        </Text>{' '}
        and{' '}
        <Text as="span" color="white">
          services
        </Text>{' '}
        in new and exciting ways. We are happy to reflect and{' '}
        <Text as="span" color="white">
          share some of projects and people
        </Text>{' '}
        that made 2023 a special year for{' '}
        <Text as="span" color="white">
          Stanford Web Services
        </Text>
        .
      </Paragraph>
    </div>
    {/* <div className="flex w-full justify-start md:justify-end">
      <a href="#main-content" className="group text-24 text-white no-underline hocus:underline hocus:text-digital-red-xlight">
        Scroll to learn more
        <ArrowDownIcon width={30} className="transition-all ease-in-out duration-1000 ml-03em group-hocus:translate-y-02em text-white group-hocus:text-digital-red-xlight inline-block" />
      </a>
    </div> */}
    </div>
  </section>
);
