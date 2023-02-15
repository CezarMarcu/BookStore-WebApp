import {Container } from "./StyledComponents"
import Products from "../Products/Products"
import DetailsContainer from "../DetailsContainer/DetailsContainer"
import { ProductCategories,CategoriesData } from "../../../../../../Database/DummyDatabase"


const DummyDropDownMenu = (props) => {
    {
         return(
                <Container>
                    <DetailsContainer items = {ProductCategories}></DetailsContainer>
                    <Products items={CategoriesData}></Products>
                </Container>        
            )
    }
}
export default DummyDropDownMenu