import React from 'react';
import { Card } from '../Card';
import { Grid } from '../Grid';
import { Heading, Text } from '../Typography';

export default function ThankPartnersSection() {
  return (
    <section className="rs-mb-10">
      <Card paddingType="large">
        <Heading as="h2" size={3} leading="normal">
          Thanks to{' '}
          <Text
            as="span"
            bgColor="teal"
            className="px-10 rounded-[0.8rem] text-black-true"
          >
            all of our partners
          </Text>{' '}
          in 2023.
        </Heading>
        <Grid sm={3}>
          <ul className="list-none">
            <li>
              <a>Business technology Services (BTS)</a>
            </li>
          </ul>
          <ul className="list-none">
            <li>
              <a>Business technology Services (BTS)</a>
            </li>
          </ul>
          <ul className="list-none">
            <li>
              <a>Business technology Services (BTS)</a>
            </li>
          </ul>
        </Grid>
      </Card>
    </section>
  );
}
