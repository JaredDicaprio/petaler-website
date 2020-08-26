import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text, Input } from "../components/Core";

import PageWrapper from "../components/PageWrapper";

import Hero from "../sections/common/Hero";

const FormStyled = styled.form``;

const Contact1 = () => {
  return (
    <>
      <PageWrapper>
        <Hero title="Get in touch">
          Create custom landing pages with Omega that converts more visitors
          than any website.
        </Hero>
        <Section>
          <Container>
            <Row className="align-items-center">
              <Col lg="6">
                <FormStyled>
                  <Box mb={5}>
                    <Title>We are always open 24/7 for you.</Title>
                  </Box>
                  <Box mb={3}>
                    <Input type="text" placeholder="Your name" />
                  </Box>
                  <Box mb={3}>
                    <Input type="email" placeholder="Email address" />
                  </Box>

                  <Box mb={3}>
                    <Input type="text" placeholder="Subject" />
                  </Box>

                  <Box mb={3}>
                    <Input
                      type="text"
                      as="textarea"
                      placeholder="Write your message"
                      rows={4}
                    />
                  </Box>

                  <Button width="100%" type="submit" borderRadius={10}>
                    Send Message
                  </Button>
                </FormStyled>
              </Col>
              <Col
                lg={5}
                className="offset-lg-1 order-lg-2 mt-5 mt-lg-0 pt-lg-5"
              >
                <Box className="mb-5">
                  <Title variant="card" fontSize="24px">
                    Call us
                  </Title>
                  <Text>+1-492-4918-395</Text>
                  <Text>+14-394-409-591</Text>
                </Box>
                <Box className="mb-5">
                  <Title variant="card" fontSize="24px">
                    Email us
                  </Title>
                  <Text>info@mail.com</Text>
                  <Text>support@mail.com</Text>
                </Box>
                <Box className="mb-5">
                  <Title variant="card" fontSize="24px">
                    Contact us
                  </Title>
                  <Text>34 Madison Street,</Text>
                  <Text>NY, USA 10005</Text>
                </Box>
              </Col>
            </Row>
          </Container>
        </Section>
      </PageWrapper>
    </>
  );
};
export default Contact1;
