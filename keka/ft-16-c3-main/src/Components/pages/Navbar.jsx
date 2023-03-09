import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";



export const Navbar = () => {
  const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
 
  return (
    <>
      <nav>
        <Link to="/About">About</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Logout">Logout</Link>
        <Link to="/Books">Books</Link>
        
      </nav>
    </>
  );
};
