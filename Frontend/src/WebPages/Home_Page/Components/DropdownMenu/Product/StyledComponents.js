import styled from "styled-components";

export const LinkButton = styled.p`
    position:absolute;
    font-size: 16px;
    top:10px;
    font-family: 'Source Code Pro';
    left:5rem;
    margin: auto;
`
export const Icon = styled.img`
    width:2rem;
    height:2rem;
    padding-left:8px;
`
export const ProductContainer = styled.div`
    background-color:rgb(245, 245, 245);
    position:relative;
    left:0rem;
    border:2px;
    margin-top:3px;
    margin-left:0;
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
    width:100%;
    height:3rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    gap:30px;
    &:hover{
        background-color:rgb(255, 255, 255);
    }

`