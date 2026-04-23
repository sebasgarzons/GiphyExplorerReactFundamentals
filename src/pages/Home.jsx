import { useState, useEffect } from 'react'
import { searchGifs } from '../services/giphyApi'
import  GifContainer  from '../components/GifContainer'
import SearchBar from '../components/SearchBar'

function Home() {
  const [gifs, setGifs] = useState([])
  const [search, setSearch] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  async function handleSearch() {
    const results = await searchGifs(search)
    setGifs(results)
    setHasSearched(true);
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

export default Home