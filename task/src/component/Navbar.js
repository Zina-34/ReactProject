import React from 'react'
import '../component/home.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="navHome">

        {/* <ul className="navbarList">
          <li > <Link to="/Table" className="link" > User</Link></li>
          <li > <Link onClick={() => navigate("/create-user")} className="link" >Create User</Link></li>
          <li >Profile</li>
          <li >Main Page</li>
        </ul> */}
      <ul className="navbarList">
        <Link to="/Table" className="navbarList buttonNav"> User </Link>
        <button
          className=" navbarList buttonNav" onClick={() => navigate("/create-user")}>
          Create User
        </button>
        {/* <button className=" buttonNav btnNav">
          <Link to="/Profile" className="navbarList">Profile</Link>
        </button> */}
        <button className=" buttonNav btnNav">
          <Link to="/" className="navbarList">Main Page</Link>
        </button>

      </ul>
        
    </div>
      
    </>
  )
}

export default Navbar
