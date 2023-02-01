import NavigationBar from "./Components/NavigationBar"
import Prompter from "./Components/Prompter"
import Categories from "./Components/Categories"
import { Offers_Section } from "./Components/Offers"
import { HomePageContainer } from "./Style"

export default function Home_Page(){
    return (
        <div>
            <HomePageContainer>
                <Offers_Section></Offers_Section>
                <Categories></Categories>
                <Prompter></Prompter>
                <NavigationBar></NavigationBar>
            </HomePageContainer>         
        </div>

    )
}