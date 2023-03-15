import { React, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Basket from "../components/Basket";
import ItemsList from "../components/ItemsList";
import NavBar from "../components/NavBar";
import BringMe from "../containers/images/Bring_Me_Your_Love.jpeg";
import Opposites from "../containers/images/Opposites.jpeg";
import TheDevil from "../containers/images/The_Devil_and_God.jpeg";
import TheEarth from "../containers/images/The_Earth_Is_Not.jpeg";
import Neon from "../containers/images/The_Neon_Handshake.jpeg";
import TheSufferer from "../containers/images/The_Sufferer.jpeg";

export default function StoreContainer() {

    const user = "Test User";
    const items = [
        {
            title: "Opposites",
            artist: "Biffy Clyro",
            year: 2018,
            price: 9.99,
            img: Opposites
        },
        {
            title: "The Devil and God Are Raging Inside Me",
            artist: "Brand New",
            year: 2006,
            price: 10.99,
            img: TheDevil
        },
        {
            title: "The Sufferer & the Witness",
            artist: "Rise Against",
            year: 2006,
            price: 7.99,
            img: TheSufferer
        },
        {
            title: "The Earth Is Not a Cold Dead Place",
            artist: "Explosions in the Sky",
            year: 2003,
            price: 12.99,
            img: TheEarth
        },
        {
            title: "Bring Me Your Love",
            artist: "City and Colour",
            year: 2008,
            price: 10.99,
            img: BringMe
        },
        {
            title: "The Neon Handshake",
            artist: "Hell is for Heroes",
            year: 2003,
            price: 9.99,
            img: Neon
        }
    ];

    const [basket, setBasket] = useState([]);

    const handleClick = (item) => {
        const newBasket = [...basket];
        newBasket.push(item);
        setBasket(newBasket);
    };

  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
            <Route path="/items" element={
                <ItemsList items={items} basket={basket} handleClick={handleClick}/>
            }/>
            <Route path="/basket" element={
                <Basket basket={basket} user={user} />
            }/>
        </Routes>
      </Router>
    </>
  );
};
