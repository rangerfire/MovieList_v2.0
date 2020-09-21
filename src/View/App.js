import React from 'react';
import '../Styles/App.css';
import SideNav from "./sideNav";
function App() {
  const [page, setPage] = React.useState(0);
  const handleClick = React.useCallback((v) => {
    setPage(v);
  }, []);
  let currentPage = null;
  if (page === 0) {
    currentPage = <HomePage />;
  } else if (page === 1) {
    currentPage = null;
  } else if (page === 2) {
    currentPage = null;
  } else if (page === 3) {
    currentPage = null;
  }
  return (
    <div className="App">
      <SideNav onPageChange={handleClick} />
      <div className={"main"}>
        <h1>Our Top Rated Movie List</h1>
        {currentPage}
      </div>
    </div>
  );
}

export default App;
