import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PageSpace from '../components/PageSpace';
import SEO from '../components/seo';
import PageHeader from '../components/PageHeader';
import CategoryGrid from '../components/CategoryGrid';

function Categories() {
  const data = useStaticQuery(graphql`
    {
      allSanityCategory(sort: { fields: _createdAt, order: DESC }) {
        nodes {
          _id
          title
          slug {
            current
          }
          _rawDescription
        }
      }
    }
  `);

  const categories = data.allSanityCategory.nodes;
  console.log(categories);
  return (
    <>
      <SEO title="Categories" />
      <PageSpace top={50} bottom={100}>
        <PageHeader
          title="All Categories"
          description="This month will bring about the 88th Academy Awards. Starting in 1928, this prestigious award ceremony..."
        />
        <CategoryGrid categories={categories} />
      </PageSpace>
    </>
  );
}

export default Categories;
