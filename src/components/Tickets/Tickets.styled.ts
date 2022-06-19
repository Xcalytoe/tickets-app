import styled from "styled-components";
import variables from "../style/Variables.styles";

export const TicketsContainer = styled.div`
  ${variables}
  max-width: 1050px;
  margin-left: auto;
  margin-right: auto;
  background: var(--white);
  border-radius: 4px;
  margin-top: 40px;

  header {
    border-bottom: 1px solid var(--border);
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      column-gap: 20px;
      height: 90px;
      padding-left: 30px;
      padding-right: 30px;
      p {
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 30px;
        letter-spacing: 0.26px;
        color: var(--secondary-text);
        max-width: 100px;
      }
      .ticket {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        column-gap: 26px;
        flex-grow: 1;
      }
    }
  }
  .ticket {
    display: flex;
    align-items: center;
    column-gap: 26px;
    flex-wrap: wrap;
    &-select {
      flex-basis: 160px;
      flex-grow: 1;
      max-width: 160px;
    }
    .form {
      flex-basis: 240px;
      flex-grow: 1;
      max-width: 240px;
    }
  }
`;
