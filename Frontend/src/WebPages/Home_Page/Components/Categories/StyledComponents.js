import styled from "styled-components";

export const CategoriesContainer = styled.div`
    width: 100%;
    height: 30rem;
    top: 32rem;
    position: absolute;
    background-color: rgb(255, 255, 255);
    display: block;
`
export const SectionName = styled.p`
    font-size: 20px;
    animation: slideRight 3s;
`
export const FirstRow = styled.div`
    width: 100%;
    height: 13rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    justify-content: center;
    background-color: rgb(255, 255, 255);
    gap: 5rem;
    animation: slideRight 3s;

    @keyframes slideRight {

    0% {
        transform: translateX(-30rem);
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
`
export const SecondRow = styled.div`
    width: 100%;
    height: 13rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    justify-content: center;
    background-color: rgb(255, 255, 255);
    gap: 5rem;
    animation: slideLeft 3s;

    @keyframes slideLeft {

    0% {
        transform: translateX(30rem);
        opacity: 0;
    }

    100% {
        opacity: 1;
    }

`
