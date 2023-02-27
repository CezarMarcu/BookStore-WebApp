import React from 'react';
import { Slide1,Slide2,Slide3 } from "../../Database/DummyDatabase"
import {Element,Slider,Container,Dots,Dot} from "./StyledComponents"
const Events = [Slide1, Slide2, Slide3];
const delay = 7500;

const MyCarousel = () => {
    const [index, setIndex] = React.useState(0);
    
    const timeoutRef = React.useRef(null);
    
    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
        () =>
        setIndex((prevIndex) =>
          prevIndex === Events.length - 1 ? 0 : prevIndex + 1
        ),
      delay
        );

        return () => {resetTimeout();};
    }, [index]);

    return (
        <Container> 
            <Dots>
                {Events.map((_, idx) => (
                    <Dot key={idx} className={`slideshowDot${index === idx ? " active" : ""}`} onClick={() => {setIndex(idx);}}></Dot>
                ))}
            </Dots>    
            <Slider style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                {Events.map((image, index) => (
                <Element key={index} src={image}></Element>))}
            </Slider>
    </Container>
        
    );

}       
export default MyCarousel