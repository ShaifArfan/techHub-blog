import axios from 'axios';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useContext, useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';

import { SearchModalContext } from '../../contexts/searchModalContext';
import { SearchModalStyles } from '../../styles/search/SearchModalStyles';
import ActionButton from '../buttons/ActionButton';
import SearchResult from '../SearchResult';
import SearchField from './SearchField';
import BlogSearchResultItem from './SearchResultItem';

const query = graphql`
  {
    localSearchBlogs {
      publicStoreURL
      publicIndexURL
    }
    localSearchCategories {
      publicStoreURL
      publicIndexURL
    }
  }
`;

function Search() {
  const { isSearchModalOpen } = useContext(SearchModalContext);
  const [searchQuery, setSearchQuery] = useState('');
  const { closeSearchModal } = useContext(SearchModalContext);
  const [blogsIndexStore, setBlogsIndexStore] = useState(null);
  const [categoriesIndexStore, setCategoriesIndexStore] = useState(null);
  const data = useStaticQuery(query);

  useEffect(() => {
    if (isSearchModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'initial';
    }
  }, [isSearchModalOpen]);

  const {
    publicStoreURL: blogsPublicStoreURL,
    publicIndexURL: blogsPublicIndexURL,
  } = data.localSearchBlogs;
  const {
    publicStoreURL: categoriesPublicStoreURL,
    publicIndexURL: categoriesPublicIndexURL,
  } = data.localSearchCategories;

  const handleOnFocus = async () => {
    if (blogsIndexStore && categoriesIndexStore) return;
    const [
      { data: blogsIndex },
      { data: blogsStore },
      { data: categoriesIndex },
      { data: categoriesStore },
    ] = await Promise.all([
      axios.get(`${blogsPublicIndexURL}`),
      axios.get(`${blogsPublicStoreURL}`),
      axios.get(`${categoriesPublicIndexURL}`),
      axios.get(`${categoriesPublicStoreURL}`),
    ]);
    setBlogsIndexStore({
      index: blogsIndex,
      store: blogsStore,
    });
    setCategoriesIndexStore({
      index: categoriesIndex,
      store: categoriesStore,
    });
  };

  if (!isSearchModalOpen) return null;
  return (
    <SearchModalStyles>
      <div className="modal__container">
        <ActionButton className="close" onClick={() => closeSearchModal()}>
          <MdClose />
        </ActionButton>
        <SearchField
          value={searchQuery}
          setValue={setSearchQuery}
          onFocus={handleOnFocus}
        />
        {searchQuery && blogsIndexStore && categoriesIndexStore && (
          <div className="search__result">
            <SearchResult
              searchQuery={searchQuery}
              blogsIndexStore={blogsIndexStore}
              categoriesIndexStore={categoriesIndexStore}
            />
          </div>
        )}
      </div>
    </SearchModalStyles>
  );
}

export default Search;
