import styled from "styled-components";

export const Container = styled.div`
    margin-top:3rem;
    height:27rem;
    width:19rem;
    background:white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.50);
    transition: transform .4s;
    &: hover {
        transform: scale(1.3);
        z-index:1;
} 
`
export const ProductImage = styled.img`
    height:18rem;
    width:11.5rem;
    margin-top:15px;
`
export const Title = styled.p`
    font-size:16px;
    position:relative;
    font-family: 'Source Code Pro';
    top:-0.5rem;
    font-weight:bold;

`
export const Author = styled.p`
    font-size:14px;
    color:red;
    font-family: 'Source Code Pro';
    position:relative;
    top:-1rem;
`
export const Price = styled.p`
    font-size:21px;
    position:relative;
    top:-0.5rem;
    left:4rem;
    font-family: Poppins;
    font-wight:bold;
`
export const Tag = styled.div`
    width:6rem;
    height:1.5rem;
    background:rgb(1, 101, 153);
    border:0px;
    font-size:10px;
    color:white;
    font-family:'Source Code Pro';
    position:relative;
    top:-3.7rem;
    left:-0.5rem;
`