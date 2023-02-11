import { Container,Title,ProductsContainer } from "./StyledComponents"
import PresaleProduct from "../../Cards/ProductCard/index"

const ReducedProducts  = (props) => {
    return(
        <Container>
            <Title>Fantasy, all you can read</Title>
            <ProductsContainer>
                {
                    props.items.map((item, index)=>
                    <PresaleProduct key={index} title={item.name} author={item.author.toUpperCase()} price={item.price} img={item.img}></PresaleProduct>
                    )
                }
            </ProductsContainer>
        </Container>
    )

}
export default ReducedProducts