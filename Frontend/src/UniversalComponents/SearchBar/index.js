import { Input,InputForm,InputValue} from "./StyledComponents"
import { useState } from "react";

const SearchBar = () =>{
    const [isClicked, setClick] = useState(false)
    const onClickHandler = () => isClicked===true ? setClick(false) : setClick(true);
    return (
        <>  
            <Input onClick={onClickHandler}>
                <InputValue>CAUTARE</InputValue>
                <InputForm/>
            </Input>
            
        </>
        
    )
}
    
export default SearchBar