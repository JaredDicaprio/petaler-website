import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.bg} !important;

    color: ${({ theme }) => theme.colors.text} !important;
  }

  p, .p{
    color: ${({ theme }) => theme.colors.text};
    font-size: 18px;
    font-weight: 300;
    letter-spacing: -0.56px;
    line-height: 30px;
    margin-bottom: 0;
  }


  a {
    color: ${({ theme }) => theme.colors.text} !important;
    transition: all 0.3s ease-out;
    &:hover, &:active, &:focus{
      color: ${({ theme }) => theme.colors.secondary} !important;
      text-decoration: none!important;
      outline: none !important;
    }
  }
`;

export default globalStyle;
