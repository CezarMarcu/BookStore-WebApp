import styled from "styled-components";

export const Container = styled.div`
    overflow: hidden;
    position: fixed;
    width: 65%;
    height: 3rem;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    z-index:1; 
`
export const NavButton = styled.button`
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
export const Logo = styled.img`
    position: fixed;
    transition: transform .8s;
    top: 0;
    animation: fadeIn 6s;
    height: 5rem;
    z-index:1;
    width: 5rem;
    &: hover{
        transform: scale(-1, 1);
    }
    @keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`
export const ProductsButton = styled.button`
    width:8rem;
    height: 100%;
    float:left;
    background-color:transparent;
    border-style: none;
    font-family: 'Roboto Slab';
    font-weight:900;
    font-size:16px;
    color:black;
    animation: fadeIn 2s;
    &:hover {
    background-color:rgb(240, 240, 240);
  }
    @keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

export const SearchContainer = styled.div``