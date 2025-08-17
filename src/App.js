import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";

const SearchTypes = lazy(() => import("./pages/Search/SearchTypes.jsx"));
const UserRequests = lazy(() =>
  import("./pages/UserRequests/UserRequests.jsx")
);

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/search-types" element={<SearchTypes />} />
          <Route path="/user-requests" element={<UserRequests />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
