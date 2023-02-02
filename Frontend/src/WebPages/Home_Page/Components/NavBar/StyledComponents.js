import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 3rem;
    background-color: rgb(255, 255, 255);
    position: absolute;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25); 
`
export const NavButtons = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`
export const NavButton = styled.button`
    width:8rem;
    height: 100%;
    left:30.5rem;

    position:relative;
    background-color: white;
    border-style: none;
    right:0px;

    font-family: 'Source Code Pro';
    font-size:16px;;
    color:black;

    display: inline-block;
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
    animation: fadeIn 6s;
    position: absolute;
    display: flex-box;
    right:37rem;
    height: 7rem;
    width: 7rem;
    top: 0.3rem;
    @keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }

`
export const ProductsButton = styled.button`

    position:absolute;
    width:8rem;
    height: 100%;

    background-color:transparent;
    border-style: none;

    font-family: 'Source Code Pro';
    font-size:16px;
    color:black;
    left:0rem;
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
export const DropDownContent = styled.div`
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
`
export const DropDownElement = styled.a`
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
`