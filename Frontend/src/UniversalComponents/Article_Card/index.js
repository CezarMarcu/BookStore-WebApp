import { Container,Picture,Details,Title,Description,Author } from "./StyledComponents"

const Article = (props) => {
    return(
        <Container>
            <Picture src={props.img}></Picture>
            <Details>
                <Title>{props.author} | {props.title}</Title> 
                <Description>{props.description}</Description>
            </Details>
        </Container>
    )
}
export default Article