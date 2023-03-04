import styled from "styled-components";


export const Container = styled.div`
    background-color:rgb(245, 245, 245);
    border:2px;
    display:flex;
    flex-wrap: wrap;
    width:100%;
    height:3rem;
    gap:1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    &:hover{
        background-color:rgb(255, 255, 255);
        color:rgb(71,186,75)
    }

`

export const LinkButton = styled.p`
    display:flex;
    font-family: 'Roboto Slab';
    background:transparent;
    font-size:15px;
    margin-left:2rem;
    font-weight:900;
`
export const Icon = styled.img`
    width:1.5rem;
    height:1.5rem;
    padding-left:28px;
    padding-top:15px;
`
