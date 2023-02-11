import { Container,Title,ProductsContainer } from "./StyledComponents"
import PresaleProduct from "../../Cards/ProductCard/index"

const Comics  = (props) => {
    return(
        <Container>
            <Title>Comics all you can read</Title>
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
export default Comics