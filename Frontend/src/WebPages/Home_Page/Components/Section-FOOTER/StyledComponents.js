import styled from "styled-components";
import {Facebook} from '@styled-icons/entypo-social/Facebook'
import {Instagram} from '@styled-icons/icomoon/Instagram'
import {Youtube} from '@styled-icons/bootstrap/Youtube'
import {GooglePlusSquare} from '@styled-icons/fa-brands/GooglePlusSquare'
import {Phone} from '@styled-icons/boxicons-solid/Phone'
import {CreditCard2BackFill} from '@styled-icons/bootstrap/CreditCard2BackFill'
import {ShieldFillCheck} from '@styled-icons/bootstrap/ShieldFillCheck'

export const Container = styled.div`
    width:100%;
    position:relative;
    height:auto;
    background:rgb(229,232,235);
    top:258.58rem;
`
export const Content = styled.div`
    position:relative;
    width:66%;
    height:auto;
    background:transparent;
    margin:0 auto;
    display:flex;
    flex-direction:row;   
`
export const LinksContainer = styled.div`
    height:auto;
    width:25rem;
    background:transparent;
    flex-direction:column;    
`
export const Title = styled.p`
    font-size:22px;
    font-family:'Roboto Slab';
    font-weight:900;
    display:flex;
    margin-left:20px;
`
export const LFRContainer = styled.div`
    height:25rem;
    width:25rem;
    background:transparent;
    flex-direction:column;    
`
export const NewsLetterContainer = styled.div`
    height:25rem;
    width:25rem;
    background:transparent;
    flex-direction:column; 
`
export const Text = styled.p`
    font-family:'Roboto slab';
    margin-top:0rem;
    margin-left:1rem;
    width:24rem;
    text-align: left;
`
export const Icons = styled.div`
    height:auto;
    width:10rem;
    background:transparent;
    flex-direction:row;
    display:flex;
    gap:0.5rem;
    margin-left:1rem;
`
export const FacebookIcon = styled(Facebook)`
    width:3rem;
    height:3rem;
    color:gray;
`
export const InstagramIcon = styled(Instagram)`
    width:3rem;
    height:3rem;
    color:gray;
`
export const YoutubeIcon = styled(Youtube)`
    width:3rem;
    height:3rem;
    color:gray;
`
export const GoogleIcon = styled(GooglePlusSquare)`
    width:3rem;
    height:3rem;
    color:gray;
`
export const PhoneIcon = styled(Phone)`
    width:5rem;
    height:5rem;
    color:gray;
    margin-left:-16rem;
`
export const CardIcon = styled(CreditCard2BackFill)`
    width:5rem;
    height:5rem;
    color:gray;
    margin-left:-16rem;
`
export const ShieldIcon = styled(ShieldFillCheck)`
    width:5rem;
    height:5rem;
    color:gray;
`
export const PaymentOptionContainer = styled.div`
    weight:auto;
    height:auto;
    display:flex;
    padding-left:20rem;
    padding-top:7rem;
`
export const SecuredShoppingContainer = styled.div`
    weight:auto;
    height:auto;
    display:flex;
    padding-left:20rem;
    padding-top:7rem;
`
export const InputValue = styled.p`
    display:flex;
    font-family:'Roboto Slab';
    font-weight:900;
    margin-top:2rem;
    transition:0.5s;
`
export const InputForm = styled.input`
    width:100%;
    height:0%;
    background:transparent;
    border-top:none;
    border-left:none;
    border-right:none;
    border-bottom:none;
    transition:1s;
    :focus{
        outline:none;
    }
`
export const Input = styled.div`
    width:27rem;
    height:4rem;
    display:flex;
    flex-direction:column;
    background:transparent;
    border-top:none;
    border-left:none;
    border-right:none;
    border-bottom:1px solid rgb(190,190,190);
    :hover{
        ${InputValue}{
            margin-top:0;
            font-size:13px;
            color:rgb(37,199,58);
        }

        ${InputForm}{
            height:50%;
        }
        border-bottom:2px solid rgb(37,199,58);
    }
`
export const Subscribe = styled.button`
    height:3rem;
    width:10rem;
    margin:0 auto;
    margin-top:2rem;
    float:right;
    font-family:'Roboto Slab';
    font-weight:900;
    font-size:16px;4;
    border:0;
    transition:0.5s;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.50);
    :hover{transform:scale(1.2)}
`
export const Subtitle = styled.p`
    font-size:19px;
    font-family:'Roboto Slab';
    font-weight:900;
    display:flex;
    margin-left:20px;
`
export const AsistenceContainer = styled.div`
    width:20rem;
    height:auto;
    margin-top:3rem;
    background:transparent;
`