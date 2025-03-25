import { Card } from '@/components/Card';
import { Grid } from '@/components/Grid';
import { Heading, Paragraph, Text } from '@/components/Typography';
import GradientText from '../Typography/GradientText';
import { AnimateInView } from '../Animate';

export const ExperienceCardsSection = () => (
  <section className="rs-mb-10">
    <div className="flex items-center flex-col rs-mb-7">
        <div className="max-w-prose">
        <AnimateInView animation="sharpen" duration={0.8}>
          <GradientText>
            <Heading>
              We build Stanford Sites. A free, campus-wide solution for your
              websites. Built on Drupal, we host over 2,000 sites.
            </Heading>
          </GradientText>
        </AnimateInView>
        <AnimateInView animation="slideUp" delay={0.25}>
          <Heading className="text-center text-purple">and...</Heading>
        </AnimateInView>
        </div>
    </div>
    <Grid sm={1} md={2} gap="default">
      <AnimateInView animation="slideUp" delay={0.5}>
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
      </AnimateInView>
      <AnimateInView animation="slideUp" delay={0.75}>
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
      </AnimateInView>
      <AnimateInView animation="slideUp" delay={1}>
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
      </AnimateInView>
      <AnimateInView animation="slideUp" delay={1.25}>
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
      </AnimateInView>
    </Grid>
  </section>
);
