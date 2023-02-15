import styled from "styled-components";

export const Container = styled.div`
    margin-top:3rem;
    height:28rem;
    width:19rem;
    display:flex;
    flex-direction:column;
    background:white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.50);
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
export const ProductPriceTagContainer = styled.div`
    height:2.5rem;
    width:11.5rem;
    background:transparent;
    display: inline-block;
    margin: 0 auto;
    margin-top:2.5rem;
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
export const Price = styled.p`
    position:relative;
    top:-1.5rem;
    left:3rem;
    font-family: 'Roboto Slab';
    font-size:20px;
    font-weight:900;
    color:rgb(125,124,119)
`
export const PriceDecimal = styled.sup`
    font-size:0.6em;
    left:3rem;
    font-family: 'Roboto Slab';
    font-weight:900;
`
export const Currency = styled.p`
    font-size:18px;
    font-family: 'Roboto Slab';
    font-weight:300;
`
export const Tag = styled.div`
    width:${props => props.status === "IN STOC" ||props.status === "LIMITAT" ? '3.4rem' : '6rem'};
    height:1.25rem;
    background: 
    ${props => props.status ==="IN STOC" ? 'rgb(206, 179, 42)'
    :props.status ==="PRECOMANDA"? 'rgb(90, 107, 154)'
    :'rgb(185,51,24)'};
    border-radius:0.2rem;
    color:${props=>props.status === "IN STOC" ? 'black':'white'};
    font-family: 'Roboto Slab'serif;
    font-size:12px;
    font-weight:600;
    position:relative;
    top:-4rem;
    left:-1.9rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.30);
`

export const DeliveryTag=styled.p`
    font-size:18px;
    position:relative;
    top:-6.6rem;
    left:2rem;
    font-family: 'Arial';
    font-weight:900;
    font-style: oblique;
    display:${props=>props.status ==="IN STOC" || props.status ==="LIMITAT" ? 'flex':'none'}
`