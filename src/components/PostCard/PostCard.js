import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Title, Box, Text, Span } from "../Core";

const Card = styled(Box)`
  border-radius: 10px 10px;
  border: 1px solid #eae9f2;
  transition: 0.4s;
  overflow: hidden;

  &:hover {
    box-shadow: ${({ theme }) => `0 52px 54px ${theme.colors.shadow}`};
  }
`;

const ImageContainer = styled(Box)`
  cursor: pointer;
  position: relative;
`;

const BrandImage = styled(Box)`
  position: absolute;
  bottom: 28px;
  left: 30px;
  border-radius: 8px;
  border: 1px solid #eae9f2;
  overflow: hidden;
`;

const CardText = styled(Box)`
  padding: 30px;
`;

const TitleStyled = styled(Title)`
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const PostCard = ({
  img,
  imgBrand,
  preTitle,
  title,
  children,
  readMore,
  ...rest
}) => (
  <Card {...rest}>
    <Link>
      <ImageContainer>
        <img src={img} alt="" className="w-100 img-fluid" />
        {imgBrand && (
          <BrandImage>
            <img src={imgBrand} alt="" className="img-fluid" />
          </BrandImage>
        )}
      </ImageContainer>
    </Link>
    <CardText>
      {preTitle && (
        <Text fontSize={2} lineHeight={1.75} mb="14px">
          Jan 14, 2020
        </Text>
      )}

      <Link to="/">
        <TitleStyled variant="card" mb="14px">
          {title}
        </TitleStyled>
      </Link>
      <Text fontSize={2} lineHeight={1.75} mb="16px">
        {children}
      </Text>
      {readMore && (
        <Box>
          <Link to="/">
            <Span color="primary">Continue Reading</Span>
          </Link>
        </Box>
      )}
    </CardText>
  </Card>
);

export default PostCard;
