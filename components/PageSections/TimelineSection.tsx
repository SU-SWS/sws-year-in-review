import { Timeline, TimelineItem } from '@/components/Timeline';
import { Heading, Paragraph, Text } from '@/components/Typography';

export const TimelineSection = () => (
  <section>
    <Heading
      as="h2"
      size={6}
      leading="normal"
      className="rs-mt-10 rs-mb-6"
    >
      On this {' '}
      <Text as="span" bgColor="purple" color="black-true" className="px-10 rounded-[0.8rem]">
        day
      </Text>
      {' '} in 2023.
    </Heading>
    <Timeline className="rs-py-10 rs-mb-10">
      <TimelineItem month="Jan" day="10">
        <div>
          <Text color="black-40" align="right" leading="display" className="mb-03em">Launch</Text>
          <Heading as="h3" size={3} align="right">Admin Guide launches 🎉</Heading>
        </div>
        <Paragraph size={1} weight="bold">
          Created a new content type for Stanford Sites — policy —
          enabling the Admin Guide to move onto the custom platform.
        </Paragraph>
      </TimelineItem>
      <TimelineItem month="Feb" day="01">
        <div />
        <div>
          <Text color="black-40" leading="display" className="mb-03em">SWS Team</Text>
          <Heading as="h3" size={1}>Andy Bell joins SWS as a Senior Web Project Manager!</Heading>
        </div>
      </TimelineItem>
      <TimelineItem month="Jan" day="10">
        <div>
          <Text color="black-40" align="right" leading="display" className="mb-03em">Launch</Text>
          <Heading as="h3" size={3} align="right">Admin Guide launches 🎉</Heading>
        </div>
        <Paragraph size={1} weight="bold">
          Created a new content type for Stanford Sites — policy —
          enabling the Admin Guide to move onto the custom platform.
        </Paragraph>
      </TimelineItem>
      <TimelineItem month="Jan" day="10">
        <div>
          <Text color="black-40" align="right" leading="display" className="mb-03em">Launch</Text>
          <Heading as="h3" size={3} align="right">Admin Guide launches 🎉</Heading>
        </div>
        <Paragraph size={1} weight="bold">
          Created a new content type for Stanford Sites — policy —
          enabling the Admin Guide to move onto the custom platform.
        </Paragraph>
      </TimelineItem>
    </Timeline>
  </section>
);
