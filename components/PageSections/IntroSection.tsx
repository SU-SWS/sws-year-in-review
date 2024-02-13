import { Card } from '@/components/Card';
import { Grid } from '@/components/Grid';
import { Heading, Paragraph, Text } from '@/components/Typography';

export const IntroSection = () => (
  <section className="rs-mt-8 rs-mb-10 cc">
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
  </section>
);
