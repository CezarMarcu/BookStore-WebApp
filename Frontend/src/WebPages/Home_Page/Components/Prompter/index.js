import poza from './Resoruces/Cover6.png'
import { PrompterContainer, Poster,EnrollButton } from './StyledComponents'

export default function Prompter () {
    return(
        <div>
            <PrompterContainer>
                <Poster src={poza}></Poster>
                <EnrollButton>Enroll Now</EnrollButton>
            </PrompterContainer>
        </div>
    )
}