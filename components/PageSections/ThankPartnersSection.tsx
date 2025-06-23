import React from 'react';
import { Card } from '../Card';
import { Grid } from '../Grid';
import { Heading, Text } from '../Typography';
import { ActionLink } from '../Cta';


const clients = {
  col1: [
    "Business Technology Services (BTS)",
    "Stanford Doerr School of Sustainability (SDSS)",
    "Coalition of Student Technology Support Teams",
    "Office of Development (OOD)",
    "Stanford University Libraries",
    "School of Engineering",
    "University Human Resources",
    "Human-Centered Artificial Intelligence (HAI)",
    "Chemistry, Engineering & Medicine for Human Health (ChEM-H)",
    "School of Humanities & Sciences",
    "Vice Provost for Student Affairs (VPSA)",
    "UIT Endpoint Engineering and Development (EED)",
    "University Communications",
    "Vice Provost for Graduate Education (VPGE)",
    "Stanford Institute for Economic Policy Research (SIEPR)",
    "CASBS (Center for Advanced Study in Behavioral Sciences)",
    "Stanford University Press",
    "Communication Department",
    "Dean of Research c-ShARP",
    "Lands, Buildings, and Real Estate",
    "Vice Provost for Undergraduate Education (VPUE)",
    "Martin Luther King, Jr. Research and Education Institute",
    "Board of Trustees",
    "Haas Center for Public Service",
    "Summer Session",
  ],
  col2: [
    "External Relations",
    "Computer Science",
    "Knight-Hennessy Scholars Program",
    "Graduate School of Business",
    "Financial Management Services (FMS)",
    "Herzenberg Laboratory",
    "University IT",
    "Stanford Mind & Body Lab",
    "Office of Special Events and Protocol",
    "GSB Research Hub",
    "Stanford Democracy Initiative",
    "Center for Computational, Evolutionary and Human Genomics (CEHG)",
    "ACHIP",
    "Office of the Provost",
    "Product Realization Lab (PRL)",
    "Photonics at Thermodynamic Limits",
    "Office of the President",
    "John W. Gardner Center for Youth and their Communities",
    "Basin Processes and Subsurface Modeling (BPSM)",
    "Institutional Equity & Access",
    "Schnitzer Group",
    "Wireless Systems Lab",
    "Vice Provost for Institutional Equity, Access & Community",
  ],
  col3: [
    "American Religions in a Global Context (ARGC)",
    "Hollberg Lab",
    "Jean Tang Lab",
    "Office of General Counsel (OGC)",
    "Center for Teaching and Learning",
    "Residential and Dining Enterprises (R&DE)",
    "Char Lab",
    "Wallenberg Research Link",
    "Research to the People (RTTP)",
    "Dynamic Design Lab",
    "Chao Lab",
    "Martinez Group",
    "Stanford Campus Residential Leaseholders",
    "Stanford Historical Society",
    "Devereaux Group",
    "Institutional Research & Decision Support (IRDS)",
    "UIT Consulting Services",
    "Department of Anesthesiology, Perioperative and Pain Medicine",
    "Business Affairs",
    "Otolaryngology - Head & Neck Surgery",
    "Faculty Staff Housing",
    "Graphic Novel Project",
    "Stanford Office of Digital Accessibility (SODA)",
  ],
};


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
        <Grid sm={1} md={2} lg={3} gap="default" className="rs-mt-6">
          {Object.values(clients).map((column, index) => (
            <ul key={index} className="list-none">
              {column.map((client) => (
                <li key={client}>
                  <ActionLink href="/">{client}</ActionLink>
                </li>
              ))}
            </ul>
          ))}
        </Grid>
      </Card>
    </section>
  );
}
