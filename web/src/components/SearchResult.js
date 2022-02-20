import React from 'react';
import { useFlexSearch } from 'react-use-flexsearch';
import {
  BlogSearchResultItem,
  CategorySearchResultItem,
} from './search/SearchResultItem';
import ParagraphText from './typography/ParagraphText';

function SearchResult({ searchQuery, blogsIndexStore, categoriesIndexStore }) {
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
    </>
  );
}

export default SearchResult;
