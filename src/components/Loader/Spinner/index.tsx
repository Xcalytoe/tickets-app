import React from 'react';
import { StyledSpinner } from './Spinner.styled';

function Spinner({
  colorLight,
  colorDark,
}: {
  colorLight: string;
  colorDark: string;
}) {
  return (
    <StyledSpinner
      colorDark={colorDark}
      colorLight={colorLight}
    ></StyledSpinner>
  );
}

export default Spinner;
