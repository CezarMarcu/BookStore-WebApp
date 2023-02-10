import { Container,Title,ProductsContainer } from "./StyledComponents"
import PresaleProduct from "./Card"

const Presales  = (props) => {
    return(
        <Container>
            <Title>PRECOMENZI</Title>
            <ProductsContainer>
                <PresaleProduct></PresaleProduct>
                <PresaleProduct></PresaleProduct>
                <PresaleProduct></PresaleProduct>
            </ProductsContainer>
        </Container>
    )

}
export default Presales