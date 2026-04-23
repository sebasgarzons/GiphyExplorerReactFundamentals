import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <nav>
      <Link className="nav_item" to="/">Home</Link>
      <Link className="nav_item" to="/favorites">Favorites</Link>
    </nav>
  )
}

export default Navbar