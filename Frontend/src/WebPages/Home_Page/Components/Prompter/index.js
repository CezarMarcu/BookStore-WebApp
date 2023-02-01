import i1 from './Resoruces/p1.png'
import i2 from './Resoruces/p2.png'
import i3 from './Resoruces/p3.png'
import i4 from './Resoruces/p4.png'
import poza from './Resoruces/Cover6.png'
import { PrompterContainer, Poster,GoToShopButton } from './StyledComponents'

export default function Prompter () {
    return(
        <div>
            <PrompterContainer>
                <Poster src={poza}></Poster>
                <GoToShopButton>Enroll Now</GoToShopButton>
            </PrompterContainer>
        </div>
    )
}