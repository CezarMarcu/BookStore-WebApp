import styled from "styled-components";

export const PrompterContainer = styled.div`
    width: 100%;
    height: 34rem;
    background-color: rgb(227, 231, 229);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    animation: slideUp 1s;
    position:absolute;
    top:3rem;
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
    width: 22rem;
    height: 22rem;
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
    &:hover {
        transform: scale(1.4);
    }
`
export const GoToShopButton=styled.button`
    font-size:16px;
    width : 15rem;
    height:5rem;
    position:absolute;
    top:75%;
    left:45%
    
    
`