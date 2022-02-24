import React from 'react';
import { CategoryGridStyles } from '../../styles/category/CategoryGridStyles';
import CategoryItem from './CategoryItem';

function CategoryGrid({ categories }) {
  return (
    <CategoryGridStyles>
      {categories.map((item) => (
        <CategoryItem
          key={item.id}
          title={item.title}
          description={item._rawDescription}
          slug={item.slug}
        />
      ))}
    </CategoryGridStyles>
  );
}

export default CategoryGrid;
