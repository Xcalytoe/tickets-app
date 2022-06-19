import styled from "styled-components";

export const GetHelpContainer = styled.section`
  &.support {
    max-width: 1050px;
    margin: auto;
    background: var(--white);
    border-radius: 4px;
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
          column-gap: 20px;
        }
        p {
          font-style: normal;
          font-weight: 700;
          font-size: 15px;
          line-height: 30px;
          letter-spacing: 0.26px;
          color: var(--primary-dark);
        }
        button {
          font-style: normal;
          font-weight: 700;
          font-size: 13px;
          line-height: 15px;
          color: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          column-gap: 5px;
          height: 40px;
          background: var(--blue);
          border: 1px solid var(--blue);
          border-radius: 4px;
          padding-left: 25px;
          padding-right: 25px;
          cursor: pointer;
          transition: all 0.3s;
          &:hover {
            transition: all 0.3s;
            background: var(--white);
            color: var(--blue);
            svg path {
              fill: var(--blue);
            }
          }
          &:focus {
            box-shadow: none;
            outline: none;
          }
        }
        a {
          font-style: normal;
          font-weight: 400;
          font-size: 13px;
          line-height: 20px;
          letter-spacing: 0.26px;
          text-transform: capitalize;
          color: var(--primary-text);
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    &-icon {
    }
    main {
      padding-top: 80px;
      padding-bottom: 80px;
      text-align: center;
      h4 {
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 35px;
        letter-spacing: 0.26px;
        color: var(--primary-dark);
        margin-top: 10px;
        margin-bottom: 10px;
      }
      p {
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 30%;
        letter-spacing: 0.26px;
        color: var(--primary-text);
        margin-bottom: 10px;
      }
      a {
        font-style: normal;
        font-weight: 700;
        font-size: 11px;
        line-height: 18px;
        letter-spacing: 0.26px;
        text-transform: uppercase;
        color: var(--blue);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        column-gap: 5px;
      }
    }
  }
  .form {
    max-width: 370px;
    margin: auto;
  }
`;
