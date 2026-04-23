

function SearchBar({ onSearch }) {
  
  return(
  
    <div className="cont_search_bar flex items-center">
      <input className="search_bar" type="search" onChange={e => onSearch(e.target.value)} placeholder="Gatos" />
      <i class="bx bx-search" />
    </div>

  );
}

export default SearchBar
