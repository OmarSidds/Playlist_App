import './SearchBar.css';

function SearchBar(){
    return(
        <div className='SearchBar'>
            <input className='SearchInput' type="text" placeholder="Search Artist..."/>
            <button className='ButtonInput' type='button'>Search</button>
        </div>
    );
}

export default SearchBar;