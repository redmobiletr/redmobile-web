import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterSection = styled("footer")`
  background: #D90416;
  padding: 2.5rem 0;
`;

export const Title = styled("h4")`
  font-size: 22px;
  text-transform: capitalize;
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const NavLink = styled(Link)`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.625rem;
  transition: all 0.2s ease-in-out;
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;

  &:hover,
  &:active,
  &:focus {
    color: #ffffff;
    opacity: 1;
  }
`;

export const Extra = styled("section")`
  background: #D90416;
  position: relative;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 2rem;
`;

export const LogoContainer = styled("div")`
  display: flex;
  position: relative;
  align-items: center;
  
  .logo-text {
    font-family: 'Marble Modern', sans-serif;
    font-weight: 700;
    font-size: 28px;
    letter-spacing: -0.5px;
    line-height: 1;
    color: #ffffff;
  }
`;

export const Para = styled("div")`
  color: #ffffff;
  font-size: 14px;
  width: 70%;
  opacity: 0.9;
  font-family: 'Montserrat', sans-serif;
`;

export const Large = styled(Link)`
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-transform: capitalize;
  line-height: 24px;
  display: block;
  margin-bottom: 0.625rem;
  transition: all 0.3s ease-in-out;
  max-width: max-content;
  opacity: 0.9;
  font-family: 'Montserrat', sans-serif;

  &:hover {
    color: #ffffff;
    opacity: 1;
    text-underline-position: under;
    text-decoration: #ffffff wavy underline;
  }
`;

export const Chat = styled("p")`
  color: #ffffff;
  max-width: fit-content;
  border-bottom: 1px solid #ffffff;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease-in-out;
  opacity: 0.9;
  font-family: 'Montserrat', sans-serif;

  &:hover {
    border-bottom: 1px solid #ffffff;
    color: #ffffff;
    opacity: 1;
  }
`;

export const Empty = styled("div")`
  position: relative;
  height: 53px;
`;

export const FooterContainer = styled("div")`
  max-width: 510px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  transition: all 0.1s ease-in-out;

  a {
    &:hover,
    &:active,
    &:focus {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 769px) {
    width: auto;

    a:not(:last-child) {
      display: none;
    }
  }

  div {
    cursor: pointer;
    margin-right: 15px;
    width: 25px;
    height: 25px;

    svg {
      fill: #ffffff;
      opacity: 0.8;
    }

    &:hover {
      svg {
        fill: #ffffff;
        opacity: 1;
      }
    }
  }
`;

export const Language = styled("h4")`
  font-size: 22px;
  text-transform: capitalize;
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const Label = styled("label")`
  font-size: 22px;
  text-transform: capitalize;
  color: #ffffff;
  display: block;
  margin-bottom: 2rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
    margin-bottom: 1rem;
  }
`;

export const LanguageSwitch = styled("div")`
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export const LanguageSwitchContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 85px;
`;
