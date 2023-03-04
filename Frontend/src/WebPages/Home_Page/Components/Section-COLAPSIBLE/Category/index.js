import { LinkButton,Icon,Container } from "./StyledComponents"

const Category = (props) => {
    return(
        <Container>
            <LinkButton>{props.name}</LinkButton>
        </Container>
    )
}
export default Category