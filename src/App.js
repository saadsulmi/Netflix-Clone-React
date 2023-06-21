import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {action, newrelease,originals,toprated} from './URLs'
function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='netflix originals' isMain />
      <RowPost url={newrelease} title='new release' />
      <RowPost url={toprated} title='Top Rated' />
      <RowPost url={action} title='ACTION MOVIES' />
    </div>
  );
}

export default App;
