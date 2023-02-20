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