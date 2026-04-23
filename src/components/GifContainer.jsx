import { useContext } from 'react'
import { FavoritesContext } from '../context/FavoritesContext';


function GifContainer({gifs, hasSearched}) {

    const { addFavorite, favorites } = useContext(FavoritesContext)
    const listGifs = gifs.map(gif => {
        const isFavorite = favorites.some(fav => fav.id === gif.id)
        return(
            <article key={gif.id} className="gif_cont_box flex">
                <img src={gif.images.fixed_height.url} ></img>
                <button onClick={() => addFavorite(gif)} className="favorites_heart"><i className={`bx ${isFavorite ? 'bx-bookmark-heart' : 'bx-heart'}`}></i></button>
            </article>
        )    
    });




        if (!hasSearched){
            return <p className='text-center'>Inserte su búsqueda</p>;
        } else if(hasSearched && !gifs.length) {
            return <p>No se han encontrado resultados, intente insertar un valor</p>;
        } else if (gifs.length > 0){
            return <aside className='container_gifs_gallery'>
                {listGifs}
            </aside>;
        }
        

}

export default GifContainer