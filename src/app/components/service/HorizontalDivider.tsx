import React from 'react';
import styled from 'styled-components';

const HorizontalDividerDiv = styled.div`
  gap: 0.625rem;

  width: 100vw;
  height: 0.225rem;

  background: linear-gradient(89.8deg, #4B91FA 0.09%, #1C2CBE 99.74%);
  border: 1px solid #000000;
  border-radius: 5px;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  margin-left: 1.25rem;
  margin-right: 1.25rem;
`;

export default function HorizontalDivider() {
    return(<HorizontalDividerDiv />);
}
