/*===================================================================================================
*                                           Imports
=====================================================================================================*/
import logo from './Resources/Logo.png'
import {NavContainer, LeftLinks, RightLinks, ListMember, Logo, SignInButton} from './StyledComponents'

/*===================================================================================================
*                                    Navigation Bar Component
=====================================================================================================*/
export default function NavigationBar(){
    return(

        <div id='NavigationBar'>  
            
            <NavContainer>
                
                <LeftLinks>
                    <ListMember>Acasa</ListMember>
                    <ListMember>Categorii</ListMember>
                </LeftLinks>
                
                <Logo src={logo}></Logo>
                
                <RightLinks>
                    <ListMember>Magazin</ListMember>
                    <ListMember>Contact</ListMember>
                </RightLinks>
                
                <SignInButton>Sign In</SignInButton>
            </NavContainer>
        </div>
    )
}