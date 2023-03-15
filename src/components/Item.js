import React from "react";
import styled from "styled-components";

export default function Item({ item, handleClick }) {

    const SaleItem = styled.div`
        background: radial-gradient(rgb(0, 8, 100), rgb(255, 53, 255));
        color: white;
        padding: 1rem;
        border-bottom: 2px solid white;
    `;

    const Button = styled.button`
        padding: 1em;
        font-size: 1em;
        margin: 0.5em;
        width: 10em;
        border: 4px solid white;
        background: #9ccddc;
        &:hover {
            background: black;
            color: white;
    }
    `;

    return (
        <SaleItem>
            <div>
                <img src={item.img} alt="" height="150" width="150" />
                <h2>{item.title}</h2>
                <h3>{item.artist}</h3>
                <h4>Released: {item.year}</h4>
                <h5>£{item.price}</h5>
            </div>
            <Button onClick={() => handleClick(item)}>Add to Basket</Button>
        </SaleItem>
    );
};
