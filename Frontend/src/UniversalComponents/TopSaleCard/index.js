import { Container,ProductImage,Title} from "./StyledComponents"
import { ProductImageContainer,ProductDetailsContainer } from "./StyledComponents"
import { Position } from "./StyledComponents"

const TopSaleCard  = (props) => {
    return(
        <Container>
            <ProductImageContainer>
                <ProductImage src={props.img}></ProductImage>
            </ProductImageContainer>
            <Position>{props.position}</Position>
            <ProductDetailsContainer>
                <Title>{props.title}</Title>
            </ProductDetailsContainer>
        </Container>
    )
}
export default TopSaleCard
