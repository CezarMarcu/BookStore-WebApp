import{Container,ProductsButton} from './StyledComponents'
import { useState } from 'react';

const CollapseMenu = () => 
    {
       const [isToggle, setToggle] = useState(false)
       const onClickHanddler = () =>{isToggle? setToggle(false):setToggle(true)}
         return(
            <div>
                <ProductsButton onClick={onClickHanddler}>PRODUSE</ProductsButton>
                {isToggle ? <Container></Container>:null}
            </div>
        )
    }
export default CollapseMenu