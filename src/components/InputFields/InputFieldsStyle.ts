import styled from "styled-components";

export const InputStyle = styled.div`
  label {
    position: relative;
    display: block;
    width: 100%;
    height: 40px;
    margin-top: 15px;
    input {
      background: var(--default-bg);
      border: 1px solid var(--default-bg);
      border-radius: 23px;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      padding-left: 44px;
      top: 0;
      width: 100%;
      transition: all 0.3s;
      padding-right: 16px;
      &:focus {
        transition: all 0.3s;
        box-shadow: none;
        background: var(--white);
        outline: none;
        border: 1px solid var(--blue);
      }
    }
    button {
      background: none;
      border: none;
      position: absolute;
      top: 50%;
      left: 20px;
      height: 14px;
      width: 14px;
      display: flex;
      align-items: center;
      cursor: pointer;
      transform: translate(0, -50%);
      &:focus {
        box-shadow: none;
        outline: none;
      }
    }
  }
`;
