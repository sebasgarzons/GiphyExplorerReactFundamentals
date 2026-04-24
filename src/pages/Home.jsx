import { useState, useEffect } from 'react'
import { searchGifs } from '../services/giphyApi'
import  GifContainer  from '../components/GifContainer'
import SearchBar from '../components/SearchBar'

function Home() {
  const [gifs, setGifs] = useState([])
  const [search, setSearch] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState(null)

  async function handleSearch() {
    const { data, error } = await searchGifs(search)
    if (error){
      setError(error) 
    }else{
      setGifs(data)
      setHasSearched(true);
    }
  }

useEffect(() => {
    if(!search){
        setHasSearched(false)
        return
    }
    const debounce = setTimeout(handleSearch, 500);
    /* setTimeout(() => handleSearch(search), 500) */
    return () => clearTimeout(debounce);
  }, [search]);

  if(error){
    return (
      <main>
        {error && <p>{error}</p>}
      </main>
    )
  }else{
    return (
      <main>
          <h1 className={!hasSearched ? 'visible title_home' : 'hidden-title title_home'}>Giphy Explorer</h1>
  
          <section className='w-[88%] m-auto'>
              <SearchBar onSearch={setSearch} />     
              <GifContainer gifs={gifs} hasSearched={hasSearched} />
          </section>       
      </main>
    )
  }
}

export default Home