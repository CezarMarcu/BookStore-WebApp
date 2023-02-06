/*===================================================================================================
*                                           Imports
=====================================================================================================*/
import logo from './Resources/Logo1.png'
import {Container,Logo, NavButton,ProductsButton} from './StyledComponents'
import DropDownMenu from '../DropdownMenu/DropMenuContainer'
import { useState } from 'react'
/*===================================================================================================
*                                    Navigation Bar Component
=====================================================================================================*/
export default function NavBar(){
    const [showDropDown, setShowDropDown] = useState(false)
    const onClick = () => showDropDown===true ? setShowDropDown(false) : setShowDropDown(true);
    return(
        <div>  
            <Container>
                {showDropDown ? <DropDownMenu /> : null}
                <ProductsButton onClick={onClick}>PRODUSE</ProductsButton>
                <NavButton>DETALII</NavButton>
                <NavButton>LOGIN</NavButton>
                <Logo src={logo}></Logo>
            </Container>
        </div>
    )
}
