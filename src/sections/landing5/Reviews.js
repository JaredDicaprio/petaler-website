import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text, Span } from "../../components/Core";

import img5Star from "../../assets/image/png/5star.png";
import img4Star from "../../assets/image/png/4star.png";

import imgR1 from "../../assets/image/jpeg/reviewer1.jpg";
import imgR2 from "../../assets/image/jpeg/reviewer2.jpg";
import imgR3 from "../../assets/image/jpeg/reviewer3.jpg";

const ContentCard = ({
  className,
  imageStar = img5Star,
  image,
  name,
  company,
  children,
  ...rest
}) => (
  <Box
    bg="light"
    minHeight={["320px", null, `403px`]}
    border="1px solid"
    borderColor="border"
    p="35px"
    pb="30px"
    borderRadius={10}
    className={`d-flex flex-column ${className}`}
    {...rest}
    aos="fade-left"
    data-aos-delay="500"
    data-aos-duration="1000"
    data-aos-once="true"
  >
    <div>
      <img src={imageStar} alt="" className="img-fluid" />
    </div>
    <Text color="dark" mt={4} mb={3} className="font-italic">
      {children}
    </Text>
    <Box className={`d-flex justify-content-between mt-auto`}>
      <Box className="d-flex justify-content-center align-items-start" mr={3}>
        <img src={image} alt="" className="img-fluid" />
      </Box>
      <div className="flex-grow-1">
        <Title variant="card" mb={1}>
          {name}
        </Title>
        <Text fontSize="14px" fontWeight={400} lineHeight="1">
          {company}
        </Text>
      </div>
    </Box>
  </Box>
);

const Reviews = () => {
  return (
    <>
      <Section bg="#f7f7fb" borderBottom="1px solid #EAE9F2;">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="6" className="text-center">
              <Box className="text-center">
                <Title>Reviews from readers</Title>
              </Box>
              <Text mb={4}>
                Create custom landing pages with Omega that converts more
                visitors than any website.
              </Text>
            </Col>
          </Row>
          <Row className="justify-content-center mt-3">
            <Col lg="4" md="6" className="mb-4 mb-lg-0">
              <ContentCard
                name="Jonathan Taylor"
                company="From Amazon.com"
                image={imgR1}
              >
                "You made it so simple. My new site is so much faster and easier
                to work with than my old site. I just choose the page, make the
                change and click save."
              </ContentCard>
            </Col>
            <Col lg="4" md="6" className="mb-4 mb-lg-0">
              <ContentCard
                name="Paromita Haque"
                company="From Amazon.com"
                image={imgR2}
                imageStar={img4Star}
              >
                "Simply the best. Better than all the rest. I’d recommend this
                product to beginners and advanced users."
              </ContentCard>
            </Col>
            <Col lg="4" md="6" className="mb-4 mb-lg-0">
              <ContentCard
                name="Trashee Habbard"
                company="From Amazon.com"
                image={imgR3}
              >
                "Must have book for students, who want to be Product Designer,
                UX Designer, or Interaction Designer."
              </ContentCard>
            </Col>
          </Row>
          <p
            className="mb-0 mt-5"
            css={`
              font-size: 16px;
              font-weight: 500;
              letter-spacing: -0.5px;
              text-align: center;
            `}
          >
            <a href="/" target="_blank" className="text-decoration-none">
              <Span color="secondary">
                Check all 3,583 reviews on Amazon.com
              </Span>
            </a>
          </p>
        </Container>
      </Section>
    </>
  );
};

export default Reviews;
