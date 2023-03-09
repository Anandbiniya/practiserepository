import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav  className="nav">
      {/* 
                all the links in navbar,
      IMPORTANT: Link should match as mentioned in problem statement 
      */}
      <Link className="nav-btn" to="/">Home</Link>
      <Link  className="nav-btn" to="/about">About</Link>
      <Link  className="nav-btn" to="/products">Products</Link>
      <Link  className="nav-btn" to="/products/men">Men</Link>
      <Link  className="nav-btn" to="/products/women">Women</Link>
      <Link  className="nav-btn" to="/products/kids">Kids</Link>
      <Link  className="nav-btn" to="/products/homedecor">Home decor</Link>
    </nav>
  );
};
