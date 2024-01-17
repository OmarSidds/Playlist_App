import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import React, { useState } from 'react';


function App() {

  const arrSearch = [
    {
      name: 'Hard to explain',
      artist: 'The Strokes',
      album: 'Is this it',
      id: 1
    },
    {
      name: 'Still into You',
      artist: 'Paramore',
      album: 'Paramore',
      id: 2
    },
    {
      name: 'Chocolate',
      artist: 'The 1975',
      album: 'The 1975',
      id: 3
    }
  ];

  const [search_res, setSearch_res] = useState(null);

  const handleChange = (event) => {
    // Update the state with the new input value
    setSearch_res();
  };



  return (
    <div>
      <nav className="navBar">
        <h1>Jammming</h1>
      </nav>
      <div className='App'>
        <SearchBar />
        <div className='App-playlist'>
          <SearchResults />
          <Playlist />
        </div>
      </div>
    </div>
  );
};

export default App;
