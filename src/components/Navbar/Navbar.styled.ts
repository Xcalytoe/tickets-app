import styled from "styled-components";
import variables from "../style/Variables.styles";

export const NavContainer = styled.header`
  ${variables}
  height: 60px;
  background: var(--secondary-text);
  margin-bottom: 60px;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 2000;
`;
