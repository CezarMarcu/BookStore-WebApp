import Content_Container from "./Cards"
import Header from "./Header/index"
import Prompter from "./Components/Prompter/index"
import Categories from "./Components/Categories/index"
import NavBar from "./Components/NavBar/index"
export default function HomePage () {
    return (
        <>  
            <Header></Header>
            <Content_Container>
                <Prompter></Prompter>
                <Categories></Categories>
                <NavBar></NavBar>
            </Content_Container>
                    
        </>
    )
}