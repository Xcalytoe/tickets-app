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

export const TableStyled = styled.div`
  ${variables}
  padding: 30px;
  .flex {
    display: flex;
    display: grid;
    grid-template-columns: 313px 70px 150px 290px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--border);
    .status {
      flex-basis: 70px;
      max-width: 70px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .date {
      flex-basis: 150px;
      max-width: 150px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .ticket {
      flex-basis: 313px;
      max-width: 313px;
      flex-grow: 1;
      flex-shrink: 0;
    }
  }
  header div h4 {
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 30px;
    letter-spacing: 0.26px;
    text-transform: uppercase;
    color: var(--primary-dark);
  }
  .table-row {
    &.flex {
      padding: 16px 0;
      .status {
        span {
          font-style: normal;
          font-weight: 500;
          font-size: 10px;
          line-height: 18px;
          display: flex;
          align-items: center;
          letter-spacing: 0.26px;
          text-transform: uppercase;
          color: #ffffff;
          padding: 3px 8px;
          display: inline-block;
          border-radius: 14px;
          &.open {
            background: var(--blue);
          }
          &.feedback {
            background: var(--feedback-bg);
          }
          &.resolved {
            background: var(--success-bg);
          }
        }
      }
      .replies {
        display: flex;
        align-items: center;
        column-gap: 5px;
        img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }
        p {
          font-style: normal;
          font-weight: 400;
          font-size: 13px;
          line-height: 30px;
          letter-spacing: 0.26px;
          text-transform: capitalize;
          color: var(--primary-text);
          padding-right: 10px;
        }
        .reply-flex {
          display: flex;
          align-items: center;
          column-gap: 5px;
          div p {
            font-style: normal;
            font-weight: 700;
            font-size: 10px;
            line-height: 12px;
            letter-spacing: 0.26px;
            text-transform: uppercase;
            color: var(--primary-dark);
            padding: 5px 8px;
            background: var(--border);
            border-radius: 2px;
            position: relative;
            &:after {
              position: absolute;
              content: "";
              width: 0;
              height: 0;
              left: 0;
              border-style: solid;
              border-width: 8px 8px 8px 0;
              border-color: transparent var(--border) transparent transparent;
              border-radius: 2px;
              top: 50%;
              transform: translate(-60%, -50%);
            }
          }
          span {
            background: var(--border);
            border-radius: 13px;
            display: inline-block;
            padding: 3px 8px;
            font-style: normal;
            font-weight: 500;
            font-size: 10px;
            line-height: 12px;
            letter-spacing: 0.26px;
            text-transform: uppercase;
            color: var(--primary-dark);
            display: flex;
            align-items: center;
            column-gap: 3px;
          }
        }
      }
      .date {
        span {
          font-style: normal;
          font-weight: 400;
          font-size: 13px;
          line-height: 30px;
          letter-spacing: 0.26px;
          text-transform: capitalize;
          color: var(--primary-text);
        }
      }
      .ticket {
        h4 {
          font-style: normal;
          font-weight: 700;
          font-size: 15px;
          line-height: 30px;
          line-height: 20px;
          margin-bottom: 4px;
          letter-spacing: 0.26px;
          text-transform: capitalize;
          color: var(--blue);
          width: 100%;
        }
        p {
          font-style: normal;
          font-weight: 500;
          font-size: 13px;
          line-height: 20px;
          letter-spacing: 0.26px;
          text-transform: capitalize;
          color: var(--primary-text);
        }
      }
    }
  }
`;
