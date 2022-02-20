import React from 'react';
import MyPortableText from './MyPortableText';
import Button from './buttons/Button';
import { buttonType } from '../constants/buttonTypes';
import { CategoryItemStyles } from '../styles/CategoryItemStyles';
import { Title } from './typography/Title';

function CategoryItem({ title, description, slug }) {
  return (
    <CategoryItemStyles>
      <Title className="title">{title}</Title>
      <div className="text">
        <MyPortableText value={description} />
      </div>
      <Button to={`/categories/${slug.current}`} variant={buttonType.outline}>
        Explore Category
      </Button>
    </CategoryItemStyles>
  );
}

export default CategoryItem;
