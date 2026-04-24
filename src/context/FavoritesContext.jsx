import { createContext, useState, useEffect } from 'react';

export const FavoritesContext = createContext()


export function FavoritesProvider({ children }) {

    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || [])
    
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites]);

  const addFavorite = (gif) => {
      if (favorites.some(fav => fav.id === gif.id)){
          return
      }
      setFavorites([...favorites, gif])
  }

  const removeFavorites = () => {
    localStorage.removeItem('favorites')
    setFavorites([])
    };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorites }}>
      {children}
    </FavoritesContext.Provider>
  )
}