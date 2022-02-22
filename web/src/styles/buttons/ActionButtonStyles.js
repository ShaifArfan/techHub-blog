import styled from 'styled-components';

export default styled.div`
  cursor: pointer;
  border: 2px solid var(--primary);
  padding: 0.6rem;
  border-radius: 8px;
  color: var(--primary);
  transition-property: color, background-color;
  transition: 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
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
  @media only screen and (max-width: 768px) {
    padding: 0.5rem;
    svg {
      font-size: 1.8rem;
    }
  }
`;
