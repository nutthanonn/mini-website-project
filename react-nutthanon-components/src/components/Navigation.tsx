import React from "react";
import styled from "styled-components";
import Logo from "../assets/image/fish.jpeg";

const CustomNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  height: 7vh;
  align-items: center;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  > * {
    margin-left: 20px;
  }
`;

const ImgCustom = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-size: cover;
  box-shadow: 0 0 0 2px rgb(142, 214, 255, 0.7);
  opacity: 1;
  transition: 0.5s ease-in;
  &:hover {
    opacity: 0.5;
    transition: 0.5s ease-in;
  }
`;

const LogoText = styled.a`
  text-transform: uppercase;
  display: inline;
  position: relative;
  color: black;
  text-decoration: none;
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
    background-color: black;
    border-radius: 10px;
  }

  &:hover::before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  cursor: pointer;
`;

const Navigation: React.FC = () => {
  return (
    <CustomNav>
      <ImgCustom src={Logo} />
      <LogoText href="https://www.github.com/nutthanonn" target="_blank">
        Nutthanon
      </LogoText>
    </CustomNav>
  );
};

export default Navigation;
