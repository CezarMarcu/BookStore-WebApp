import { Container, Offer,OfferCard } from "./StyledComponents"
import offer1 from "./Resources/Offer1.png"
import offer2 from "./Resources/Offer2.png"
import offer3 from "./Resources/Offer3.png"
const DummyOffers = () =>{
    return(
        <Container>
            <Offer>
                <OfferCard src={offer1}></OfferCard>
            </Offer>
            
            <Offer>
                <OfferCard src={offer2}></OfferCard>
            </Offer>
            
            <Offer>
                <OfferCard src={offer3}></OfferCard>
            </Offer>  
        </Container>
    )
}
export default DummyOffers