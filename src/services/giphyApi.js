const API_KEY = import.meta.env.VITE_GIPHY_API_KEY
const BASE_URL = 'https://api.giphy.com/v1/gifs'

export async function searchGifs(query) {
  try {
    const response = await fetch(`${BASE_URL}/search?api_key=${API_KEY}&q=${query}&limit=20`)
    const data = await response.json()
    return { 
      data: data.data, 
      error: null
    }
  } catch (err) {
    return { 
      data: null, 
      error: 'Something went wrong' 
    }
  }
}