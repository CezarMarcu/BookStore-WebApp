import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width:100%;
    height:12rem;
    animation: slideRight 1.5s;
    background:white;
    position:absolute;
    top:45.3rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25); 
    @keyframes slideRight{
    0% {
            transform: translateX(25rem);
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
    `
export const Symbol = styled.img`
    width:70px;
    height:70px;
    `

export const DescriptionContainer = styled.div``
export const Description = styled.p`
    font-size:13px;
`
export const Title = styled.p`
    font-size:16px;
    font-family: 'Source Code Pro';
`