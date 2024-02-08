import { Card } from '@/components/Card';
import { Grid } from '@/components/Grid';
import { Heading, Paragraph, Text } from '@/components/Typography';
import { IntroSection, ServiceCardsSection, TimelineSection } from '@/components/PageSections';
import { ExperienceCardsSection } from '@/components/PageSections/ExperienceCardsSection';

export default function Home() {
  return (
    <main className="bg-black-true text-white">
      <IntroSection />
      <div className="cc">
        <div className="max-w-prose">
          <Heading
            as="h2"
            size={6}
            leading="normal"
            className="rs-mb-2 rs-mt-8 "
          >
            Some of our{' '}
            <Text
              as="span"
              color="black-true"
              bgColor="purple"
              className="px-10 rounded-[0.8rem]"
            >
              custom
            </Text>{' '}
            highlights.
          </Heading>
          <Paragraph>
            Building websites that fit the custom needs of our clients across
            Stanford, employing Storyblok, Lorem Ipsum, and our very own,
            Stanford Sites.
          </Paragraph>
          <div className="h-400">
            <Paragraph>Cards coming soon...</Paragraph>
          </div>
        </div>
        <ServiceCardsSection />
        <ExperienceCardsSection />
        <TimelineSection />
      </div>
    </main>
  );
}
