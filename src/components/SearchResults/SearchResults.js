import './SearchResults.css'

function SearchResults(){
    const items = ['Item 1', 'Item 2', 'Item 3','Item 1', 'Item 2', 'Item 3','Item 1', 'Item 2', 'Item 3','Item 1', 'Item 2', 'Item 3'];


    return(
        <div className='SearchResults'>
            <h2>Results</h2>
            <ul>
                {items.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default SearchResults; 