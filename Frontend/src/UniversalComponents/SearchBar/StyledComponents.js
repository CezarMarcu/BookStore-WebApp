import styled from "styled-components";

export const InputValue = styled.p`
    display:flex;
    font-family:'Roboto Slab';
    font-weight:900;
    font-size:16px;
    margin-top:0.8rem;
    margin-left:1rem;
    transition:0.5s;
`
export const InputForm = styled.input`
    width:70%;
    height:3rem;
    position:relative;
    top:0.5rem;
    border-top:none;
    border-left:none;
    border-right:none;
    border-bottom:none;
    background:transparent;
    transition:1s;
    :focus{
        outline:none;
    }
`
export const Input = styled.div`
    width:20rem;
    height:100%;
    display:flex;
    flex-direction:column;
    background:transparent;
    :hover{
        ${InputValue}{
            margin-top:0;
            font-size:10px;
            color:rgb(37,199,58);
        }

        ${InputForm}{
            height:50%;
            top:-0.5rem;
            border-bottom:2px solid rgb(37,199,58);
        }
        border-bottom:2px solid rgb(37,199,58);
    }
`