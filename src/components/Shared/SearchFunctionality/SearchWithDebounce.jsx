import { useState, useCallback, useRef } from "react";
import styles from "./search.module.scss";

const users = [{ name: "David" }, { name: "Ann" }, { name: "Daniel" }];

export const SearchWithDebounce = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);
  const debounceTimeout = useRef(null);

  const handleChange = useCallback((e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = setTimeout(() => {
      const filtered = users.filter((user) =>
        user.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredUsers(filtered);
    }, 500);
  }, []);

  return (
    <div className={styles.search}>
      <h1>Search with debounce (useCallback)</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search by name"
      />
      <ul>
        {filteredUsers.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
