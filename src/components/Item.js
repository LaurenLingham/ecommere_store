import React from "react";
import styled from "styled-components";

export default function Item({ item, handleClick }) {

    const SaleItem = styled.div`
        background: radial-gradient(#7b9d9d, #c2d0d0);
        color: white;
        padding: 1rem;
        border-bottom: 2px solid white;
    `;

    const Button = styled.button`
        color: white;
        padding: 1em;
        font-size: 1em;
        font-weight: bold;
        margin: 0.5em;
        width: 10em;
        border: 3px solid white;
        background: #7b9d9d;
        &:hover {
            background: black;
            color: white;
            cursor: pointer;
        }
    `;

    const Img = styled.img`
        border: 2px solid white;
        margin: 16px;
    `;

    const AlbumDetails = styled.div`
        display: flex;
        justify-content: left;
        padding-left: 10rem;
        text-align: left;
    `;

    return (
        <SaleItem>
            <AlbumDetails>
                <Img src={item.img} alt="" height="150" width="150" />
                <div>
                    <h2>{item.title}</h2>
                    <h3>{item.artist}</h3>
                    <h4>Released: {item.year}</h4>
                    <h5>£{item.price}</h5>
                </div>
            </AlbumDetails>
            <Button onClick={() => handleClick(item)}>Add to Basket</Button>
        </SaleItem>
    );
};
