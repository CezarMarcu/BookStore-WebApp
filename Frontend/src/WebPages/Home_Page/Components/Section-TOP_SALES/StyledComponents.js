import styled from "styled-components";


export const Container = styled.div`
    height:auto;
    width:100%;
    background:transparent;
    display:flex;
    flex-direction: column;
`
export const Title = styled.p`
    position:relative;
    font-family: 'Roboto Slab';
    font-size:25px;
    color:rgb(127,127,127)
`
export const ProductsContainer = styled.div`
    position:relative;
    display:flex;
    flex-direction:row;
    height:100%;
    width:75%;
    background:transparent;
    margin: 0 auto;
    gap:30px;
    top:-2rem;
    margin-bottom:5rem;
`
export const CategoriesContainer = styled.div`
    position:relative;
    display:flex;
    flex-direction:row;
    width:auto;
    height:3rem;
    border-top: 2px solid rgb(230,230,230);
    margin: 0 auto;
    background:gray;
    top:-5rem;
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