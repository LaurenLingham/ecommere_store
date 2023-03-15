import React from "react";
import styled from "styled-components";

export default function Basket({basket, user}) {
    const basketItems = basket.map((item, index) => {
        return (
            <li key={index}>
                <img src={item.img} alt="" height="150" width="150"/>
                <p>{item.title}</p>
                <p>{item.artist}</p>
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
        <BasketDetails>
            <h2>Hello {user}, you have {basket.length} items in your basket</h2>
            <BasketList>{basketItems}</BasketList>
            <p>Basket total: £{basketTotal(basket)}</p>
        </BasketDetails>
    );
};

const BasketList = styled.ul`
    color: white;
    padding: 1rem;
    border-bottom: 2px solid white;
`;

const BasketDetails = styled.div`
    color: white;
    `;
