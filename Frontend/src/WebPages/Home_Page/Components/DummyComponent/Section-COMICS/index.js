import { Container,Title,ProductsContainer } from "./StyledComponents"
import DummyProductCard from "../../../../../UniversalComponents/ProductCard"

const DummyComics  = (props) => {
    return(
        <Container>
            <Title>COMICS, ALL YOU CAN READ</Title>
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
export default DummyComics