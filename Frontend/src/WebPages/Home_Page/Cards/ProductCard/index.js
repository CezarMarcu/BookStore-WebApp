import { Container,ProductImage,Title,Author,Price,Tag } from "./StyledComponents"
import product1 from "./Resources/product1.jpg"
const PresaleProduct  = (props) => {
    return(
        <Container>
            <ProductImage src={props.img}></ProductImage>
            <Title>{props.title}</Title>
            <Author>{props.author}</Author>
            <Price>{props.price}</Price>
            <Tag>PRECOMANDA</Tag>
        </Container>
    )

}
export default PresaleProduct