import styled from "styled-components";

export const PaginationContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1050px;
  margin: auto;
  border-radius: 4px;
  margin-top: 30px;
  margin-bottom: 32px;
  padding: 0px 10px;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 5px;
    p {
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 0.26px;
      text-transform: capitalize;
      color: var(--primary-text);
    }
    button {
      width: 25px;
      height: 25px;
      background: var(--white);
      border: 1px solid var(--border);
      border-radius: 3px;
      cursor: pointer;
      &:focus {
        box-shadow: none;
        outline: none;
      }
      &.active {
        background: none;
        border: none;
      }
    }
  }
  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    li {
      width: 25px;
      height: 25px;
      button {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 20px;
        letter-spacing: 0.26px;
        color: var(--primary-text);
        border: none;
        background: none;
        transition: all 0.3s;
        cursor: pointer;
        &:hover {
          transition: all 0.3s;
          background: var(--border);
        }
        &:focus {
          box-shadow: none;
          outline: none;
        }
        &.active {
          background: var(--primary-dark);
          color: var(--white);
        }
      }
    }
  }
`;
