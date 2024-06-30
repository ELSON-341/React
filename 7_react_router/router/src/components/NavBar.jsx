import { Link, NavLink } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
        <NavLink to="/" className={({isActive}) => (isActive ? 'active': "")}>Home</NavLink>
        <NavLink to="/contact" className={({isActive}) => (isActive ? 'active' : '')}>Contator</NavLink>
    </nav>
  )
}

export default NavBar