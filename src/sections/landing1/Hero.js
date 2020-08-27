import React, { useContext } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";

import GlobalContext from "../../context/GlobalContext";

import { device } from "../../utils";
import svgHeroShape from "../../assets/image/svg/hero-shape-svg.svg";
import svgHandOffScene from "../../assets/image/svg/handoff-scene.svg";

const ShapeTopLeft = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  transform: translate(-50%, -50%);
`;

const ImgRight = styled.img`
  max-width: 50%;
  @media ${device.sm} {
    max-width: 60%;
  }
  @media ${device.lg} {
    max-width: 100%;
  }
`;

const Hero = () => {
  const gContext = useContext(GlobalContext);

  const openVideoModal = (e) => {
    e.preventDefault();
    gContext.toggleVideoModal();
  };

  return (
    <>
      {/* <!-- Hero Area --> */}
      <Section className="position-relative">
        <div className="pt-5"></div>
        <ShapeTopLeft>
          <img src={svgHeroShape} alt="" className="img-fluid" />
        </ShapeTopLeft>
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col lg="5" md="8" sm="9" className="order-lg-2">
              <div className="text-center text-lg-right position-relative">
                <div
                  className="img-main"
                  data-aos="fade-down"
                  data-aos-duration="750"
                  data-aos-once="true"
                  data-aos-delay="500"
                >
                  <ImgRight src={svgHandOffScene} alt="" />
                </div>
              </div>
            </Col>
            <Col lg="7" className="order-lg-1">
              <div
                data-aos="fade-right"
                data-aos-duration="750"
                data-aos-once="true"
                data-aos-delay="500"
              >
                <Box py={[null, null, null, 5]} pr={5} pt={[4, null]}>
                  <Title variant="hero">
                    Making locally grown flowers accessible.
                  </Title>
                  <Text mb={4}>
                    With Petaler, manage inventory, ordering, scheduling, and
                    payment with your favorite flower farmers or florists - all
                    from one simple platform. 🎉
                  </Text>
                </Box>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Hero;
