import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);