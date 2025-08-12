import { useState } from "react";
import styles from "./search.module.scss";

const users = [{ name: "David" }, { name: "Ann" }, { name: "Daniel" }];

export const SearchWithOnChange = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchUser = searchTerm
    ? users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : users;

  return (
    <div className={styles.search}>
      <h1>Search with onChange</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by name"
      />
      <ul>
        {searchUser.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

