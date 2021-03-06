import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        powerwash001: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "powerwash001" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        powerwash002: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "powerwash002" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        powerwash003: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "powerwash003" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="about">
        <Container>
          <Grid>
            <div>
              <h2>About Us</h2>
              <p>
              Fast, efficient, and honest, ThePlainGuys Power Wash has become a reputable and well-known Residential and Commercial Cleaning Service.
              <br />
              
              <br />
              
              </p>
            </div>
            <Art>
              <Img fluid={data.powerwash001.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.powerwash002.childImageSharp.fluid} />
            </Art>
            <div>
              <p>
                Our team is up for every job, managing projects with the skill and experience our clients have come to expect.
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <p>
                We want our customers to be satisfied with our work, which is why we provide open communication channels throughout the duration of each project.
              </p>
            </div>
            <Art>
              <Img fluid={data.powerwash003.childImageSharp.fluid} />
            </Art>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: left;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 1000px;
  width: 100%;
  height: 100%;
`;

export default About;
