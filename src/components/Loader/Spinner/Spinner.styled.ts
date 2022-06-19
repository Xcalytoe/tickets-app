import styled from 'styled-components';

export const StyledSpinner = styled.div<{
  colorDark?: string;
  colorLight?: string;
}>`
  display: inline-block;
  width: 25px;
  height: 25px;
  border: 3px solid ${({ colorLight }) => colorLight};
  border-radius: 50%;
  border-top-color: ${({ colorDark }) => colorDark};
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
