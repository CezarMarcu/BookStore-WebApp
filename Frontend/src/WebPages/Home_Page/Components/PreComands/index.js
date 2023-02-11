import { Container,Title,ProductsContainer } from "./StyledComponents"
import PresaleProduct from "./Card"

const Presales  = (props) => {
    return(
        <Container>
            <Title>PRECOMENZI</Title>
            <ProductsContainer>
                {
                    props.items.map((item, index)=>
                    <PresaleProduct key={index} title={item.name} author={item.author.toUpperCase()} price={item.price} img={item.img}></PresaleProduct>
                    )
                }
            </ProductsContainer>
        </Container>
    )

}
export default Presales