import logo from '../../assets/logo.png';
import { APP_NAME, HEADER_LINKS } from "../../constants";
import { StyledAppName, StyledHeader, StyledImageContainer, StyledLink, StyledNav, StyledNavList } from "./Header.styles";
import PropTypes from 'prop-types';

/**
 * App Header
 * @param {string} id 
 * @returns 
 */
export const Header = ({ id }) => {

  return (
    <StyledHeader >
      <StyledImageContainer>
        <img src={logo} alt='logo' />
        <StyledAppName>{APP_NAME}</StyledAppName>
      </StyledImageContainer>
      <StyledNav>
        <StyledNavList>
          {HEADER_LINKS.map((link, index) => (
            <li key={index}><StyledLink to={`/${id}/${link.path}`}>{link.title}</StyledLink></li>
          ))}
        </StyledNavList>
      </StyledNav>
    </StyledHeader>
  )
}

Header.propTypes = {
  id: PropTypes.string.isRequired,
};