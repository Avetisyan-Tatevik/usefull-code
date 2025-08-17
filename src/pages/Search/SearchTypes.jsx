import React from "react";
import styles from "../../components/Shared/SearchFunctionality/search.module.scss";
import { SearchWithOnChange } from "../../components/Shared/SearchFunctionality/SearchWithOnChange";
import { SearchWithUseRef } from "../../components/Shared/SearchFunctionality/SearchWithUseRef";
import { SearchWithDebounce } from "../../components/Shared/SearchFunctionality/SearchWithDebounce";
import SearchWithLodash from "../../components/Shared/SearchFunctionality/SearchWithLodashDebounce";

const SearchTypes = () => {
  return (
    <div className={styles.mainWrapper}>
      <SearchWithOnChange />
      <SearchWithUseRef />
      <SearchWithDebounce />
      <SearchWithLodash />
    </div>
  );
};

export default SearchTypes;
