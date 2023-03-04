import styled from "styled-components";

export const CategoriesContainer = styled.div`
position:relative;
height:auto;
width:25%;
background:gray;
`

export const Container = styled.div`
    position:fixed;
    height:auto;
    width:65%;
    top:3rem;
    background:white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    z-index:2;
    visible:false;
    animation:slideTop 1s;
    @keyframes slideTop {

    0% {
        transform: translateY(-50rem);
        
    }
    100%{
    }
}
`