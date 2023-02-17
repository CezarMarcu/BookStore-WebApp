import "./Home.css"

import PageContent from "../../UniversalComponents/Content_Card"
import Header from "../../UniversalComponents/Header"

import { PresaleProducts } from "../../Database/DummyDatabase"
import { ReduceProducts } from "../../Database/DummyDatabase"
import { ComicMagazines } from "../../Database/DummyDatabase"
import { TopSalesData } from "../../Database/DummyDatabase"

import Navbar from "./Components/Section-NAVBAR"
import Prompter from "./Components/Section-PROMPTER"
import Offers from "./Components/Section-OFFERS"
import Services from "./Components/Section-SERVICES"
import Presales from "./Components/Section-PRESALES"
import Reduced from "./Components/Section-REDUCED"
import Comics from "./Components/Section-COMICS"
import TopSales from "./Components/Section-TOP_SALES"
import Articles from "./Components/Section-ARTICLES"
import Footer from "./Components/Section-FOOTER"

export default function HomePage () {
    return (
        <>  
            <Header></Header>
            <PageContent>
                <Navbar></Navbar>
                <Prompter></Prompter>
                <Offers></Offers>
                <Services></Services>
                <Presales items={PresaleProducts}></Presales>
                <Reduced items={ReduceProducts}></Reduced>
                <Comics items = {ComicMagazines}></Comics>
                <TopSales items = {TopSalesData}></TopSales>
                <Articles></Articles> 
            </PageContent>
            <Footer></Footer>
       
        
        </>
    )
}