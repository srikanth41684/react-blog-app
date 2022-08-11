import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {

  // const [navbar, setNavbar] = useState(false);




  return (
    <div>
        <h1 className="heading"><span className="the-rotate">The </span><span className="siren">Siren</span></h1>
        <div className="navbar">
            <ul>
                <li> <Link className="navbar-links" to="/home">Home </Link> </li>
                <li> <Link className="navbar-links" to="/category/tourism">Tourism </Link> </li>
                <li> <Link className="navbar-links" to="/category/fitness">Fitness </Link> </li>
                <li> <Link className="navbar-links" to="/category/technology">Technology </Link> </li>
                <li> <Link className="navbar-links" to="/category/bollywood">Bollywood </Link> </li>
                <li> <Link className="navbar-links" to="/category/food">Food </Link> </li>
            </ul>
        </div>
        <br />
        <hr className="hrline" />
    </div>
  )
}

export default Navbar;
