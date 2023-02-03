import React from "react";
import Product from "../Product/Product";
import { DropDownContainer } from "./StyledComponents";

const DropDownMenu = (props) => {
    return(
        <DropDownContainer>
            {
                props.items.map(element => <Product name={element.name} source={element.source}></Product>)
            }
        </DropDownContainer>        
    )

}

export default DropDownMenu