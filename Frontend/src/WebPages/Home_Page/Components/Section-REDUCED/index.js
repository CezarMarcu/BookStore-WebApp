import { Container,Title,ProductsContainer,TitleContainer } from "./StyledComponents"
import ProductCard from "../../../../UniversalComponents/ProductCard"

const Reduced  = (props) => {
    return(
        <Container>
             <ProductsContainer>
                {
                    props.items.map((item, index)=>
                    <ProductCard key={index} title={item.name} author={item.author.toUpperCase()} price={item.price} img={item.img} status={item.status}></ProductCard>
                    )
                }
            </ProductsContainer>
            <TitleContainer>
                 <Title>FANTASY, ALL YOU CAN READ</Title>
            </TitleContainer>
           
        </Container>
    )
}
export default Reduced