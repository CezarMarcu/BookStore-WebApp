import styled from "styled-components";

export const Container = styled.div`
    position:relative;
    left:19rem;
    top:50px;
    width:75.5%;
    height:90.7%;
    background:white;
`
export const Categories = styled.ul`
`

export const Category = styled.p`
    font-size:14px;
    font-weight:bold;
    display:flex;
    flex-orientation:column;
    width:15rem;
    height:1.5rem;
    padding-left:1rem;
    &:hover {
        background-color:rgb(80, 135, 82);
        color:white;
  }
`