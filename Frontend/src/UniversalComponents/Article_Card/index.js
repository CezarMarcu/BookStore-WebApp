import { Container,Picture,Details,Title,Description } from "./StyledComponents"

const Article = (props) => {
    return(
        <Container>
            <Picture src={props.img}></Picture>
            <Details>
                <Title>{props.title}</Title>
                <Description>{props.description}</Description>
            </Details>
        </Container>
    )
}
export default Article