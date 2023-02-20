import styled from "styled-components";

export const Container = styled.div`
    position:fixed;
    height:48rem;
    width:65%;
    top:3rem;
    background:white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    z-index:1;
    transition: max-height 0.2s ease-out;
    visible:false;
}
`
export const ProductsButton = styled.button`
    width:8rem;
    height: 100%;
    float:left;
    background-color:transparent;
    border-style: none;
    font-family: 'Roboto Slab';
    font-weight:900;
    font-size:16px;
    color:black;
    animation: fadeIn 2s;
    &:hover {
        background-color:rgb(240, 240, 240);
  }
    @keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`