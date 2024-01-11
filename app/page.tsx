import { Timeline } from '@/components/Grid';
import { Heading, Paragraph } from '@/components/Typography';

export default function Home() {
  return (
    <main className="bg-black text-white">
      <div className="cc">
        <div className="max-w-[120rem]">
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
