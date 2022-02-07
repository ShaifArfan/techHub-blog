import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { TopCategoriesStyles } from '../../styles/homePage/TopCategoriesStyles';
import CategoryItem from '../CategoryItem';
import ParagraphText from '../typography/ParagraphText';
import { SectionTitle } from '../typography/Title';

function TopCategories() {
  const data = useStaticQuery(graphql`
    {
      allSanityFeatured(filter: { _id: { eq: "featuredItems" } }) {
        nodes {
          category {
            _id
            title
            slug {
              current
            }
            _rawDescription
          }
        }
      }
    }
  `);
  const categories = data.allSanityFeatured.nodes[0].category;
  return (
    <TopCategoriesStyles>
      <div className="container">
        <SectionTitle>Top Categories</SectionTitle>
        <ParagraphText className="info">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
          veniam fuga minima.
        </ParagraphText>
        <div className="topCategories__wrapper">
          {categories.map((item) => (
            <CategoryItem
              key={item._id}
              title={item.title}
              description={item._rawDescription}
              slug={item.slug}
            />
          ))}
        </div>
      </div>
    </TopCategoriesStyles>
  );
}

export default TopCategories;
