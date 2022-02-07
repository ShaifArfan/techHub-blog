import styled from 'styled-components';

export const FeaturedBlogsStyles = styled.div`
  padding: 5rem 0;
  .featuredBlogs__text {
    max-width: 450px;
  }
  .featuredBlogs__container {
    margin-top: 3.5rem;
    display: grid;
    gap: 5rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  @media only screen and (max-width: 768px) {
    .featuredBlogs__container {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 3rem;
    }
  }
`;
