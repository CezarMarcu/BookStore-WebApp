import Content_Container from "./Cards"
import Header from "./Header/index"
import Prompter from "./Components/Prompter/index"
import NavBar from "./Components/NavBar/index"
import DropDownMenu from "./Components/DropdownMenu/DropMenuContainer"
import Offers from "./Components/Offers"
import Services from "./Components/Services"
import Presales from "./Components/PreComands"
import { PresaleProducts } from "../../Database/DummyDatabase"

export default function HomePage () {
    return (
        <>  
            <Header></Header>
            <Content_Container>
                <Presales items={PresaleProducts}></Presales>
                <Services></Services>
                <Prompter></Prompter>
                <NavBar></NavBar>
                <Offers></Offers>
            </Content_Container>
                    
        </>
    )
}