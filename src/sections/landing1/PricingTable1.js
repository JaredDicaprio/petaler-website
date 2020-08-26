import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Text, Button } from "../../components/Core";

const PricingCard = styled.div`
  border-radius: 10px;
  border: 1px solid #eae9f2;
  background-color: #fff;
  text-align: center;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 25px;
  padding-top: 32px;
  .small-title {
    color: #696871;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: -0.56px;
    line-height: 28px;
    margin-bottom: 22px;
  }
  .title {
    font-size: 60px;
    font-weight: 700;
    letter-spacing: -1.03px;
    line-height: 56px;
    color: #1d293f;
    margin-bottom: 30px;
  }
  .time {
    font-size: 28px;
    font-weight: 300;
    letter-spacing: -1.03px;
    line-height: 1;
  }
`;

const ULStyled = styled.ul`
  color: #696871;
  font-size: 21px;
  font-weight: 300;
  letter-spacing: -0.66px;
  line-height: 1.6;
  list-style: none;
  padding: 0;
  padding-top: 10px;

  li {
    margin-bottom: 14px;
  }
`;

const ButtonGroup = styled.div`
  border-radius: 10px;
  padding: 5px;
  background-color: #f7f7fb;
  display: inline-flex;
  max-height: 65px;
  .btn {
    border-radius: 10px 0 0 10px;
    width: 160px;
    height: 55px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.5px;
    color: #19191b;
    &.active {
      background-color: ${({ theme }) => theme.colors.secondary};
      color: #fff;
    }
    & + .btn {
      border-radius: 0 10px 10px 0;
    }
  }
`;

const ButtonStyled = styled(Button)`
  width: 100%;
  max-width: 305px;
  border-radius: 10px;
  border: 1px solid #eae9f2;
  background-color: #ffffff;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 21px;
  font-weight: 500;
  letter-spacing: -0.66px;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const Pricing = () => {
  return (
    <>
      <Section className="pb-0">
        <Container>
          <Row className="justify-content-center">
            <div className="">
              <Title>Pricing</Title>
            </div>
          </Row>
          <Row className="justify-content-center mb-4">
            <Col lg="5" md="7" sm="9" className="mt-4">
              <PricingCard>
                <span className="small-title">Florists</span>
                <h2 className="title mt-3 mb-4">Free</h2>
                <ULStyled>
                  <li>Access to gorgeous local blooms 🌷</li>
                  <li>
                    Effortless ordering from your favorite flower farmers👩‍🌾
                  </li>
                </ULStyled>
              </PricingCard>
            </Col>
            <Col lg="5" md="7" sm="9" className="mt-4">
              <PricingCard>
                <span className="small-title">Flower Farmers</span>
                <h2 className="title mt-3 mb-4">
                  ${"12"}
                  <span className="time"> /{"month"}</span>
                </h2>
                <ULStyled>
                  <li>+5% Transaction Fee</li>
                  <li>Easy inventory management 😎</li>
                  <li>No more invoicing and billing! 🥳</li>
                </ULStyled>
              </PricingCard>
            </Col>
          </Row>
        </Container>
      </Section>
      <Section>
        <Container>
          <Row className="justify-content-left mb-5">
            <div className="">
              <Title variant="card">Referral Program📣</Title>
              <Text>
                We think you are going to like it here. On top of offering a 1
                month free trial to farmers, for each friend you refer who signs
                up, farmers will recieve and additional free month 🗓️, and
                florists will recieve a $10 order credit 💰. Share the love. 😊
              </Text>
            </div>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Pricing;
