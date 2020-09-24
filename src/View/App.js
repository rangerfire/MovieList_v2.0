import React from 'react';
import '../Styles/App.css';
import '../Styles/Liked_Blocked_Page.css'
import SideNav from "./sideNav";
import HomePage from "./homePage";
import MovieListPage from "./MovieListPage";
import LikedListPage from './LikedListPage';
import BlockedListPage from './BlockedListPage';

function App() {
  const [page, setPage] = React.useState(0);
  const handleClick = React.useCallback((v) => {
    setPage(v);
  }, []);
  let currentPage = null;
  if (page === 0) {
    currentPage = <HomePage />;
  } else if (page === 1) {
    currentPage = <MovieListPage />;
  } else if (page === 2) {
    currentPage = <LikedListPage />;
  } else if (page === 3) {
    currentPage = <BlockedListPage />;
  }
  return (
    <div className="App">
      <SideNav onPageChange={handleClick} />
      <div className={"main"}>
        <header>Our Top Rated Movie List</header>
        {currentPage}
      </div>
    </div>
  );
}

export default App;
