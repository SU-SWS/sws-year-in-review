import { Card } from '@/components/Card';
import { Grid } from '@/components/Grid';
import { Heading, Paragraph, Text } from '@/components/Typography';

export const ServiceCardsSection = () => (
  <section className="rs-mb-10">
    <Heading as="h2" size={6} leading="normal" className="rs-mb-5 rs-mt-8">
      Service in the{' '}
      <Text as="span" color="black-true" bgColor="teal" className="px-10 rounded-[0.8rem]">
        numbers.
      </Text>
    </Heading>
    <Grid xs={1} sm={2} lg={4} gap="default">
      <Card icon="user" paddingType="small" iconColor="blue">
        <Heading as="h3">66/34</Heading>
        <Paragraph variant="big" color="black-true" weight="semibold">
          New clients/ returning clients
        </Paragraph>
      </Card>
      <Card icon="badge" paddingType="small" iconColor="purple">
        <Heading as="h3">1,456</Heading>
        <Paragraph variant="big" color="black-true" weight="semibold">
          Resolved SNOW tickets
        </Paragraph>
      </Card>
      <Card icon="clock" paddingType="small" iconColor="illuminating">
        <Heading as="h3">467</Heading>
        <Paragraph variant="big" color="black-true" weight="semibold">
          Training & office hours
        </Paragraph>
      </Card>
      <Card icon="bookmark" paddingType="small" iconColor="blue">
        <Heading as="h3">97.0</Heading>
        <Paragraph variant="big" color="black-true" weight="semibold">
          Stanford Sites accessibility score (out of the box)
        </Paragraph>
      </Card>
    </Grid>
  </section>
);
