import styled from "styled-components";

export const Container = styled.div`
    height:50rem;
    width:100%;
    background:rgb(245,245,245); 
`
export const Title = styled.title`
    position:relative;
    display:flex;
    font-family: 'Roboto Slab';
    font-size:25px;
    top:5rem;
    left:5rem;
    color:rgb(127,127,127)
`
export const ArticlesContainer = styled.div`
    position:relative;
    gap:5px 5px;
    height:auto;
    width:95%;
    background:gray;
    top:6rem;
    margin:0 auto;
    border-bottom: 2px solid rgb(230,230,230);
`
export const Section1 = styled.div`
    display:flex;
    flex-direction:column;
    height:auto;
    width:49%;
    float:left;
    margin:left:5px;
    margin-top:10px;
    background:transparent;
`
export const Section2 = styled.div`
    display:flex;
    flex-direction:column;
    height:auto;
    width:49%;
    float:right;
    margin-top:10px;
    background:transparent;
`
