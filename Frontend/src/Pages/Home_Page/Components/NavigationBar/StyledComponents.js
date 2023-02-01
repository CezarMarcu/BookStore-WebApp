import styled from "styled-components";

export const NavContainer = styled.div`
    width: 100%;
    height: 4rem;
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    justify-content: center;
    gap:150px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);    
`

export const LeftLinks = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction:row;
    gap: 50px;
    animation:slideLeft .7s ease-in;
    animation-duration: 1s;

    @keyframes slideLeft {
    0% {
        transform: translateX(-4rem);
    }
`
export const RightLinks = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    gap: 50px;
    animation: slideRight .7s ease-in;
    animation-duration: 1s;
    
    @keyframes slideRight {
    0% {
        transform: translateX(4rem);
    }
}
`
export const ListMember = styled.a`
    animation: fadeIn 5s;
    font-family: Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif;
    font-size: 15px;
    color: black;
    text-decoration: none;
`

export const SignInButton = styled.button`
    width:8rem;
    height: 2.5rem;
    position: absolute;
    right: 3rem;
    background-color: grey;
    border-style: none;
    border-radius: 0.5rem;
    font-family: Arial, Helvetica, sans-serif;
    color:white;
    animation: fadeIn 2s;
    
    @keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`
export const Logo = styled.img`
    animation: fadeIn 6s;
    position: absolute;
    height: 7rem;
    width: 7rem;
    top: 0.3rem;
    @keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }

`