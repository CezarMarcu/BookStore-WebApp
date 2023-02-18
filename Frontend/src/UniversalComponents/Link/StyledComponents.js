import styled from "styled-components";
import {ArrowIosForwardOutline} from '@styled-icons/evaicons-outline/ArrowIosForwardOutline'

export const ArrowIcon = styled(ArrowIosForwardOutline)`
    width:1.5em;
    height:1.5rem;
    color:gray;
    transition:0.5s;
`
export const Link = styled.a`
    display:flex;
    font-family:'Roboto Slab';
    font-weight:900;
    font-size:14px;
    transition:0.5s;
    float:left;
    background:transparent;
    width:15rem;
`
export const LinkContainer = styled.div`
    height:2.5rem;
    width:19rem;
    background:transparent;
    margin-left:2rem;
    border-bottom:1px solid rgb(200,200,200); 
    :hover{
        ${Link}{
            color:rgb(37,199,58);
        }
        ${ArrowIcon}{
            color:rgb(37,199,58);
            padding-left:2.5rem;
        }

`