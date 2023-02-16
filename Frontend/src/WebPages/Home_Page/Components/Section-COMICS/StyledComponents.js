import styled from "styled-components";

export const Container = styled.div`
    height:auto;
    width:100%;
    background:rgb(245,245,245);
    display:flex;
    flex-direction: row;
`
export const Title = styled.p`
    position:relative;
    display:flex;
    font-family: 'Roboto Slab';
    font-size:25px;
    margin-left:7.5rem;
    left:-4rem;
    margin-top:20%;
    color:rgb(127,127,127)
`
export const ProductsContainer = styled.div`
    position:relative;
    display:flex;
    flex-direction:row;
    height:100%;
    width:75%;
    margin-bottom:5rem;
    left:-2rem;
    gap:30px;
    background:rgb(245,245,245);
`