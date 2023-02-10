import { Container,ProductImage,Title,Author,Price } from "./StyledComponents"
import product1 from "./Resources/product1.jpg"
const PresaleProduct  = (props) => {
    return(
        <Container>
            <ProductImage src={product1}></ProductImage>
            <Title>Mantuitorul Dunei</Title>
            <Author>Frank Herbert</Author>
            <Price>64.00 RON</Price>
        </Container>
    )

}
export default PresaleProduct