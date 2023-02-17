import { Container,Content, LinksContainer, Title,Link, LFRContainer, NewsLetterContainer,FacebookIcon } from "./StyledComponents"
const Footer = () => {
    return(
        <Container>
            <Content>
                <LinksContainer>
                    <Title>Linkuri utile</Title>
                    <Link>DESPRE LIVADA CU CARTI.RO</Link>
                    <Link>DESPRE LIVADA CU CARTI</Link>
                    <Link>JOBURI</Link>
                    <Link>ASISTENTA</Link>
                    <Link>LIVRARE IN LIBRARIE</Link>
                    <Link>COSTURI DE TRANSPORT</Link>
                    <Link>POLITICA DE CONFIDENTIALITATE</Link>
                    <Link>POLITICA DE RETUR</Link>
                </LinksContainer>
                <LFRContainer>
                    <Title>Livrare gratuita</Title>
                    <Title>Follow Us</Title>
                    <Title>Recomandam</Title>
                </LFRContainer>
                <NewsLetterContainer>
                    <Title>Aboneaza-te la newsletter</Title>
                </NewsLetterContainer>
            </Content>
        </Container>
    )
}
export default Footer