import {Container } from "./StyledComponents"
import Products from "../Products/Products"
import {CategoriesData} from "../../../../../Database/DummyDatabase"
import DetailsContainer from "../DetailsContainer/DetailsContainer"
import { ProductCategories } from "../../../../../Database/DummyDatabase"


const DropDownMenu = (props) => {{
         return(
                <Container id="DropMenu">
                    <DetailsContainer items = {ProductCategories}></DetailsContainer>
                    <Products items={CategoriesData}></Products>
                </Container>        
    )
    }
   
}
export default DropDownMenu