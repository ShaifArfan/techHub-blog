import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { BlogItemStyles } from '../styles/BlogItemStyles';
import ParagraphText from './typography/ParagraphText';
import { Title } from './typography/Title';

function BlogItem({ path, title, image, categories }) {
  return (
    <BlogItemStyles to={`/blogs/${path}`}>
      <GatsbyImage
        image={image.imageData}
        alt={image.altText}
        className="img"
      />
      <Title className="title">{title}</Title>
      <ParagraphText className="categoriesText">
        {categories.map((item, index) => (
          <>
            <Link to={`/categories/${item.slug.current}`}>{item.title}</Link>
            {index < categories.length - 1 ? ', ' : ''}
          </>
        ))}
      </ParagraphText>
    </BlogItemStyles>
  );
}

export default BlogItem;
