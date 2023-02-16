import { Container,ProductImage,Title} from "./StyledComponents"
import { ProductImageContainer,ProductDetailsContainer } from "./StyledComponents"


const TopSaleCard  = (props) => {
    return(
        <Container>
            <ProductImageContainer>
                <ProductImage src={props.img}></ProductImage>
            </ProductImageContainer>

            <ProductDetailsContainer>
                <Title>{props.title}</Title>
            </ProductDetailsContainer>
        </Container>
    )
}
export default TopSaleCard
