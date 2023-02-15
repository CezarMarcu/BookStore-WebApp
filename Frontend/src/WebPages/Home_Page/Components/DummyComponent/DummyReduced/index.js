import { Container,Title,ProductsContainer } from "./StyledComponents"
import DummyProductCard from "../../../../../UniversalComponents/ProductCard"

const DummyReduced  = (props) => {
    return(
        <Container>
            <Title>FANTASY, ALL YOU CAN READ</Title>
            <ProductsContainer>
                {
                    props.items.map((item, index)=>
                    <DummyProductCard key={index} title={item.name} author={item.author.toUpperCase()} price={item.price} img={item.img} status={item.status}></DummyProductCard>
                    )
                }
            </ProductsContainer>
        </Container>
    )
}
export default DummyReduced