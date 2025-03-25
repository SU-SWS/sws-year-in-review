import React from 'react';
import { Heading, Paragraph, Text } from '../Typography';
import { Card } from '../Card';
import { ActionLink } from '../Cta';

export default function GoTeam() {
  return (
    <section className="rs-mb-10">
      <Heading>
        Our team looks forward to working with yours in{' '}
        <Text as='span' bgColor="illuminating" color="black-true" className="px-10 rounded-[0.8rem] text-black-true">
          2024.
        </Text>
      </Heading>
      <Card paddingType='small' className='rs-mt-5 max-w-1000 mx-auto'>
        <Text size={2} className="text-black-30 rs-mb-0">
          Interest in having your own <span className="font-semibold">Year in Review</span> or <span className="font-semibold">Annual Report site</span> like
          this one?
        </Text>
        <Text size={1} className="mb-0">
          <ActionLink hasUnderline href="https://uit.stanford.edu/service/custom-website-project">Let us know!</ActionLink>
        </Text>
      </Card>
    </section>
  );
}
