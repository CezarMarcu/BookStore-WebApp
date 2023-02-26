import "./style.css"
import { Cover6 } from "../../Database/DummyDatabase"
const Carousel = () => {
    return(
        <>

            <div class="slider">
                <img id="img-1" src={Cover6} alt="Image 1"/>
                <img id="img-2" src="img-2.jpg" alt="Image 2"/>
                <img id="img-3" src="img-3.jpg" alt="Image 3"/>
            </div>
            <div class="navigation-button">
                <span class="dot active"></span>
                <span class="dot"></span>
                <span class="dot"></span>
            </div>


        </>
        
    )
}
export default Carousel