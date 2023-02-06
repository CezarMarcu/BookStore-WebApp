const img1 = require("./Resources/Book.png");
const img2 = require("./Resources/Tea.png");
const img3 = require("./Resources/Courses.png");
const img4 = require("./Resources/Posters.png");
const img5 = require("./Resources/Tshirt.png");
const img6 = require("./Resources/Manga.png");
const img7 = require("./Resources/Magazine.png");
const img9 = require("./Resources/Movies.png");
const img10 = require("./Resources/Podcast.png");
const img11 = require("./Resources/Papetery.png");

export const ProductCategories = [
    {name:"Audiobooks", subcategories:[]},

    {name:"Arta si Arhitectura", 
    subcategories:["Istoria Artei",
     "Arta Moderna",
     "Fotografie",
     "Muzica",
     "Istoria Muzicii",
     "Muzica Clasica",
     "Modelarea 3D",
     "Clasici in Muzica"]
    },
    
    {name:"Enciclopedii", subcategories:[
        "Zoologie","Anatomie","Botanica","Cultura generala","Atlas"
    ]},
    
    {name:"Biografii, Memorii, Jurnale", subcategories:[]},
    
    {name:"Lingvistica, Dictionare", subcategories:[
        "Gramatica", "Fonetica", "Sintaxa & Morfologie"
    ]},
    
    {name:"Limbi straine", subcategories:[]},
    
    {name:"Poezii,Teatru,Studii Literare", subcategories:[
        "Clasici", "Momente si Schite","Critici","Analize","Piese"
    ]},
    
    {name:"Fictiune", subcategories:[
        "Fantezie", "Clasici","Aventura","SF"
    ]},
    
    {name:"Crestinism", subcategories:[
        "Apologii", "Traduceri","Scrieri alternative","Interpretari","Predici","Marturisiri", "Studiu"
    ]},

]

export const CategoriesData = [
    {name:"CARTI", source:img1},
    {name:"CEAI", source:img2},
    {name:"CURSURI", source:img3},
    {name:"POSTERE", source:img4},
    {name:"IMPRIMEURI", source:img5},
    {name:"MANGA", source:img6},
    {name:"REVISTE", source:img7},
    {name:"FILME", source:img9},
    {name:"PODCASTURI", source:img10},
    {name:"PAPETARIE", source:img11},
    {name:"JUCARII", source:img11},
    {name:"JOCURI", source:img11},
    {name:"APPLE", source:img11},
    {name:"DESENE", source:img11},
    {name:"GOURMET", source:img11},

]