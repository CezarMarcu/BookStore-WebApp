import LinkComponent from "../../../../UniversalComponents/Link"
import { useState } from "react"
import { Container,
    Content,
    LinksContainer,
    Title, 
    LFRContainer,
    NewsLetterContainer,
    FacebookIcon,
    InstagramIcon,
    YoutubeIcon,
    GoogleIcon,
    Icons,
    Text,
    Input,
    InputValue,
    InputForm,
    Subscribe,
    AsistenceContainer,
    Subtitle,
    PhoneIcon,
    CardIcon,
    ShieldIcon,
    PaymentOptionContainer,
    SecuredShoppingContainer,
    } from "./StyledComponents"

const Footer = () => {
    const [isClicked, setClick] = useState(false)
    const onClickHandler = () => isClicked===true ? setClick(false) : setClick(true);

    return(
        <Container>
            
            <Content>
                <LinksContainer>
                    <Title>Linkuri utile</Title>
                    <LinkComponent title="DESPRE LIVADA CU CARTI.RO"></LinkComponent>
                    <LinkComponent title="DESPRE LIVADA CU CARTI"></LinkComponent>
                    <LinkComponent title="JOBURI"></LinkComponent>
                    <LinkComponent title="ASISTENTA"></LinkComponent>
                    <LinkComponent title="LIVRARE IN LIBRARIE"></LinkComponent>
                    <LinkComponent title="COSTURI DE TRANSPORT"></LinkComponent>
                    <LinkComponent title="POLITICA DE RETUR"></LinkComponent>
                    <LinkComponent title="POLITICA DE CONFIDENTIALITATE"></LinkComponent>
                </LinksContainer>
                
                <LFRContainer>
                    <Title>Livrare gratuita</Title>
                    <Text>Pentru comenzi peste 150 de lei daca toate produsele pot fi livrate intr-un singur colet</Text>
                    <Title>Follow Us</Title>
                    <Icons>
                        <FacebookIcon></FacebookIcon>
                        <InstagramIcon></InstagramIcon>    
                        <YoutubeIcon></YoutubeIcon>
                        <GoogleIcon></GoogleIcon>
                    </Icons>         
                    <Title>Recomandam</Title>
                </LFRContainer>

                <NewsLetterContainer>
                    <Title>Aboneaza-te la newsletter</Title>
                    <Text>Primeste promotii,noutati si oferte personalizate direct in inbox</Text>
                    
                    <Input onClick={onClickHandler}>
                        <InputValue>Adresa e-mail*</InputValue>
                        <InputForm/>
                    </Input>

                     <Input onClick={onClickHandler}>
                        <InputValue>Nume</InputValue>
                        <InputForm/>
                    </Input>

                     <Input onClick={onClickHandler}>
                        <InputValue>Prenume</InputValue>
                        <InputForm/>
                    </Input>

                    <Subscribe>Aboneaza-te</Subscribe>
                    
                    
                </NewsLetterContainer>
            </Content>

            <Content>
                <AsistenceContainer>
                    <PhoneIcon></PhoneIcon>
                    <Subtitle>Asistenta telefonica</Subtitle>
                    <Text>Suport comenzi si oferta online</Text>
                    <Text>Luni-Vineri: 9:00-20:00</Text>
                    <Text>04221421</Text>
                </AsistenceContainer>

                <PaymentOptionContainer>
                    <CardIcon></CardIcon>
                    <Subtitle>Optiuni de plata</Subtitle>
                </PaymentOptionContainer>

                <SecuredShoppingContainer>
                    <ShieldIcon></ShieldIcon>
                    <Subtitle>Shoping securizat</Subtitle>
                </SecuredShoppingContainer>
                
            </Content>

        </Container>
    )
}
export default Footer