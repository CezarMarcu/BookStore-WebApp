import { Container,Title,ProductsContainer,TitleContainer } from "./StyledComponents"
import ProductCard from "../../../../UniversalComponents/ProductCard"

const Comics  = (props) => {
    return(
        <Container>
            <TitleContainer>
                <Title>COMICS, ALL YOU CAN READ</Title>
            </TitleContainer>
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