import { Container,Service,Symbol,DescriptionContainer,Title,Description } from "./StyledComponents"
import preasent from "./Resources/Preasent.png"
import delivery from "./Resources/Delivery.png"
import easybox from "./Resources/Easybox.png"


const Services = () =>{
    return(
        <Container>

            <Service>
                <Symbol src={preasent}></Symbol>
                <DescriptionContainer>
                    <Title>Impachetare gratuita</Title>
                    <Description>Vrei sa faci un cadou? Ti-l impachetam gratuit</Description>
                </DescriptionContainer>
            </Service>
            
            <Service>
                <Symbol src={delivery}></Symbol>
                <DescriptionContainer>
                    <Title>Livrare 24h</Title>
                    <Description>Pentru peste 1200 de produse</Description>
                </DescriptionContainer>
            </Service>
            
            <Service>
                <Symbol src={easybox}></Symbol>
                <DescriptionContainer>
                    <Title>Livrare la easybox</Title>
                    <Description>Îți faci programul cum vrei, nu mai depinzi de curieri! </Description>
                </DescriptionContainer>
            </Service> 

        </Container>
    )
}

export default Services