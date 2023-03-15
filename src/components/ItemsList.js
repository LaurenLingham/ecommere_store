import React from "react";
import Item from "./Item";
import styled from "styled-components";

export default function ItemsList({ items, handleClick }) {
    const storeItems = items.map((item, index) => {
        return <Item key={index} item={item} handleClick={handleClick} />
    });

    return (
        <>
            <ul>{storeItems}</ul>
        </>
    );
};
