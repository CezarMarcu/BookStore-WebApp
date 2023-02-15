import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width:100%;
    height:15rem;
    animation: slideRight 5s;
    background:transparent;
    top:45.3rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25); 
    @keyframes slideRight{
    0% {
            opacity: 0;
        }
    100%{
        opacity: 1;
`
export const Service = styled.div`
    width:33.3%;
    height:100%;
    background:transparent;
    margin-left:5px;
    margin-top:1.5rem;
    `
export const Symbol = styled.img`
    width:70px;
    height:70px;
    `
export const DescriptionContainer = styled.div`
height:100%;
background:transparent;
`
export const Description = styled.p`
    font-family: 'Roboto Slab';
    font-size:14px;
    margin:auto;
`
export const Title = styled.p`
    font-family: 'Roboto Slab';
    font-size:16px;
    font-weight:900;
`