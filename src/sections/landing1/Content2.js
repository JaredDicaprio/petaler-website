import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { rgba } from "polished";
import styled from "styled-components";

import { Title, Section, Box, Text } from "../../components/Core";
import { device } from "../../utils";

import svgCurve from "../../assets/image/svg/l1-curve-content2.svg";
import floristImg from "../../assets/image/png/florist_mobile.png";

const ShapeTop = styled(Box)`
  position: absolute;
  top: 0;
  left: -150px;
  img {
    min-width: 100%;
  }
`;

const ShapeCard = styled(Box)`
  width: 305px;
  box-shadow: ${({ theme }) => `0 32px 34px ${theme.colors.border}`};
  position: absolute;
  top: 20%;
  left: 0;
  z-index: 2;
  transform: scale(0.85);
  @media ${device.sm} {
    transform: scale(1);
    left: -14%;
  }
`;

const ContentCard = ({
  color = "secondary",
  className,
  iconName,
  title,
  children,
  ...rest
}) => (
  <Box
    width={360}
    bg="light"
    border="1px solid"
    borderColor="border"
    p="20px"
    borderRadius={10}
    className={`d-flex ${className}`}
    {...rest}
    css={`
      min-width: 100%;
      width: 100%;
      @media ${device.sm} {
        width: 360px;
        min-width: 360px;
      }
    `}
  >
    <Box
      size={55}
      minWidth={55}
      borderRadius="50%"
      color={color}
      fontSize="28px"
      className="d-flex justify-content-center align-items-center"
      css={`
        background-color: ${({ theme, color }) =>
          rgba(theme.colors[color], 0.1)};
      `}
      mr={3}
    >
      <i className={`icon ${iconName}`}></i>
    </Box>
    <div>
      <Title variant="card" mb={0}>
        {title}
      </Title>

      <Text>{children}</Text>
    </div>
  </Box>
);

const Content2 = () => (
  <>
    {/* <!-- Content section 2 --> */}
    <Section bg="#f7f7fb" className="position-relative" id="florists">
      <ShapeTop>
        <img src={svgCurve} alt="" className="img-fluid" />
      </ShapeTop>
      <Container>
        <Row className="align-items-center">
          <Col lg="5" md="9" sm="10" className="mb-5 mb-lg-0">
            <div className="position-relative">
              <div
                data-aos="fade-down"
                data-aos-duration="750"
                data-aos-once="true"
              >
                <img src={floristImg} alt="" className="img-fluid" />
              </div>
              <ShapeCard
                bg="secondary"
                p="18px"
                borderRadius={8}
                className="d-flex align-items-start"
                data-aos="fade-right"
                data-aos-duration="750"
                data-aos-once="true"
                data-aos-delay="500"
              >
                <Box
                  width="30px"
                  minWidth="30px"
                  height="30px"
                  minHeight="30px"
                  bg="warning"
                  color="light"
                  borderRadius="50%"
                  className="d-flex align-items-center justify-content-center"
                  mr={3}
                  mt={2}
                >
                  <i className="fas fa-bell"></i>
                </Box>

                <Box pr="40px">
                  <Title variant="card" color="light" fontWeight={300} mb={0}>
                    Summer Meadows Farm has posted new inventory!
                  </Title>
                </Box>
              </ShapeCard>
            </div>
          </Col>
          <Col lg="7">
            <div
              data-aos="fade-left"
              data-aos-duration="750"
              data-aos-once="true"
            >
              <div className="content-text pl-lg--50">
                <div className="section-title">
                  <Title>Florists - Petaler is your:</Title>
                  <Text mb={2}>
                    • Access to the freshest blooms - cut yesterday, not shipped
                    thousands of miles in a box 🌸
                  </Text>
                  <Text mb={2}>
                    • Network to find exactly what you are looking for - no more
                    wholesaler replacement of the "blush focal dahlia", when
                    only the queen will do (looking at you, Cafe au Lait) 👑
                  </Text>
                  <Text mb={2}>
                    • Support for the local community, economy, and environment
                    🤗
                  </Text>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Content2;
