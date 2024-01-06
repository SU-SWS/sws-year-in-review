import { Heading, Paragraph } from '@/components/Typography';

export default function Home() {
  return (
    <main>
      <div className="cc">
        <div className="max-w-[110rem]">
          <Heading as="h1" size={8} className="rs-mb-2 rs-mt-8">2023 Year in review.</Heading>
          <Paragraph weight="semibold" size={4} leading="display" color="black-50">
            Consectetur adipiscing elit, sed do eiusmod tempor dolar sit amet,
            consectetur adipiscing elit, sed du eiusmod tempor.
          </Paragraph>
        </div>
      </div>
    </main>
  );
};
