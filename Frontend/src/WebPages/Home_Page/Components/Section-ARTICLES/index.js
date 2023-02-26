import { Container } from "./StyledComponents"
import { Title } from "./StyledComponents"
import { ArticlesContainer } from "./StyledComponents"
import Article from "../../../../UniversalComponents/Article_Card"
import { Section1} from "./StyledComponents"
const Articles= (props) => {
    return(
        <Container>
            <Title>ARTICOLE</Title>
            <ArticlesContainer>
                    {props.items.map((item,index) => <Article key={index} title = {item.title.toUpperCase()} author={item.author.toUpperCase()} description={item.description} img={item.img}></Article>)}
            </ArticlesContainer>
        </Container>
    )
}
export default Articles