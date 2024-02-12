import { Card } from '@/components/Card';
import { Grid } from '@/components/Grid';
import { Heading, Paragraph, Text } from '@/components/Typography';
import GradientText from '../Typography/GradientText';

export const ExperienceCardsSection = () => (
  <section className="rs-mb-10">
    <div className="flex items-center flex-col rs-mb-7">
      <div className="max-w-prose">
        <GradientText>
          <Heading>
            We build Stanford Sites. A free, campus-wide solution for your
            websites. Built on Drupal, we host over 2,000 sites.
          </Heading>
        </GradientText>
        <Heading className="text-center text-purple">and...</Heading>
      </div>
    </div>
    <Grid sm={1} md={2} gap="default">
      <Card paddingType="large">
        <Heading as="h3" size={4} className="mb-1">
          We partner with teams across UIT to build{' '}
          <Text
            as="span"
            bgColor="illuminating"
            className="px-10 rounded-[0.8rem] text-black-true"
          >
            web applications.
          </Text>
        </Heading>
      </Card>
      <Card paddingType="large">
        <Heading as="h3" size={4} className="mb-1">
          We learn about our ideas and products through{' '}
          <Text
            as="span"
            bgColor="teal"
            className="px-10 rounded-[0.8rem] text-black-true"
          >
            user research.
          </Text>
        </Heading>
      </Card>
      <Card paddingType="large">
        <Heading as="h3" size={4} className="mb-1">
          It’s not only Drupal — we can work on your{' '}
          <Text
            as="span"
            bgColor="blue"
            className="px-10 rounded-[0.8rem] text-black-true"
          >
            platform of choice.
          </Text>
        </Heading>
      </Card>
      <Card paddingType="large">
        <Heading as="h3" size={4} className="mb-1">
          We create{' '}
          <Text
            as="span"
            bgColor="purple"
            className="px-10 rounded-[0.8rem] text-black-true"
          >
            custom design,
          </Text>{' '}
          tailored to your Stanford brand.
        </Heading>
      </Card>
    </Grid>
  </section>
);
