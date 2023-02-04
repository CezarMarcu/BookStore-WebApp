import { Container } from "./StyledComponents";
import { Categories } from "./StyledComponents";
import { Category } from "./StyledComponents";
import { SubCategories } from "./StyledComponents";
import { SubCategory } from "./StyledComponents";

const DetailsContainer = (props) => {
    return(
        <Container>
            <Categories>
                {props.items.map(
                    item =>
                        <>
                        <Category>{item.name}</Category>
                        <SubCategories>
                            {item.subcategories.map(subategory=>
                                <SubCategory>{subategory}</SubCategory>)}
                        </SubCategories>
                        </>
                        )
                }
            </Categories>
        </Container>
    )
}
export default DetailsContainer