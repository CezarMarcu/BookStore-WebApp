import styled from "styled-components";

export const Container = styled.div`
    margin-top:3rem;
    height:28%;
    width:19rem;
    display:flex;
    flex-direction:column;
    background:white;
    border-radius:0.5rem;
    transition: transform .4s;
    &: hover {
        transform: scale(1.3);
        z-index:1;
} 
`
export const ProductImageContainer = styled.div`
    height:18rem;
    width:11.5rem;
    background:transparent;
    display: inline-block;
    margin: 0 auto;
    margin-top:15px;
    padding: 3px;
`
export const ProductDetailsContainer = styled.div`
    height:3.5rem;
    width:11.5rem;
    background:transparent;
    display: inline-block;
    margin: 0 auto;
    padding: 3px;
`
export const ProductImage = styled.img`
    height:18rem;
    width:11.5rem;
`
export const Title = styled.p`
    font-size:16px;
    position:relative;
    font-family: 'Roboto Slab';
    font-weight:900;
    top:-0.5rem;
`
export const Author = styled.p`
    color:red;
    font-family: 'Source Code Pro';
    font-size:14px;
    font-weight:200;
    position:relative;
    top:-1rem;
`


