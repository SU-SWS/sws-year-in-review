import { Card } from '@/components/Card';
import { SlideImage } from '@/components/Slider/SlideImage';
import Slideshow from '@/components/Slider/Slideshow';
import { Grid } from '@/components/Grid';
import { Heading, Paragraph, Text } from '@/components/Typography';
import {
  IntroSection,
  ServiceCardsSection,
  TimelineSection,
} from '@/components/PageSections';
import { ExperienceCardsSection } from '@/components/PageSections/ExperienceCardsSection';
import ThankPartnersSection from '@/components/PageSections/ThankPartnersSection';
import GoTeam from '@/components/PageSections/GoTeam';

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
        </div>
      </div>
      <div>
        <Slideshow>
          <SlideImage
            src="/images/ChemH.png"
            alt="ChemH Website"
            caption="SWS launched a custom subtheme developed for Sarafan ChEM-H on Stanford Sites."
          />
          <SlideImage src="/images/DIR.png" alt="DIR Website" />
          <SlideImage
            src="/images/SUL.png"
            alt="SUL Website"
            caption="Stanford University Libraries new site features a decoupled front-end and a Drupal back-end."
          />
          <SlideImage src="/images/WGH.png" alt="WGH Website" />
          <SlideImage src="/images/Techsource.png" alt="Tech Source Website" />
        </Slideshow>
      </div>
      <div className="cc">
        <ServiceCardsSection />
        <ExperienceCardsSection />
        <TimelineSection />
        <ThankPartnersSection />
        <GoTeam />
      </div>
    </main>
  );
}
