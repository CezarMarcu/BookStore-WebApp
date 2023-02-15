import { Container,ProductImage,Title,Author,Price,Tag, Time} from "./StyledComponents"
import { ProductImageContainer,ProductDetailsContainer, ProductPriceTagContainer,PriceDecimal,DeliveryTag } from "./StyledComponents"


const DummyProductCard  = (props) => {
    const priceComponent = props.price.split(".")
    return(
        <Container>
            <ProductImageContainer>
                <ProductImage src={props.img}></ProductImage>
            </ProductImageContainer>

            <ProductDetailsContainer>
                <Title>{props.title}</Title>
                <Author>{props.author}</Author>
            </ProductDetailsContainer>

            <ProductPriceTagContainer>
                <Price>{priceComponent[0]}<PriceDecimal>{priceComponent[1]}</PriceDecimal>{priceComponent[2]}</Price>
                <Tag status={props.status}>{props.status}</Tag>
                <DeliveryTag status = {props.status}>24h</DeliveryTag>
            </ProductPriceTagContainer>
        </Container>
    )
}
export default DummyProductCard