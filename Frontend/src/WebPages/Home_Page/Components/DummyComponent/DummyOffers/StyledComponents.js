import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction: row;
    width:100%;
    height:12.5rem;
    animation: slideLeft 1.5s;
    background:transparent;
    @keyframes slideLeft{
    0% {
            transform: translateX(-25rem);
            opacity: 0;
        }
    100%{
        opacity: 1;
`
export const Offer = styled.div`
    width:33.3%;
    height:100%;
    background:transparent;
    margin-left:5px;
    transition: transform .8s;
    &: hover {
        transform: scale(1.5);
        z-index:+1;
    `
export const OfferCard = styled.img`
    width:100%;
    height:100%;
    border-radius:10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25); 
    
    
`