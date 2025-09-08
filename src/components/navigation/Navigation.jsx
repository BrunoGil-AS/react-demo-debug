// Navigation.jsx (ejemplo típico)
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  gap: 12rem;
  margin-bottom: 1rem;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const HeaderOneStyled = styled.h1`
  display: flex;

  text-align: left;
  margin-top: 10px;
  margin-left: 20px;
`;

const LinkContainer = styled.div`
  display: inline-flex;
  padding: 10px;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  height: auto;
  border-radius: 5px;
  width: 100vw;
  background-color: #334b60;
`;

const NavigationContainer = styled.div`
  display: inline-block;
  margin-left: auto;
  margin-top: auto;
  padding: 10px;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  height: fit-content;
  border-radius: 12px;
  width: 100%;
  background-color: #334b60;
`;

export function Navigation() {
  return (
    <NavigationContainer>
      <HeaderOneStyled>Demo</HeaderOneStyled>
      <Nav>
        <LinkContainer>
          <LinkStyled to="/home">Dashboard</LinkStyled>
          <LinkStyled to="/box">Box</LinkStyled>
        </LinkContainer>
      </Nav>
    </NavigationContainer>
  );
}
