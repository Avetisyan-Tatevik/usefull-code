import { useRef, useState } from "react";
import styles from "./search.module.scss";

const users = [{ name: "David" }, { name: "Ann" }, { name: "Daniel" }];

export const SearchWithUseRef = () => {
  const inputRef = useRef(null);
  const [searchResults, setSearchResults] = useState(users);

  const handleSearch = () => {
    const searchTerm = inputRef.current?.value || "";

    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredUsers);
  };

  return (
    <div className={styles.search}>
      <h1>Search with UseRef</h1>
      <input ref={inputRef} placeholder="Search by name" />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {searchResults.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
