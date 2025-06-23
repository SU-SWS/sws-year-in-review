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
        <div>
          <Text color="black-40" leading="display" className="mb-03em">
            SWS Team
          </Text>
          <Heading as="h3" size={1}>
            New Member joins SWS as a Senior Web Project Manager!
          </Heading>
        </div>
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
            New Member joins SWS as a Senior Web Project Manager!
          </Heading>
        </div>
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
      <TimelineItem month="May" day="09">
        <div>
          <Text color="black-40" leading="display" className="mb-03em">
            Product highlight
          </Text>
          <Heading as="h3" size={3}>
            Stanford sites lorem ipsum ⏰
          </Heading>
        </div>
        <Paragraph variant="card" noMargin leading="snug">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Paragraph>
      </TimelineItem>
      <TimelineItem month="May" day="23">
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
            UX research
          </Text>
          <Heading as="h3" size={3}>
            Innovation Program 🔦
          </Heading>
        </div>
      </TimelineItem>

      <TimelineItem month="Jun" day="02">
        <div>
          <Text color="black-40" leading="display" className="mb-03em">
            Launch
          </Text>
          <Heading as="h3" size={3}>
            ChEM-H launches 🎉
          </Heading>
        </div>
        <Grid sm={2} gap="default">
          <Paragraph variant="card" noMargin leading="snug">
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
      <TimelineItem month="Nov" day="22">
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
            Stanford Sites goes live on Drupal 10 🎉
          </Heading>
        </div>
      </TimelineItem>
      <TimelineItem month="Dec" day="11">
        <div>
          <Text color="black-40" leading="display" className="mb-03em">
            UX Research
          </Text>
          <Heading as="h3" size={3}>
            c-ShARP begins user interviews 🔦
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
    </Timeline>
  </section>
);
