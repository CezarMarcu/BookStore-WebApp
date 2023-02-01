import { CategoryContainer,Avatar,DetailsContainer,Title,Description } from './Style'
export default function Category (props) {
    return(
        <>  
            <CategoryContainer>
                
                <Avatar src={props.avatar}></Avatar>
                
                <DetailsContainer>
                    
                    <Title>{props.title}</Title>
                    <Description>{props.description}</Description>
                
                </DetailsContainer>
            
            </CategoryContainer>
        </>             
    )
}