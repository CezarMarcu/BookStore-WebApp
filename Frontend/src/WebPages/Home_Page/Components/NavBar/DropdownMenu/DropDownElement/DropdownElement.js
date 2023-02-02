import { ElementContainer } from "./StyledComponents"
import { Icon } from "./StyledComponents"
import { Name } from "./StyledComponents"

export default function DropdownElement(props){
    return (
        <div>
            <ElementContainer>
                <Icon src={props.source}></Icon>
                <Name>{props.name}</Name>
            </ElementContainer>

        </div>
    ) 
}