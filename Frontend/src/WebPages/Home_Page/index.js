import PageContent from "../../UniversalComponents/Content_Card"
import Header from "../../UniversalComponents/Header"
import { PresaleProducts } from "../../Database/DummyDatabase"
import { ReduceProducts } from "../../Database/DummyDatabase"
import { ComicMagazines } from "../../Database/DummyDatabase"
import DummyContainer from "./Components/DummyComponent/DummyNavbar"
import DummyPrompter from "./Components/DummyComponent/DummyPrompter"
import DummyOffers from "./Components/DummyComponent/DummyOffers"
import "./Home.css"
import DummyServices from "./Components/DummyComponent/DummyServices"
import DummyPresales from "./Components/DummyComponent/DummyPresales"
import DummyReduced from "./Components/DummyComponent/DummyReduced"
import DummyComics from "./Components/DummyComponent/DummyCommics"

export default function HomePage () {
    return (
        <>  
            <Header></Header>
            <PageContent>
                <DummyContainer></DummyContainer>
                <DummyPrompter></DummyPrompter>
                <DummyOffers></DummyOffers>
                <DummyServices></DummyServices>
                <DummyPresales items={PresaleProducts}></DummyPresales>
                <DummyReduced items={ReduceProducts}></DummyReduced>
                <DummyComics items = {ComicMagazines}></DummyComics>
            </PageContent>
       
        
        </>
    )
}