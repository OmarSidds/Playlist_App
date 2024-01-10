import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

function App() {
/*
  const containerStyle = {
    display: 'flex', 
    justifyContent: 'center',  
    alignItems: 'center',
  };
*/
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
}

export default App;
