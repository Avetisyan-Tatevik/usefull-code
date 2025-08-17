import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/search-types">Search Types</Link>
      <Link to="/user-requests">User Requests</Link>
    </div>
  );
};

export default Header;
