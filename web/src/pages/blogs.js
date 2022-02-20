import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/seo';
import PageSpace from '../components/PageSpace';
import BlogGrid from '../components/BlogGrid';
import MyPaginate from '../components/MyPaginate';

const BlogsQuery = graphql`
  {
    allSanityBlog(sort: { fields: publishedAt, order: DESC }) {
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
`;

function Blogs() {
  const data = useStaticQuery(BlogsQuery);
  const blogs = data.allSanityBlog.nodes;

  return (
    <>
      <SEO title="Blogs" />
      <PageSpace top={50} bottom={100}>
        <PageHeader
          title="All Blog Posts"
          description="This month will bring about the 88th Academy Awards. Starting in 1928, this prestigious award ceremony..."
        />
        <BlogGrid blogs={blogs} />
        <MyPaginate />
      </PageSpace>
    </>
  );
}

export default Blogs;
