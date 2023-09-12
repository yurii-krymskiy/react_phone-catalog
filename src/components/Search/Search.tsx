import { useLocation, useSearchParams } from 'react-router-dom';
// import { useCallback } from 'react';
import './Search.scss';
// import debounce from 'lodash.debounce';
import searcIcon from '../../images/icons/Search.svg';
import closeIcon from '../../images/icons/Close_black.svg';
import { getSearchWith } from '../../helpers/searchHelpers';

export const Search = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const { pathname } = location;

  const searchField = pathname.slice(1);

  const query = searchParams.get('query') || '';

  const onQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams(
      getSearchWith(searchParams, { query: event.target.value || null }),
    );
  };

  const handleClearSearch = () => {
    setSearchParams('');
  };

  return (
    <div className="search">

      <label
        className="search__label"
      >
        <input
          placeholder={`Search in ${searchField}...`}
          type="text"
          className="search__input"
          value={query}
          onChange={onQueryChange}
        />
      </label>

      <button
        type="button"
        className="searck__button"
        onClick={handleClearSearch}
        data-cy="searchDelete"
      >
        {query ? (
          <img src={closeIcon} alt={closeIcon} />
        ) : (
          <img src={searcIcon} alt={searcIcon} />
        )}
      </button>
    </div>
  );
};
