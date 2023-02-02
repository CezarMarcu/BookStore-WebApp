/*===================================================================================================
*                                           Imports
=====================================================================================================*/
import logo from './Resources/Logo.png'
import {DropDownElement,DropDownContent,Container,Logo, NavButton,NavButtons,ProductsButton} from './StyledComponents'
/*===================================================================================================
*                                    Navigation Bar Component
=====================================================================================================*/
export default function NavBar(props){
    return(
        <div>  
            <Container>
                <ProductsButton>PRODUSE</ProductsButton>
                <NavButton>DETALII</NavButton>
                <NavButton>LOGIN</NavButton>
                <Logo src={logo}></Logo>
            </Container>
        </div>
    )
}