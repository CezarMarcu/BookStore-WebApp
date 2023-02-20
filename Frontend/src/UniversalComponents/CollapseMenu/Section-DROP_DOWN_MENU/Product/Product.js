import { LinkButton,Icon,ProductContainer } from "./StyledComponents"

const Product = (props) => {
    return(
        <ProductContainer>
            <Icon src={props.source}></Icon>
            <LinkButton>{props.name}</LinkButton>
        </ProductContainer>
    )
}

export default Product