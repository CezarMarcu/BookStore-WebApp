import logo from './Resources/Logo.png'
import {Container,Logo, NavButton,ProductsButton} from './StyledComponents'
import DummyDropDownMenu from '../DummyDropDownMenu/DropMenuContainer'
import { useState } from 'react'
/*===================================================================================================
*                                    Navigation Bar Component
=====================================================================================================*/
export default function DummyNavbar(){
    const [showDropDown, setShowDropDown] = useState(false)
    const onClick = () => showDropDown===true ? setShowDropDown(false) : setShowDropDown(true);
    return(
            <Container>
                {showDropDown ? <DummyDropDownMenu/> : null}
                <ProductsButton onClick={onClick}>PRODUSE</ProductsButton>
                <NavButton>DETALII</NavButton>
                <NavButton>LOGIN</NavButton>
                <Logo src={logo}></Logo>
            </Container>
    )
}