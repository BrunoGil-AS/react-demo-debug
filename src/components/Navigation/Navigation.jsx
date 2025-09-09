// Navigation.jsx (ejemplo típico)
import { Link } from "react-router-dom";
import {
  NavigationContainer,
  Nav,
  LinkStyled,
  HeaderOneStyled,
  LinkContainer,
} from "./Navigation.styles";

export default function Navigation() {
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
