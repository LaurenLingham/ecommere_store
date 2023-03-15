import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/items">View Available Albums</Link> </li>
            <li><Link to="/basket">View Basket</Link> </li>
        </ul>
    </nav>
  );
};
