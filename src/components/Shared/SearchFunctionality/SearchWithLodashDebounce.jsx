import { useState, useCallback } from "react";
import { debounce } from "lodash";
import styles from "./search.module.scss";

const users = [{ name: "David" }, { name: "Ann" }, { name: "Daniel" }];

function SearchWithLodash() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState(users);

  const debounceSearch = useCallback(
    debounce((value) => {
      const filtered = users.filter((user) =>
        user.name.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filtered);
    }, 300),
    []
  );

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    debounceSearch(value); // Debounced call
  };

  return (
    <div className={styles.search}>
      <h1>Search with Lodash</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search..."
      />
      {results.map((value, index) => {
        return <p key={index}>{value.name}</p>;
      })}
    </div>
  );
}

export default SearchWithLodash;
