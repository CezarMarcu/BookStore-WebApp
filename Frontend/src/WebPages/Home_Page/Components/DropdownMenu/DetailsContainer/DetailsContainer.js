import { Container } from "./StyledComponents";
import { Categories } from "./StyledComponents";
import { Category } from "./StyledComponents";
import { SubCategories } from "./StyledComponents";
import { SubCategory } from "./StyledComponents";

const DetailsContainer = (props) => {
    return(
        <Container>
            <Categories>
                {props.items.map((item,index) =>
                        <Categories key={index}>
                            <Category key={index + 1}>{item.name}</Category>
                                <SubCategories key={index + 2}>
                                    {item.subcategories.map((subategory, index)=>
                                    <SubCategory key={index}>{subategory}</SubCategory>)}
                                </SubCategories>
                        </Categories>
                        )
                }
            </Categories>
        </Container>
    )
}
export default DetailsContainer