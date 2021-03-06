import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";
import { device } from "../../utils";
import farmImg from "../../assets/image/png/farm_mobile.png";

const ShapeCard = styled(Box)`
  width: 305px;
  box-shadow: 0 32px 34px rgba(28, 27, 32, 0.2);
  position: absolute;
  top: 20%;
  left: 0%;
  transform: scale(0.85);
  @media ${device.sm} {
    left: 0;
    transform: scale(1);
  }
  @media ${device.md} {
    left: 0%;
  }
`;

const Content1 = () => (
  <>
    {/* <!-- Content section 1 --> */}
    <Section id="farmers">
      <Container>
        <Row className="align-items-center">
          <Col md="12" lg="6" className="order-lg-2">
            <div className="position-relative pl-lg-5">
              <div
                className="pl-lg-4 text-center text-lg-right"
                data-aos="fade-down"
                data-aos-duration="750"
                data-aos-once="true"
              >
                <img src={farmImg} alt="" className="img-fluid" />
              </div>

              <ShapeCard
                bg="warning"
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
                  bg="secondary"
                  color="light"
                  borderRadius="50%"
                  className="d-flex align-items-center justify-content-center"
                  mr={3}
                  mt={2}
                >
                  <i className="fas fa-check"></i>
                </Box>

                <Box pr="40px">
                  <Title variant="card" fontWeight={300} mb={0}>
                    Payment recieved for Order #1426
                  </Title>
                </Box>
              </ShapeCard>
            </div>
          </Col>
          <Col lg="6" className="order-lg-1 mt-5 mt-lg-0">
            <div
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-once="true"
            >
              <Box>
                <Title>Farmers - Petaler is your:</Title>
                <Text>• Always up-to-date availability list 📝</Text>
                <Text>• Pickup and delivery schedule keeper 📅</Text>
                <Text>• Automatic billing and payments collector 💸</Text>
              </Box>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Content1;
