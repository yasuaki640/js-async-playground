import './App.css';
import React from "react";
import {SearchForm} from "./components/SearchForm";


function App() {
  return (
      <div className='App'>
        <h1>Search Your Favorite Newssssss!!!!!!</h1>
        <p>Enter news info you looking for.</p>
          <SearchForm/>
      </div>
  );
}

export default App;
