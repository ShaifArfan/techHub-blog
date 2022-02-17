import { Link } from 'gatsby';
import styled from 'styled-components';

export const BlogItemStyles = styled(Link)`
  display: inline-block;
  cursor: pointer;
  border-radius: 12px;
  .img {
    height: 250px;
    margin-bottom: 1.5rem;
    border-radius: 12px;
    transition: 0.3s ease-in-out transform;
  }
  .title {
    margin-bottom: 1rem;
  }
  &:hover {
    .img {
      transform: scale(1.05);
    }
  }
  .categoriesText {
    a {
      color: var(--gray);
      &:hover {
        text-decoration: underline;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .title {
      margin-bottom: 0.5rem;
    }
  }
`;
