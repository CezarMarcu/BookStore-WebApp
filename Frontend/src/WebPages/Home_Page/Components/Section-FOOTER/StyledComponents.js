import styled from "styled-components";
import {FacebookOutline} from "@styled-icons/evaicons-outline"
export const Container = styled.div`
    width:100%;
    position:relative;
    height:40rem;
    background:rgb(229,232,235);
    top:258.58rem;
`
export const Content = styled.div`
    position:relative;
    width:66%;
    height:100%;
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
export const Link = styled.a`
    display:flex;
    height:2.5rem;
    width:18rem;
    font-family:'Roboto Slab';
    font-weight:300;
    margin-left:30px;
    font-size:16px;
    border-bottom:1px solid rgb(200,200,200);
    :hover{
        color:green;
    }
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