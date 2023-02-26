import styled from "styled-components";

export const Title = styled.p`
    position:relative;
    font-family: 'Roboto Slab';
    font-size:25px;
    top:2rem;
    color:rgb(127,127,127);
    transition:0.5s;
`
export const ProductsContainer = styled.div`
    position:relative;
    display:flex;
    flex-direction:row;
    height:27rem;
    width:75%;
    background:transparent;
    margin: 0 auto;
    gap:10px;
    top:-1rem;
    margin-bottom:5rem;
    @media screen and (max-width: 1499px){flex-wrap:wrap;}       
`
export const CategoriesContainer = styled.div`
    position:relative;
    display:flex;
    width:auto;
    height:3rem;
    border-top: 2px solid rgb(230,230,230);
    margin: 0 auto;
    background:transparent;
    top:-5rem;
    flex-wrap:wrap;
    @media screen and (max-width: 679px){}
`
export const CategoryButton = styled.button`
    width:8rem;
    height: 100%;
    left:30.5rem;
    float:right;
    background-color: white;
    border-style: none;
    font-family: 'Roboto Slab';
    font-weight:900;
    font-size:16px;;
    color:black;
    animation: fadeIn 2s;
    &:hover {
    background-color:rgb(240, 240, 240);
    @keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
    &:hover {
        background-color: black;
    }
`
export const Container = styled.div`
    height:auto;
    width:100%;
    overflow:hide;
    background:white;
    display:flex;
    flex-direction: column;
    transition:0.5s;
`