import Content_Container from "./Cards"
import Header from "./Header/index"
import Prompter from "./Components/Prompter/index"
import NavBar from "./Components/NavBar/index"
import DropDownMenu from "./Components/DropdownMenu/Products/Products"
import { CategoriesData } from "../../Database/DummyDatabase"
export default function HomePage () {
    return (
        <>  
            <Header></Header>
            <Content_Container>
                <Prompter></Prompter>
                <DropDownMenu items={CategoriesData}></DropDownMenu>
                <NavBar></NavBar>
            </Content_Container>
                    
        </>
    )
}