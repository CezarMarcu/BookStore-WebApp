import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    top:-1.5rem;
    width: auto;
    height: 30rem;
    overflow: hidden;
    background-color:transparent;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
`
export const Dots = styled.div`
    position: relative;
    width:auto;
    top:26.7rem;
    height: 3rem;
    background-color:transparent;
    margin:0 auto;
    z-index: 2;
`
export const Dot = styled.span`
    display: inline-block;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    cursor: pointer;
    margin: 15px 7px 0px;
    background-color: #c4c4c4;
    :active{
        background-color: #6a0dad;
    }
`
export const Slider = styled.div`
    white-space: nowrap;
    transition: ease 3000ms;`

export const Element= styled.img`
    position: relative;
    display: inline-block;
    height: 30rem;
    width: 100%;
    object-fit:cover;
    top:-2rem;
    left:0rem;
    border-radius: 10px;
`

