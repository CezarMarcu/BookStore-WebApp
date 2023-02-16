import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    height:8rem;
    background:transparent;
    position:relative;
    margin-bottom:5px;
    border-bottom: 2px solid rgb(230,230,230);
`
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
font-family:"Roboto Slab";
font-weight:900;
display:flex;
margin-left:5px;
`
export const Description = styled.p`
display:flex;
font-size:14px;
font-family:"Roboto Slab";
margin-left:5px;
`