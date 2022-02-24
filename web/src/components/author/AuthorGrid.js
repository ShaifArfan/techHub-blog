import React from 'react';
import { AuthorGridStyles } from '../../styles/author/AuthorGridStyles';
import AuthorItem from './AuthorItem';

function AuthorGrid({ authors }) {
  return (
    <AuthorGridStyles>
      {authors.map((item) => (
        <AuthorItem
          key={item.id}
          name={item.name}
          slug={item.slug}
          profileImage={item.profileImage}
        />
      ))}
    </AuthorGridStyles>
  );
}

export default AuthorGrid;
