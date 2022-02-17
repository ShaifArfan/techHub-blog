import styled from 'styled-components';

export const PageSpaceStyles = styled.div`
  padding-top: ${(props) => props.top || 100}px;
  padding-bottom: ${(props) => props.bottom || 100}px;
`;
