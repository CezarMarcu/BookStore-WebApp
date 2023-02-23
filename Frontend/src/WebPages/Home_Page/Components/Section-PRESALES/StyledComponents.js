import styled from "styled-components";


export const Container = styled.div`
    height:auto;
    width:auto;
    background:rgb(245,245,245);
    display:flex;
    flex-direction: row;
    @media screen and (max-width: 1499px) {
        flex-direction:column;
`
export const TitleContainer = styled.div`
position:relative;
height:auto;
width:11rem;
left:1rem;
background:transparent;
 @media screen and (max-width: 1499px) {
    margin-bottom:1rem;
    width:100%;
`
export const Title = styled.p`
    position:relative;
    font-family: 'Roboto Slab';
    font-size:25px;
    color:rgb(127,127,127);
    top:11rem;
    left:0rem;
    @media screen and (max-width: 1499px) {
        top:0rem;
`
export const ProductsContainer = styled.div`
    position:relative;
    display:flex;
    flex-direction:row;
    height:auto;
    margin:0 auto;
    width:auto;
    gap:1rem;
    background:transparent;
     @media screen and (max-width: 1499px) {
        top:-3rem;
        left:0;
        gap:0;
    
    @media screen and (max-width: 1025px) {
        top:-3rem;
        left:0;
        flex-direction:column;
    // background:rgb(245,245,245);
`