import styled from "styled-components";

export const TicketsContainer = styled.div`
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
      div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        column-gap: 26px;
      }
    }
  }
`;
