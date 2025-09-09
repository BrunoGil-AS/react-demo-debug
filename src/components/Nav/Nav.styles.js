import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
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

export const NavStyled = styled.nav`
  display: flex;
  gap: 12rem;
  margin-bottom: 1rem;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const HeaderOneStyled = styled.h1`
  display: flex;

  text-align: left;
  margin-top: 10px;
  margin-left: 20px;
`;

export const LinkContainer = styled.div`
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
