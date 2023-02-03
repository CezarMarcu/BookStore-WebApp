import {Container } from "./StyledComponents"
import Products from "../Products/Products"
import {CategoriesData} from "../../../../../Database/DummyDatabase"
import DetailsContainer from "../DetailsContainer/DetailsContainer"
const DropDownMenu = () => {
    return(
        <Container>
            <DetailsContainer></DetailsContainer>
            <Products items={CategoriesData}></Products>
        </Container>        
    )

}
export default DropDownMenu