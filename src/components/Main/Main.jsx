import React from "react";
import styles from "./main.module.scss";
import { SearchWithOnChange } from "../Shared/SearchFunctionality/SearchWithOnChange";
import { SecondSearch } from "../Shared/SearchFunctionality/SearchWithOnChange";
import { SearchWithUseRef } from "../Shared/SearchFunctionality/SearchWithUseRef";
import { SearchWithDebounce } from "../Shared/SearchFunctionality/SearchWithDebounce";
import SearchWithLodash from "../Shared/SearchFunctionality/SearchWithLodashDebounce";

const Main = () => {
  return (
    <div className={styles.mainWrapper}>
      <SearchWithOnChange />
      <SearchWithUseRef />
      <SearchWithDebounce />
      <SearchWithLodash />
      <SecondSearch />
    </div>
  );
};

export default Main;
