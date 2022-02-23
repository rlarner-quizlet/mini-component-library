/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    height: 8,
    padding: 0,
    radius: 4,
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4,
    
  },
  large: {
    height: 16,
    padding: 4,
    radius: 8,
  }
}
//#region CSS
const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
  border-radius: var(--radius);
  padding: var(--padding)
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden; /* trim corners when progress bar near full */
`;

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`;
//#endregion

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];
  if (!styles) throw new Error(`Unknown size passes to ProgressBar: ${size}`);
  const { height, padding, radius } = styles;
  console.log('height', height);
  return <Wrapper 
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax={100}
      role="progressbar"
      style={{'--padding': padding + 'px', '--radius': radius + 'px'}}
    >
    <VisuallyHidden>{value}</VisuallyHidden>
    <BarWrapper>
      <Bar style={{ '--width': value + '%', '--height': height + 'px' }} />
    </BarWrapper>
    </Wrapper>;
};

export default ProgressBar;
