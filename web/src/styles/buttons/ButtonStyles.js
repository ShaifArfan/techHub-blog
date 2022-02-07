import { Link } from 'gatsby';
import styled from 'styled-components';
import { buttonType } from '../../constants/buttonTypes';

export const ButtonStyles = styled(Link)`
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: none;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-size: 1.6rem;
  background: ${({ variant }) =>
    variant === buttonType.primary
      ? 'linear-gradient(135deg, var(--secondary), var(--primary))'
      : variant === buttonType.secondary
      ? 'var(--white-1)'
      : 'transparent'};
  border: ${({ variant }) =>
    variant === buttonType.outline ? '2px solid var(--primary)' : 'none'};
  color: ${({ variant }) =>
    variant === buttonType.secondary ? 'var(--black-1)' : 'var(--white)'};
  @media only screen and (max-width: 768px) {
    padding: 0.8rem 1.2rem;
    font-size: 1.4rem;
  }
`;
