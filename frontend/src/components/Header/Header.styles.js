import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #020203;
  color: white;
  display: flex;
  padding: 20px 6% 15px 30px;
  align-items: center;
  font-size: 24px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const StyledImageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10%;
`;

export const StyledAppName = styled.p`
  color: #E60000;
  margin: 0 0 0 10px;
`;

export const StyledNav = styled.nav`
  flex: 1;
`

export const StyledNavList = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  margin: 0;
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;