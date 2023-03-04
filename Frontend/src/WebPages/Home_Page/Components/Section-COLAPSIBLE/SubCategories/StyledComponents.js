import styled from "styled-components";

export const Container = styled.div`
    position:relative;
    left:20rem;
    width:75.5%;
    height:100%;
    top:-50rem;
    background:white;
`
export const Categories = styled.ul`
    position:relative;
    top:2rem;
`
export const Category = styled.p`
    font-size:14px;
    margin-top:-10px;
    font-weight:bold;
    top:-3rem;
    position:relative;
    display:flex;
    width:15rem;
    height:1.2rem;
    padding-left:0rem;
    &:hover {
        background-color:rgb(80, 135, 82);
        color:white;
  }
`
export const SubCategories = styled.ul`
  position:relative;
  top:-4rem;
  left:-1rem;
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