import styled, { keyframes } from 'styled-components';

export const LoadingMessageWrapper = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ellipsis = keyframes`
  to {
    width: 1.25em;
  }
`;

export const LoadingMessage = styled.div`
  font-size: 1.3em;
  &:after {
    overflow: hidden;
    display: inline-block;
    vertical-align: bottom;
    -webkit-animation: ${ellipsis} steps(4,end) 900ms infinite;
    animation: ${ellipsis} steps(4,end) 900ms infinite;
    content: "\2026";
    width: 0px;
  }
`;
