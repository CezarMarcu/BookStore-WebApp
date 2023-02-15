import poza from './Resoruces/Cover6.png'
import { PrompterContainer, Poster,EnrollButton } from './StyledComponents'


const Prompter = () =>{
    return(
            <PrompterContainer>
                <Poster src={poza}></Poster>
                <EnrollButton>Enroll Now</EnrollButton>
            </PrompterContainer>
    )
}
export default Prompter