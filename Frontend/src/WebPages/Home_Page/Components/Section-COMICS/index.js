import { Container,Title,ProductsContainer } from "./StyledComponents"
import ProductCard from "../../../../UniversalComponents/ProductCard"

const Comics  = (props) => {
    return(
        <Container>
            <Title>COMICS, ALL YOU CAN READ</Title>
            <ProductsContainer>
                {
                    props.items.map((item, index)=>
                    <ProductCard key={index} title={item.name} author={item.author.toUpperCase()} price={item.price} img={item.img} status={item.status}></ProductCard>
                    )
                }
            </ProductsContainer>
        </Container>
    )
}
export default Comics