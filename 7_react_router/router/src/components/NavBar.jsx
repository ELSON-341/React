import { Link, NavLink } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
        {/* <Link to="/">Home</Link>
        <Link to="/contact">Comtator</Link> */}
        
        {/* 9 - link ativo */}
        <NavLink to="/" className={({isActive}) => (isActive ? 'active': "")}>Home</NavLink>
        <NavLink to="/contact" className={({isActive}) => (isActive ? 'active' : '')}>Contator</NavLink>
    </nav>
  )
}

export default NavBar