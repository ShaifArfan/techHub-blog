import React from 'react';
import { CategoryGridStyles } from '../styles/categoryGridStyles';
import CategoryItem from './CategoryItem';

function CategoryGrid({ categories }) {
  return (
    <div className="container">
      <CategoryGridStyles>
        {categories.map((item) => (
          <CategoryItem
            key={item._id}
            title={item.title}
            description={item._rawDescription}
            slug={item.slug}
          />
        ))}
      </CategoryGridStyles>
    </div>
  );
}

export default CategoryGrid;
