import logo from './Resources/Logo.png'
import {Container,Logo, NavButton,ProductsButton} from './StyledComponents'
import DropDownMenu from '../Section-DROP_DOWN_MENU/DropMenuContainer'
import { useState } from 'react'
import SearchBar from '../../../../UniversalComponents/SearchBar'

const Navbar = () =>{
        const [showDropDown, setShowDropDown] = useState(false)
        const onClick = () => showDropDown===true ? setShowDropDown(false) : setShowDropDown(true);
        return(
            <Container>
                {showDropDown ? <DropDownMenu/> : null}
                <ProductsButton onClick={onClick}>PRODUSE <Logo src={logo}></Logo></ProductsButton>  
                <SearchBar></SearchBar>  
                <NavButton>DETALII</NavButton>
                <NavButton>LOGIN</NavButton>    
            </Container>
        )
    }
export default Navbar;