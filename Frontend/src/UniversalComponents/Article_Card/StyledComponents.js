import styled from "styled-components";

export const Picture = styled.img`
    width:7rem;
    height:7rem;
    background:blue;
    display:flex;
    position:relative;
`
export const Details = styled.div`
    position:relative;
    background:transparent;
    height:100%;
    width:29rem;
    left:7rem;
    margin: 5 auto;
    top:-7rem;
`
export const Title = styled.p`
    font-size:18px;
    position:relative;
    left:1rem;
    font-family:"Roboto Slab";
    font-weight:900;
    display:flex;
    transition:0.7s;    
    background:transparent;
    width:57rem;
`
export const Description = styled.p`
    display:flex;
    font-size:14px;
    font-family:"Roboto Slab";
    margin-left:1rem;
    margin-top:-0.5rem;
`
export const Container = styled.div`
    width:0%;
    height:8rem;
    background:transparent;
    position:relative;
    left:3rem;
    margin-bottom:5px;
    transition:0.5s;
    border-bottom: 4px solid rgb(220,220,220);
    :hover{
        width:58.5%;
        border-bottom: 4px solid rgb(37,199,58);
        ${Title}{
            color:rgb(37,199,58);
        }
    }
`