import React from "react";
import Product from "../Product/Product";
import { ProductsContainer } from "./StyledComponents";

const Products = (props) => {
    return(
        <ProductsContainer>
            {
                props.items.map(element => <Product name={element.name} source={element.source}></Product>)
            }
        </ProductsContainer>        
    )

}

export default Products