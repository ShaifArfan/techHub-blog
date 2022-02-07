import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { FeaturedBlogsStyles } from '../../styles/homePage/FeaturedBlogsStyles';
import BlogItem from '../BlogItem';
import ParagraphText from '../typography/ParagraphText';
import { SectionTitle } from '../typography/Title';

function FeaturedBlogs() {
  const data = useStaticQuery(graphql`
    {
      allSanityFeatured(filter: { _id: { eq: "featuredItems" } }) {
        nodes {
          blogs {
            _id
            title
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
            slug {
              current
            }
          }
        }
      }
    }
  `);
  const featuredBlogs = data.allSanityFeatured.nodes[0].blogs;
  return (
    <FeaturedBlogsStyles>
      <div className="container">
        <SectionTitle>Featured Blogs</SectionTitle>
        <ParagraphText className="featuredBlogs__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          nemo ad provident consectetur quis eaque doloribus et, ducimus earum
          iste est corporis
        </ParagraphText>
        <div className="featuredBlogs__container">
          {featuredBlogs &&
            featuredBlogs.map((blog) => (
              <BlogItem
                key={blog._id}
                path={blog.slug.current}
                title={blog.title}
                categories={blog.categories}
                image={{
                  imageData: blog.coverImage.asset.gatsbyImageData,
                  altText: blog.coverImage.alt,
                }}
              />
            ))}
        </div>
      </div>
    </FeaturedBlogsStyles>
  );
}

export default FeaturedBlogs;
