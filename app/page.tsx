import { Heading, Paragraph } from '@/components/Typography';

export default function Home() {
  return (
    <main>
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
          <Heading as="h2" size={6} leading="normal" className="rs-mb-2 rs-mt-8 ">Some of our <span className="bg-plum-light text-black-true px-10 rounded">custom</span> highlights.</Heading>
          <Paragraph>
            Building websites that fit the custom needs of our clients across
            Stanford, employing Storyblok, Lorem Ipsum, and our very own,
            Stanford Sites.
          </Paragraph>
          <div className='h-400'>
            <Paragraph>
              Cards coming soon...
            </Paragraph>
          </div>
        </div>
        <div className="">
          <Heading as="h2" size={6} leading="normal" className="rs-mb-2 rs-mt-8">Service in the <span className="bg-teal px-10 rounded">numbers.</span></Heading>
          <div className='h-400'>
            <Paragraph>
              Cards coming soon...
            </Paragraph>
          </div>
        </div>
      </div>
    </main>
  );
}
