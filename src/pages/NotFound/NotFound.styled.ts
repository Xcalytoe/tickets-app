import styled from "styled-components";
import variables from "../../components/style/Variables.styles";

export const NotFoundStyled = styled.div`
  ${variables}
  display: flex;
  justify-content: center;
  align-itens: center;
  text-align: center;
  height: 100vh;
  padding-top: 10%;
  padding-top: 100px;
  h1 {
    font-size: 60px;
    color: var(--blue);
    line-height: 140%;
  }
  h4 {
    font-size: 20px;
    color: var(--secondary-text);
    line-height: 140%;
  }
  p {
    font-size: 16px;
    color: var(--secondary-text);
    line-height: 140%;
    padding-bottom: 10px;
  }
  a {
    color: var(--blue);
  }
`;
