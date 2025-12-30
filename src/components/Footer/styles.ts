import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterSection = styled("footer")`
  background: #D90416;
  padding: 3rem 0;
  
  @media screen and (max-width: 768px) {
    padding: 2rem 0;
  }
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
  border-top: 1px solid rgba(255, 255, 255, 0.1);
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
    
    @media only screen and (max-width: 768px) {
      font-size: 24px;
    }
    
    @media only screen and (max-width: 480px) {
      font-size: 20px;
    }
    
    @media only screen and (max-width: 360px) {
      font-size: 18px;
    }
  }
`;

export const Para = styled("div")`
  color: #ffffff;
  font-size: 14px;
  opacity: 0.9;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.6;
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

export const ContactInfo = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1rem;
`;

export const ContactItem = styled("div")`
  display: flex;
  align-items: center;
`;

export const EmailLink = styled("a")`
  color: #ffffff;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  opacity: 0.9;
  border-bottom: 1px solid transparent;
  
  &:hover {
    opacity: 1;
    border-bottom: 1px solid #ffffff;
  }
`;

export const Copyright = styled("div")`
  color: #ffffff;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  opacity: 0.8;
  text-align: right;
  
  @media screen and (max-width: 768px) {
    text-align: center;
    margin-top: 1rem;
    font-size: 12px;
  }
`;
