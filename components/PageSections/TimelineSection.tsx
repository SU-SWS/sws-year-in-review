import { Timeline, TimelineItem } from '@/components/Timeline';
import { Heading, Paragraph, Text } from '@/components/Typography';
import { FlexBox } from '@/components/FlexBox';
import { Grid } from '@/components/Grid';
import Image from 'next/image';

export const TimelineSection = () => (
  <section>
    <Heading as="h2" size={6} leading="normal" className="rs-mt-10 rs-mb-6">
      On this{' '}
      <Text
        as="span"
        bgColor="purple"
        color="black-true"
        className="px-10 rounded-[0.8rem]"
      >
        day
      </Text>{' '}
      in 2023...
    </Heading>
    <Timeline className="rs-py-10 rs-mb-10">
      <TimelineItem month="Jan" day="10">
        <div>
          <Text
            color="black-40"
            align="right"
            leading="display"
            className="mb-03em"
          >
            Launch
          </Text>
          <Heading as="h3" size={3} align="right">
            Admin Guide launches 🎉
          </Heading>
        </div>
        <Paragraph size={1} weight="bold" leading="display">
          Created a new content type for Stanford Sites — policy — enabling the
          Admin Guide to move onto the custom platform.
        </Paragraph>
      </TimelineItem>
      <TimelineItem month="Feb" day="01">
        <div />
        <FlexBox alignItems="start" className="gap-x-18">
          <Image
            unoptimized
            src="images/Andy-bell_white.svg"
            width={75}
            height={87}
            alt=""
            className="shrink-0 mt-10"
          />
          <div>
            <Text color="black-40" leading="display" className="mb-03em">
              SWS Team
            </Text>
            <Heading as="h3" size={1}>
              Andy Bell joins SWS as a Senior Web Project Manager!
            </Heading>
          </div>
        </FlexBox>
      </TimelineItem>
      <TimelineItem month="Mar" day="10">
        <div>
          <Text
            color="black-40"
            align="right"
            leading="display"
            className="mb-03em"
          >
            Launch
          </Text>
          <Heading as="h3" size={3} align="right">
            Techsource UX Research begins!
          </Heading>
        </div>
        <Grid sm={2} gap="default">
          <Paragraph size={1} weight="bold" noMargin leading="display">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Paragraph>
          <Paragraph variant="card" noMargin leading="snug">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Paragraph>
        </Grid>
      </TimelineItem>
      <TimelineItem month="Mar" day="07">
        <Grid sm={2} gap="default">
          <Paragraph size={1} weight="bold" noMargin leading="display">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Paragraph>
          <Paragraph variant="card" noMargin leading="snug">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Paragraph>
        </Grid>
        <div>
          <Text color="black-40" leading="display" className="mb-03em">
            Launch
          </Text>
          <Heading as="h3" size={3}>
            Computer Science launches 🎉
          </Heading>
        </div>
      </TimelineItem>
      <TimelineItem month="Mar" day="20">
        <FlexBox alignItems="start" className="gap-x-18">
          <div>
            <Text
              align="right"
              color="black-40"
              leading="display"
              className="mb-03em"
            >
              SWS Team
            </Text>
            <Heading align="right" as="h3" size={1}>
              Ali Krogman joins SWS as a Senior Web Project Manager!
            </Heading>
          </div>
          <Image
            unoptimized
            src="images/Ali-krogman_white.svg"
            width={75}
            height={87}
            alt=""
            className="shrink-0 mt-10"
          />
        </FlexBox>
        <div />
      </TimelineItem>
      <TimelineItem month="Mar" day="25">
        <Grid sm={2} gap="default">
          <Paragraph size={1} weight="bold" noMargin leading="display">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Paragraph>
          <Paragraph variant="card" noMargin leading="snug">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Paragraph>
        </Grid>
        <div>
          <Text color="black-40" leading="display" className="mb-03em">
            Launch
          </Text>
          <Heading as="h3" size={3}>
            Alumni Directory & other ADAPT launches launches 🎉
          </Heading>
        </div>
      </TimelineItem>
      <TimelineItem month="Mar" day="27">
        <div>
          <Text
            align="right"
            color="black-40"
            leading="display"
            className="mb-03em"
          >
            Accessibility boost
          </Text>
          <Heading align="right" as="h3" size={1}>
            Lorem ipsum dolar sit 🚪
          </Heading>
        </div>
        <div />
      </TimelineItem>
      <TimelineItem month="Apr" day="02">
        <Grid sm={2} gap="default">
          <Paragraph size={1} weight="bold" noMargin leading="display">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Paragraph>
          <Paragraph variant="card" noMargin leading="snug">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Paragraph>
        </Grid>
        <div>
          <Text color="black-40" leading="display" className="mb-03em">
            UX Research
          </Text>
          <Heading as="h3" size={3}>
            Insights gathered for Techsource 🔦
          </Heading>
        </div>
      </TimelineItem>
      <TimelineItem month="Apr" day="28">
        <Grid sm={2} gap="default">
          <Paragraph size={1} weight="bold" noMargin leading="display">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Paragraph>
          <Paragraph variant="card" noMargin leading="snug">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Paragraph>
        </Grid>
        <div>
          <Text color="black-40" leading="display" className="mb-03em">
            Product highlight
          </Text>
          <Heading as="h3" size={3}>
            Stanford sites lorem ipsum ⏰
          </Heading>
        </div>
      </TimelineItem>
      <TimelineItem month="Apr" day="30">
        <div>
          <Text
            align="right"
            color="black-40"
            leading="display"
            className="mb-03em"
          >
            Accessibility boost
          </Text>
          <Heading align="right" as="h3" size={1}>
            Lorem ipsum dolar sit 🚪
          </Heading>
        </div>
        <Paragraph variant="card" noMargin leading="snug">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,
        </Paragraph>
      </TimelineItem>
      <TimelineItem month="May" day="05">
        <Grid sm={2} gap="default">
          <Paragraph size={1} weight="bold" noMargin leading="display">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Paragraph>
          <Paragraph variant="card" noMargin leading="snug">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Paragraph>
        </Grid>
        <div>
          <Text color="black-40" leading="display" className="mb-03em">
            Launch
          </Text>
          <Heading as="h3" size={3}>
            Stanford University Libraries launches 🎉
          </Heading>
        </div>
      </TimelineItem>
    </Timeline>
  </section>
);
