import { Card } from '@/components/Card';
import { Grid, Timeline } from '@/components/Grid';
import { Heading, Paragraph, Text } from '@/components/Typography';

export default function Home() {
  return (
    <main className="bg-black-true text-white">
      <div className="cc">
        <div className="max-w-[120rem] h-fit">
          <Heading as="h1" size={8} leading="tight" className="rs-mb-2 rs-mt-8">
            2023 Year in review.
          </Heading>
          <Paragraph
            weight="semibold"
            size={4}
            leading="display"
            color="black-50"
          >
            Consectetur adipiscing elit, sed do eiusmod tempor dolar sit amet,
            consectetur adipiscing elit, sed du eiusmod tempor.
          </Paragraph>
        </div>
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
              className="px-10 rounded"
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
        <div className="">
          <Heading
            as="h2"
            size={6}
            leading="normal"
            className="rs-mb-2 rs-mt-8"
          >
            Service in the{' '}
            <Text as="span" bgColor="teal" className="px-10 rounded">
              numbers.
            </Text>
          </Heading>
          <Grid md={4} gap="default">
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
        </div>
        <div>
          {/* TODO: GRADIENT HEADING */}
          <Heading>
            We build Stanford Sites. A free, campus-wide solution for your
            websites. Built on Drupal, we host over 2,000 sites.
          </Heading>
          <Heading>and...</Heading>
        </div>
        <Grid sm={1} md={2} gap="default">
          <Card paddingType="large">
            <Heading as="h3" size={4} className="mb-1">
              We partner with teams across UIT to build{' '}
              <Text
                as="span"
                bgColor="illuminating"
                className="px-10 rounded text-black-true"
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
                className="px-10 rounded text-black-true"
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
                className="px-10 rounded text-black-true"
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
                className="px-10 rounded text-black-true"
              >
                custom design,
              </Text>{' '}
              tailored to your Stanford brand.
            </Heading>
          </Card>
        </Grid>
        <Timeline month="Aug" date="08" addCenterLine>
          <div>
            <Paragraph>Lorem ipsum sit</Paragraph>
            <Heading>Consectetur adipscing elit, sed</Heading>
          </div>
          <div>
            <Heading>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Heading>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Paragraph>
          </div>
        </Timeline>
        <Timeline month="Aug" date="08" addCenterLine>
          <div>
            <Heading>Lorem ipsum </Heading>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Paragraph>
          </div>
        </Timeline>
        <Timeline month="Aug" date="08" addCenterLine>
          <div>
            <Paragraph>Lorem ipsum sit</Paragraph>
            <Heading>Consectetur adipscing elit, sed</Heading>
          </div>
          <div>
            <Heading>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Heading>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Paragraph>
          </div>
        </Timeline>
        <Timeline month="Aug" date="08" addCenterLine>
          <div>
            <Heading>Lorem ipsum </Heading>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Paragraph>
            <Paragraph
              weight="semibold"
              size={4}
              leading="display"
              color="black-50"
            >
              Consectetur adipiscing elit, sed do eiusmod tempor dolar sit amet,
              consectetur adipiscing elit, sed du eiusmod tempor.
            </Paragraph>
          </div>
        </Timeline>
      </div>
    </main>
  );
}
