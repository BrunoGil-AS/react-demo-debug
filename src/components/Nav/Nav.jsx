// Navigation.jsx (ejemplo típico)
import { Link } from "react-router-dom";
import {
  NavigationContainer,
  NavStyled,
  LinkStyled,
  HeaderOneStyled,
  LinkContainer,
} from "./Nav.styles";

export default function Nav() {
  return (
    <NavigationContainer>
      <HeaderOneStyled>Demo</HeaderOneStyled>
      <NavStyled>
        <LinkContainer>
          <LinkStyled to="/">Dashboard</LinkStyled>
          <LinkStyled to="/box">Box</LinkStyled>
        </LinkContainer>
      </NavStyled>
    </NavigationContainer>
  );
}
