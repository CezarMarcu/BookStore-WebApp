/*===================================================================================================
*                                           Imports
=====================================================================================================*/
import logo from './Resources/Logo.png'
import {Container,Logo, NavButton,NavButtons,ProductsButton} from './StyledComponents'
import DropDown from './SubComponents/DropdownMenu'
/*===================================================================================================
*                                    Navigation Bar Component
=====================================================================================================*/
export default function NavBar(props){
    return(
        <div>  
            <Container>
                <ProductsButton>PRODUSE</ProductsButton>
                <DropDown></DropDown>
                <NavButton>DETALII</NavButton>
                <NavButton>LOGIN</NavButton>
                <Logo src={logo}></Logo>
            </Container>
        </div>
    )
}