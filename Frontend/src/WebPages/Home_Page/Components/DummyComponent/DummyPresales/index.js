import { Container,Title,ProductsContainer } from "./StyledComponents"
import DummyProductCard from "../../../../../UniversalComponents/ProductCard/index"

const DummyPresales  = (props) => {
    return(
        <Container>
            <Title>PRECOMENZI</Title>
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
export default DummyPresales