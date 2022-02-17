import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import BlogGrid from '../components/BlogGrid';
import PageHeader from '../components/PageHeader';
import SEO from '../components/seo';
import PageSpace from '../components/PageSpace';

function Blogs() {
  const data = useStaticQuery(graphql`
    {
      allSanityBlog {
        nodes {
          _id
          title
          slug {
            current
          }
          categories {
            title
            slug {
              current
            }
          }
          coverImage {
            alt
            asset {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);
  const blogs = data.allSanityBlog.nodes;
  console.log(blogs);
  return (
    <>
      <SEO title="Blogs" />
      <PageSpace top={50} bottom={100}>
        <PageHeader
          title="All Blog Posts"
          description="This month will bring about the 88th Academy Awards. Starting in 1928, this prestigious award ceremony..."
        />
        <BlogGrid blogs={blogs} />
      </PageSpace>
    </>
  );
}

export default Blogs;
