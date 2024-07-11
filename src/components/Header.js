import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => (
  <HeaderContainer>
    <Logo>Dylan Estate</Logo>
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/property-form">List your property</NavLink>
    </Nav>
  </HeaderContainer>
);

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  font-family:gilroy;
  background-color: #333;
  color: #fff;
`;

const Logo = styled.h1`
  font-size: 24px;
  color:rgb(189, 155, 57);
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-left: 20px;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }
`;

export default Header;
