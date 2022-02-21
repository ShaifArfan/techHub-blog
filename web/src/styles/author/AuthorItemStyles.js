import { Link } from 'gatsby';
import styled from 'styled-components';

export const AuthorItemStyles = styled(Link)`
  background-color: var(--black-2);
  border-radius: 8px;
  padding: 1.5rem;
  gap: 1rem;
  display: flex;
  align-items: center;
  .profileImage {
    height: 30px;
    width: 30px;
    border-radius: 50%;
  }
`;
