import { useContext } from 'react'
import { FavoritesContext } from '../context/FavoritesContext';


function Favorites() {
  
    const { favorites, removeFavorites } = useContext(FavoritesContext);

    const listFavorites = favorites.map(({ id, images })  => {
        return(
            <aside key={id} className="gif_cont_box flex">
                <img src={images.fixed_height.url} ></img>
            </aside>
        )    
    });
  
    return(
        <div className="flex flex-col w-[88%] m-auto">
            <button className="favoritesButton" onClick={() => removeFavorites()}>Eliminar Favoritos</button>
            <aside className='container_gifs_gallery w-full'>
                {listFavorites}
            </aside>
        </div>
    )
}

export default Favorites
