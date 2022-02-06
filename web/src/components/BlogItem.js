import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { BlogItemStyles } from '../styles/BlogItemStyles';
import ParagraphText from './typography/ParagraphText';

function BlogItem({ path, title, image }) {
  return (
    <BlogItemStyles to={`blogs/${path}`}>
      <GatsbyImage
        image={image.imageData}
        alt={image.altText}
        className="img"
      />
      <h4 className="title">{title}</h4>
      <ParagraphText>News, Technology, Space</ParagraphText>
    </BlogItemStyles>
  );
}

export default BlogItem;
