import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NavBar() {

    const Nav = styled.nav`
        background: radial-gradient(#7b9d9d, #7b9d9d3d);
        color: white;
        padding: 1rem;
        border-bottom: 2px solid white;
    `;

    const List = styled.ul`
        color: white;
        text-align: left;
        display: flex;
        justify-content: space-between;
    `;

    return (
        <Nav>
            <List>
                <div>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/items">View Available Albums</Link> </li>
                </div>
                <li><Link to="/basket">View Basket</Link> </li>
            </List>
        </Nav>
  );
};
