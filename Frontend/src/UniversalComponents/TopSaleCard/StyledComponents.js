import styled from "styled-components";

export const ProductDetailsContainer = styled.div`
    height:3.5rem;
    width:11.5rem;
    background:transparent;
    display: inline-block;
    margin: 0 auto;
    padding: 3px;
`
export const Title = styled.p`
    font-size:16px;
    position:relative;
    font-family: 'Roboto Slab';
    font-weight:900;
    top:2rem;
    color:transparent;
`
export const Position = styled.span`
    position:relative;
    top:-6rem;
    left:-1.5rem;
    transition: 0.5s;
    background:rgb(52,110,155);
    border-radius: 50%;
    width: 34px;
    height: 34px;
    padding: 10px;
    color: white;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.50);
    font: 22px Roboto slab, sans-serif;
`
export const ProductImage = styled.img`
    height:18rem;
    width:11.5rem;
    margin:0 auto;
    transition:0.5s;
`

export const Container = styled.div`
    margin-top:3rem;
    height:28%;
    width:19rem;
    display:flex;
    flex-direction:column;
    background:transparent;
    border-radius:0.5rem;
    :hover{
        ${Title}{
            margin:0 auto;
            color:black;
            animation:slideUp 1s;
             @keyframes slideUp {
                0% {
                    transform: translateY(2rem);
                    opacity: 0;
                }
                100%{
                    opacity: 1;
                }
            }
        }
        ${Position}{
            background:rgb(218,169,57);
            top:-20rem;
            transform: scale(1.5);
        }
        ${ProductImage}{
            transform:scale(1.1);
        }
   
`