import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AssetSearch from "./routers/AssetSearch";
import NotFound from "./routers/NotFound";

function App() {
  return (
    <Router>
      {/*  <nav>
        <ul>
          <li>
            <Link to="/assetSearch">Asset search</Link>
          </li>
        </ul>
      </nav>  */}
      <div>
      <Routes>
       
        <Route path="/assetSearch"   element={ <AssetSearch />} />
        <Route errorElement={ <NotFound />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
