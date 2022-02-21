import React from 'react';
import { useFlexSearch } from 'react-use-flexsearch';
import {
  AuthorSearchResultItem,
  BlogSearchResultItem,
  CategorySearchResultItem,
} from './search/SearchResultItem';
import ParagraphText from './typography/ParagraphText';

function SearchResult({
  searchQuery,
  blogsIndexStore,
  categoriesIndexStore,
  authorsIndexStore,
}) {
  const blogsResult = useFlexSearch(
    searchQuery,
    JSON.stringify(blogsIndexStore.index),
    blogsIndexStore.store
  );
  const categoriesResult = useFlexSearch(
    searchQuery,
    JSON.stringify(categoriesIndexStore.index),
    categoriesIndexStore.store
  );
  const authorsResult = useFlexSearch(
    searchQuery,
    JSON.stringify(authorsIndexStore.index),
    authorsIndexStore.store
  );

  console.log({ authorsResult });

  if (
    blogsResult.length === 0 &&
    categoriesResult.length === 0 &&
    authorsResult.length === 0
  ) {
    return <ParagraphText>No Result Found.</ParagraphText>;
  }

  return (
    <>
      {blogsResult.length > 0 && (
        <>
          <ParagraphText>Blogs</ParagraphText>
          {blogsResult.map((result) => (
            <BlogSearchResultItem blog={result} />
          ))}
        </>
      )}
      {categoriesResult.length > 0 && (
        <>
          <ParagraphText>Categories</ParagraphText>
          {categoriesResult.map((result) => (
            <CategorySearchResultItem category={result} />
          ))}
        </>
      )}
      {authorsResult.length > 0 && (
        <>
          <ParagraphText>Authors</ParagraphText>
          {authorsResult.map((result) => (
            <AuthorSearchResultItem author={result} />
          ))}
        </>
      )}
    </>
  );
}

export default SearchResult;
