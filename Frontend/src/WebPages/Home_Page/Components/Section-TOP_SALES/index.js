import { Container,Title,ProductsContainer } from "./StyledComponents"
import TopSaleCard from "../../../../UniversalComponents/TopSaleCard"
import { CategoriesContainer } from "./StyledComponents"
import { CategoryButton } from "./StyledComponents"

const TopSales  = (props) => {
    return(
        <Container>
            <Title>TOP VANZARI</Title>
            <ProductsContainer>
                {
                    props.items.map((item, index)=>
                    <TopSaleCard key={index} title={item.name} img = {item.img}></TopSaleCard>
                    )
                }
            </ProductsContainer>
            <CategoriesContainer>
                <CategoryButton>Carti</CategoryButton>
                <CategoryButton>Carti Straine</CategoryButton>
                <CategoryButton>Jocuri</CategoryButton>
                <CategoryButton>Jucarii</CategoryButton>
                <CategoryButton>Filme</CategoryButton>
                <CategoryButton>Reviste</CategoryButton>
                <CategoryButton>Gourmet</CategoryButton>
            </CategoriesContainer>

        </Container>
    )
}
export default TopSales