import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
import { FavoritesProvider } from './context/FavoritesContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <FavoritesProvider>
        <App />
    </FavoritesProvider>
)
