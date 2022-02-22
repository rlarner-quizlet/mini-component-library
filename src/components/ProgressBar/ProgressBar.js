/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const MAX_WIDTH_PIXELS = 370;
const HEIGHTS = {
  'small': {
    inner: '8px',
    outer: '8px',
  },
  'medium': {
    inner: '12px',
    outer: '12px',
  },
  'large': {
    inner: '16px',
    outer: '24px',
  },
}

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
  border-radius: 8px;
  height: ${p => HEIGHTS[p.size].outer || '24px'};
  width: ${MAX_WIDTH_PIXELS}px;
  `;

const CurrentProgress = styled.div`
  background-color: ${COLORS.primary};
  border-radius: 4px 0px 0px 4px;
  height: ${p => HEIGHTS[p.size].inner || '24px'};
  padding: 4px;
  width: ${(p => p.value / 100 * MAX_WIDTH_PIXELS)}px;
`;

const ProgressBar = ({ value, size }) => {
  return <Wrapper aria-valuenow={value} aria-valuemin="0" aria-valuemax={100} role="progressbar" size={size}>
      <CurrentProgress size={size} value={value} />
    </Wrapper>;
};

export default ProgressBar;
