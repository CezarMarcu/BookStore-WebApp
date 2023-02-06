/*===================================================================================================
*                                           Imports
=====================================================================================================*/
import logo from './Resources/Logo.png'
import {Container,Logo, NavButton,ProductsButton} from './StyledComponents'
import DropDownMenu from '../DropdownMenu/DropMenuContainer'
import { useState } from 'react'
/*===================================================================================================
*                                    Navigation Bar Component
=====================================================================================================*/
export default function NavBar(){
    const [isOpen, setIsOpen] = useState(false);

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
