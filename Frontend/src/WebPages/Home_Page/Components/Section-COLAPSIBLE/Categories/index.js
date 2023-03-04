import React from "react";
import Product from "../Category";
import {Container} from "./StyledComponents";

const Categories = (props) => {
    return(
        <Container>
            {
                props.items.map((element,index) => <Product key={index} name={element.name} source={element.source} data = {element.productDetails}></Product>)
            }
        </Container>        
    )

}
export default Categories