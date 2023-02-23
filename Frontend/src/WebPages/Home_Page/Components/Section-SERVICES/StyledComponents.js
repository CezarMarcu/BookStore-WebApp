import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width:auto;
    height:15rem;
    margin:0 auto;
    gap:4rem;
    animation: slideRight 5s;
    background:transparent;
    top:45.3rem;
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