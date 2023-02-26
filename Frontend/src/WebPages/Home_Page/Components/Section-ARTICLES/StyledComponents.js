import styled from "styled-components";

export const Container = styled.div`
    height:50rem;
    width:100%;
    background:rgb(245,245,245);
    transition:0.5s;
    :hover{
        transform:scale(1.1);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
        border-radius:1rem
    } 
`
export const Title = styled.title`
    position:relative;
    display:flex;
    font-family: 'Roboto Slab';
    font-size:25px;
    top:2rem;
    left:5rem;
    color:rgb(127,127,127)
`
export const ArticlesContainer = styled.div`
    position:relative;
    gap:5px 5px;
    height:auto;
    width:auto;
    background:transparent;
    top:3rem;
    margin:0 auto;
    border-top: 2px solid rgb(230,230,230);
`
