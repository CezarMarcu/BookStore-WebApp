import styled from "styled-components";

export const PrompterContainer = styled.div`
    width: 100%;
    height: 30.1rem;
    background-color:transparent;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    animation: slideUp 1s;
    display: block;
    @keyframes slideUp{
    0% {
            transform: translateX(10rem);
            opacity: 0;
        }
    100%{
        opacity: 1;
    }
`
export const Poster = styled.img`
    width: 100%;
    margin-top:-6.4rem;
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
export const EnrollButton=styled.button`
    font-family: 'Roboto Slab';
    font-size:16px;
    position:absolute;
    background-color: rgb(255, 253, 251);
    width : 12rem;
    color:black;
    height:4rem;
    top:25rem;
    left:10%;
    border:none;
    border-radius:15px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    &:hover {
        background-color:rgb(144, 185, 108);
        color:white;
    
    
`