import { LinkButton } from "./StyledComponents"
import { Icon } from "./StyledComponents"
import { ProductContainer } from "./StyledComponents"

const Product = (props) => {
    return(
        <ProductContainer>
            <Icon src={props.source}></Icon>
            <LinkButton>{props.name}</LinkButton>
        </ProductContainer>
    )
}

export default Product