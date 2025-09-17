// Navigation.jsx (ejemplo típico)
import { Link } from "react-router-dom";
import {
  NavigationContainer,
  NavStyled,
  LinkStyled,
  HeaderOneStyled,
  LinkContainer,
} from "./Nav.styles";

/**
 * Navigation component for the application.
 * Includes links to different routes, such as Dashboard, Box, and Notes.
 * @returns JSX element for the navigation bar.
 */
export default function Nav() {
  return (
    <NavigationContainer>
      <HeaderOneStyled>Demo</HeaderOneStyled>
      <NavStyled>
        <LinkContainer>
          <LinkStyled to="/">Dashboard</LinkStyled>
          <LinkStyled to="/box">Box</LinkStyled>
          <LinkStyled to="/notes">Notes</LinkStyled>
        </LinkContainer>
      </NavStyled>
    </NavigationContainer>
  );
}
