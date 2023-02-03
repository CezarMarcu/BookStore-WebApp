import { Container } from "./StyledComponents";
import { Categories } from "./StyledComponents";
import { Category } from "./StyledComponents";

const DetailsContainer = () => {
    return(
        <Container>
            <Categories>
                <Category>Audiobooks</Category>
                <Category>Arta si Arhitectura</Category>
                <Category>Culinare</Category>
                <Category>Enciclopedii</Category>
                <Category>Biografii, Jurnale, Memorii</Category>
                <Category>Lingvistica, Dictionare</Category>
                <Category>Poezie, Teatru, Studii literare</Category>
                <Category>Fictiune</Category>
            </Categories>
        </Container>
    )
}

export default DetailsContainer