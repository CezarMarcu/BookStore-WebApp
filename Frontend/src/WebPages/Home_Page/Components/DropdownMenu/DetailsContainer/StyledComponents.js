import styled from "styled-components";

export const Container = styled.div`
    position:relative;
    left:19rem;
    width:75.5%;
    height:auto;
    background:white;
`
export const Categories = styled.ul`
    gap:0;
`
export const Category = styled.p`
    font-size:14px;
    font-weight:bold;
    display:flex;
    width:15rem;
    top:0.5rem;
    height:1.2rem;
    padding-left:0rem;
    &:hover {
        background-color:rgb(80, 135, 82);
        color:white;
  }
`
export const SubCategories = styled.ul`
  position:relative;
  bottom:1rem;
`
export const SubCategory = styled.a`
    display:flex;
    font-size:12px;
    width:9rem;
    height:1rem;
    &:hover {
        background-color:rgb(80, 135, 82);
        color:white;
`

