import logo from './Resources/Logo.png'
import {Container,Logo, NavButton,ProductsButton} from './StyledComponents'
import DropDownMenu from '../Section-DROP_DOWN_MENU/DropMenuContainer'
import { useState } from 'react'



const Navbar = () =>{
    const [showDropDown, setShowDropDown] = useState(false)
    const onClick = () => showDropDown===true ? setShowDropDown(false) : setShowDropDown(true);
    return(
            <Container>
                {showDropDown ? <DropDownMenu/> : null}
                <ProductsButton onClick={onClick}>PRODUSE</ProductsButton>
                <NavButton>DETALII</NavButton>
                <NavButton>LOGIN</NavButton>
                <Logo src={logo}></Logo>
            </Container>
    )
}
export default Navbar;