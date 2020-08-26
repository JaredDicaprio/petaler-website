import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";
import { device } from "../../utils";

import imgL2HeroBg from "../../assets/image/jpeg/l2-hero-bg.jpg";

const SectionStyled = styled(Section)`
  background: url(${imgL2HeroBg}) no-repeat;
  background-size: cover;
  background-position: bottom left;

  @media ${device.lg} {
    background-position: center;
  }
`;

const WhyContent = () => (
  <>
    <SectionStyled>
      <div className="overflow-hidden">
        <Container>
          <Row>
            <Col
              md={8}
              lg={6}
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-once="true"
              data-aos-delay="500"
            >
              <Section py={[5, null, null, "250px"]}>
                <div className="omga-02__content-text section-title order-lg-1">
                  <Title>Why does it matter?</Title>
                  <Text mb={4}>
                    Approximately 70% of the cut flowers purchased in the United
                    States are grown overseas.
                  </Text>
                  <Text mb={4}>
                    However, more consumers want to enjoy flowers grown closer
                    to home <span role="img">🏠</span> - both to support
                    businesses they care about and minimize their environmental
                    impact ✈️ (and because they are prettier! 😍).
                  </Text>
                  <Text mb={4}>
                    Strenthening 💪 connections between local flower-farmers and
                    florists, and increasing the accessibility to fresh blooms
                    matters because it encourages stronger communities through
                    the shared joy of flowers. 💐
                  </Text>
                </div>
              </Section>
            </Col>
          </Row>
        </Container>
      </div>
    </SectionStyled>
  </>
);

export default WhyContent;
