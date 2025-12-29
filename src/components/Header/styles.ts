import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

export const HeaderSection = styled("header")`
  padding: 1rem 0.5rem;

  .ant-row-space-between {
    align-items: center;
    text-align: center;
  }

  @media only screen and (max-width: 890px) {
    padding: 0.75rem 0.5rem;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  flex-shrink: 0;
  
  .logo-text {
    font-family: 'Marble Modern', sans-serif;
    font-weight: 700;
    font-size: 32px;
    letter-spacing: -0.5px;
    line-height: 1;
    color: #D90404;
    transition: opacity 0.3s ease-in-out;
    
    &:hover {
      opacity: 0.85;
    }
  }

  @media only screen and (max-width: 480px) {
    .logo-text {
      font-size: 28px;
    }
  }

  @media only screen and (max-width: 360px) {
    .logo-text {
      font-size: 24px;
    }
  }
`;

export const NavLink = styled("div")`
  display: inline-block;
  text-align: center;
`;

export const CustomNavLink = styled("div")`
  width: 203px;
  display: inline-block;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

export const Burger = styled("div")`
  @media only screen and (max-width: 890px) {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0.5rem;
    transition: all 0.3s ease-in-out;
    border-radius: 4px;
    
    &:hover {
      background-color: rgba(217, 4, 4, 0.05);
    }
    
    &:active {
      background-color: rgba(217, 4, 4, 0.1);
    }
  }

  display: none;

  svg {
    fill: #D90404;
    transition: transform 0.3s ease-in-out;
  }
`;

export const NotHidden = styled("div")`
  @media only screen and (max-width: 890px) {
    display: none;
  }
`;

export const Menu = styled("h5")`
  font-size: 1.5rem;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1.2rem;
  color: #101726;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  transition: color 0.2s ease-in;
  margin: 0.5rem 2rem;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const Label = styled("span")`
  font-weight: 500;
  color: #404041;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Outline = styled(MenuOutlined)`
  font-size: 22px;
  
  @media only screen and (max-width: 890px) {
    font-size: 24px;
    width: 24px;
    height: 24px;
  }
  
  @media only screen and (max-width: 480px) {
    font-size: 22px;
    width: 22px;
    height: 22px;
  }
`;

export const Span = styled("span")`
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: #D90404;
    text-underline-position: under;
    text-decoration: #D90404 wavy underline;
  }
`;

export const MobileRightContainer = styled("div")`
  display: none;

  @media only screen and (max-width: 890px) {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-shrink: 0;
  }

  @media only screen and (max-width: 768px) {
    gap: 0.875rem;
  }

  @media only screen and (max-width: 480px) {
    gap: 0.75rem;
  }

  @media only screen and (max-width: 360px) {
    gap: 0.5rem;
  }
`;

export const MobileButtonContainer = styled("div")`
  display: none;

  @media only screen and (max-width: 890px) {
    display: block;
  }

  button {
    white-space: nowrap;
    font-weight: 600;
    transition: all 0.3s ease-in-out;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(217, 4, 4, 0.15);
    
    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 8px rgba(217, 4, 4, 0.25);
    }
    
    &:active {
      transform: translateY(0);
      box-shadow: 0 2px 4px rgba(217, 4, 4, 0.15);
    }
  }

  @media only screen and (max-width: 768px) {
    button {
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
    }
  }

  @media only screen and (max-width: 480px) {
    button {
      padding: 0.45rem 0.85rem;
      font-size: 0.8rem;
    }
  }

  @media only screen and (max-width: 360px) {
    button {
      padding: 0.4rem 0.75rem;
      font-size: 0.75rem;
    }
  }
`;
