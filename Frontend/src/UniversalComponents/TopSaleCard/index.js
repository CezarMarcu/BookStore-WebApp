import { Container,ProductImage,Title, Position} from "./StyledComponents"

const TopSaleCard  = (props) => {
    return(
        <Container>
            <ProductImage src={props.img}></ProductImage>
            <Title>{props.title}</Title>
            <Position>{props.position}</Position>
        </Container>
    )
}
export default TopSaleCard
