import Content_Container from "./Cards"
import Header from "./Header/index"
import Prompter from "./Components/Prompter/index"
import NavBar from "./Components/NavBar/index"
import DropDownMenu from "./Components/DropdownMenu/DropMenuContainer"
import Offers from "./Components/Offers"
import Services from "./Components/Services"

export default function HomePage () {
    return (
        <>  
            <Header></Header>
            <Content_Container>
                <Services></Services>
                <Offers></Offers>
                <Prompter></Prompter>
                <NavBar></NavBar>
            </Content_Container>
                    
        </>
    )
}