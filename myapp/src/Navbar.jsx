import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li><Link to="/first">First Page</Link></li>
        <li><Link to="/second">Second Page</Link></li>
        <li><Link to="/third">Third Page</Link></li>
        <li><Link to="/fourth">Fourth Page</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
