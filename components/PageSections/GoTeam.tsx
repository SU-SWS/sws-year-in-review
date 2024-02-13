import React from 'react';
import { Heading, Paragraph, Text } from '../Typography';
import { Card } from '../Card';

export default function GoTeam() {
  return (
    <section className="rs-mb-10">
      <Heading>
        Our team looks forward to working with your&rsquo;s in{' '}
        <Text as='span' bgColor="illuminating" color="black-true" className="px-10 rounded-[0.8rem] text-black-true">
          2024.
        </Text>
      </Heading>
      <div className='rs-mb-3 rs-mt-1ß'>
        Team SVGs here
      </div>
      <Card paddingType='small' className='rs-mt-5'>
        <Paragraph>
          Interest in having your own Year in Review or Annual Report site like
          this one?
        </Paragraph>
      </Card>
    </section>
  );
}
