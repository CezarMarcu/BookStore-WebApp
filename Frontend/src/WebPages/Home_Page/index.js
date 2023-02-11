import Content_Container from "./Cards"
import Header from "./Header/index"
import Prompter from "./Components/Prompter/index"
import NavBar from "./Components/NavBar/index"
import DropDownMenu from "./Components/DropdownMenu/DropMenuContainer"
import Offers from "./Components/Offers"
import Services from "./Components/Services"
import Presales from "./Components/PreComands"
import { PresaleProducts } from "../../Database/DummyDatabase"
import { ReduceProducts } from "../../Database/DummyDatabase"
import ReducedProducts from "./Components/ReducedProducts"


export default function HomePage () {
    return (
        <>  
            <Header></Header>
            <Content_Container>
                <ReducedProducts items={ReduceProducts}></ReducedProducts>
                <Presales items={PresaleProducts}></Presales>
                <Services></Services>
                <Prompter></Prompter>
                <Offers></Offers>
                <NavBar></NavBar>
            </Content_Container>
                    
        </>
    )
}