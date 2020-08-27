import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import {
  Title,
  Button,
  Section,
  Box,
  Text,
  Input,
} from "../../components/Core";

import imgOval from "../../assets/image/png/l1-cta-oval.png";
import svgCurve from "../../assets/image/svg/l1-curve-cta.svg";

const LeftCard = styled(Box)`
  position: absolute;
  top: 0;
  left: 0px;
`;

const RightCard = styled(Box)`
  position: absolute;
  top: 0;
  right: -275px;
`;

const CTA = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
    setError,
  } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const GATEWAY_URL =
    "https://74xvrjcu1j.execute-api.us-east-1.amazonaws.com/prod";
  const onSubmit = async (data) => {
    try {
      console.log("data", data);
      await fetch(GATEWAY_URL, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      reset();
      setSubmitted(true);
    } catch (error) {
      setError(
        "submit",
        "submitError",
        `Uh oh - something went wrong :( ${error.message}`
      );
      console.log("err", error);
    }
  };

  const showThankYou = <div>Thank you!</div>;

  const showForm = (
    <form method="post">
      <Box mb={3}>
        <Input
          onSubmit={handleSubmit(onSubmit)}
          type="text"
          placeholder="Your name"
          name="name"
          id="name"
          ref={register}
          disabled={isSubmitting}
        />
      </Box>
      <Box mb={3}>
        <Input
          type="email"
          placeholder="Your email"
          name="email"
          id="email"
          ref={register}
          disabled={isSubmitting}
        />
      </Box>

      <Button
        width="100%"
        type="submit"
        borderRadius={10}
        disabled={isSubmitting}
      >
        Keep me in the loop
      </Button>
    </form>
  );

  return (
    <>
      {/* <!-- CTA section --> */}
      <Section bg="#8694cf" className="position-relative">
        <LeftCard
          data-aos="fade-right"
          data-aos-duration="750"
          data-aos-once="true"
        >
          <img src={imgOval} alt="" className="img-fluid" />
        </LeftCard>
        <RightCard>
          <img src={svgCurve} alt="" className="img-fluid" />
        </RightCard>
        <Container>
          <Row className="justify-content-center">
            <Col lg="7" xl="6">
              <Box mb={5} className="text-center">
                <Title color="light">Stay in the know</Title>
                <Text color="light" opacity={0.7}>
                  Petaler launches soon. Sign up to learn more!
                </Text>
              </Box>
              {submitted ? showThankYou : showForm}
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default CTA;
