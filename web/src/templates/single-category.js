import { graphql } from 'gatsby';
import React from 'react';

export const query = graphql`
  query SingleCategory($id: String!) {
    sanityCategory(id: { eq: $id }) {
      title
    }
  }
`;

function SingleCategory({ data, errors }) {
  if (errors) {
    console.log(errors);
  }

  return (
    <div>
      <h1>This is single category</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default SingleCategory;
