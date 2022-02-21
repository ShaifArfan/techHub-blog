import styled from 'styled-components';

export default styled.div`
  cursor: pointer;
  border: 2px solid var(--primary);
  padding: 0.6rem;
  border-radius: 8px;
  color: var(--primary);
  transition-property: color, background-color;
  transition: 0.3s ease;
  svg {
    font-size: 2.5rem;
  }
  * {
    pointer-events: none;
  }
  &:hover {
    background-color: var(--primary);
    color: var(--white-1);
  }
`;
