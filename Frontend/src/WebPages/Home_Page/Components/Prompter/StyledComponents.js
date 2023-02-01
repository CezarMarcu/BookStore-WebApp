import styled from "styled-components";

export const PrompterContainer = styled.div`
    width: 100%;
    height: 40rem;
    background-color: rgb(244, 244, 244);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    animation: slideUp 1s;
    position:absolute;
    justify-content: center;
    align-items: center;
    display: block;
    gap:1px;

    @keyframes slideUp{
    0% {
            transform: translateY(10rem);
            opacity: 0;
        }
    100%{
        opacity: 1;
    }

`
export const Poster = styled.img`
    width: 77rem;
    height: fit-content;
    block-size: fit-content;
    animation:slideTop 3s;
    transition: transform 1s;
    border-radius: 5px;
    
    @keyframes slideTop {
    
    0% {
        transform: translateY(-50rem);
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}
`
export const GoToShopButton=styled.button`
    font-size:15px;
    background-color: rgb(255, 253, 251);
    width : 12rem;
    color:black;
    height:4rem;
    position:absolute;
    top:65%;
    left:10%;
    border:none;
    border-radius:15px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    
    
`