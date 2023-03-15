import React from "react";

export default function Basket({basket, user}) {
    const basketItems = basket.map((item, index) => {
        return (
            <li key={index}>
                <img src={item.img} alt="" height="150" width="150"/>
                <h2>{item.title}</h2>
                <h3>{item.artist}</h3>
                <h4>{item.year}</h4>
                <h5>£{item.price}</h5>
            </li>
        );
    });

    const basketTotal = (basket) => {
        let total = 0;
        for(let i = 0; i < basket.length; i++) {
            total += basket[i].price;
        }
        return total;
    };

    return (
        <>
            <h2>Hello {user}, you have {basket.length} items in your basket</h2>
            <ul>{basketItems}</ul>
            <p>Basket total: £{basketTotal(basket)}</p>
        </>
    );
};
