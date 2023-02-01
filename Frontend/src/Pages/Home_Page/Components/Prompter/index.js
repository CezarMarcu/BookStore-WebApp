import i1 from './Resoruces/p1.png'
import i2 from './Resoruces/p2.png'
import i3 from './Resoruces/p3.png'
import i4 from './Resoruces/p4.png'
import { PrompterContainer, Poster,GoToShopButton } from './StyledComponents'

export default function Prompter () {
    return(
        <div>
            <PrompterContainer>
                <Poster src={i1}></Poster>
                <Poster src={i2}></Poster>
                <Poster src={i3}></Poster>
                <Poster src={i4}></Poster>
                <GoToShopButton>Go to Shop</GoToShopButton>
            </PrompterContainer>
        </div>
    )
}