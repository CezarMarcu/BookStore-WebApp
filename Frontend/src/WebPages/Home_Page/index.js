import Content_Container from "./Cards"
import Header from "./Header/index"
import Prompter from "./Components/Prompter/index"
import NavBar from "./Components/NavBar/index"
import DropDownMenu from "./Components/DropdownMenu/DropMenuContainer"
export default function HomePage () {
    return (
        <>  
            <Header></Header>
            <Content_Container>
                <DropDownMenu></DropDownMenu>

            </Content_Container>
                    
        </>
    )
}