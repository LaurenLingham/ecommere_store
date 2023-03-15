import React from "react";
import StoreContainer from "../containers/StoreContainer";
import {render, fireEvent} from "@testing-library/react";

describe("StoreContainer", () => {
    let container;
    beforeEach(() => {
        container = render(<StoreContainer/>)
    })

    xit("should be able to add items to basket", () => {
        
    })
})