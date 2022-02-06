import { Link } from 'gatsby';
import styled from 'styled-components';

export const BlogItemStyles = styled(Link)`
  display: inline-block;
  cursor: pointer;
  border-radius: 12px;
  .img {
    width: 100%;
    max-height: 300px;
    margin-bottom: 1.5rem;
    border-radius: 12px;
    transition: 0.3s ease-in-out transform;
  }
  .title {
    font-size: 2rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  &:hover {
    .img {
      transform: scale(1.05);
    }
  }
`;
