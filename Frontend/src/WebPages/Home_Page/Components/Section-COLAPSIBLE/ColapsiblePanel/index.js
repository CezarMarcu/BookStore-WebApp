import {Container,CategoriesContainer} from "./StyledComponents"
import Products from "../Categories"
import DetailsContainer from "../SubCategories"
import { ProductCategories,CategoriesData } from "../../../../../Database/DummyDatabase"
import Categories from "../Categories"
import Category from "../Category"
import CategoryDetails from "../SubCategories"


const ColapsiblePanel = (props) => {
    console.log(props)
    return(
        <Container>
            <CategoriesContainer>
                {props.items.map((element,index) => <Category key={index} name={element.productCategory} source={element.image}></Category>)}
            </CategoriesContainer>
            
             {/* <CategoryDetails items = {ProductCategories}></CategoryDetails> */}
        </Container>        
    )
}
export default ColapsiblePanel