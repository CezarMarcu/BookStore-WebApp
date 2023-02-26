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
const img12 = require("./Resources/Toys.png");
const img13 = require("./Resources/Games.png");
const img14 = require("./Resources/Apple.png");
const img15 = require("./Resources/Cartoons.png");
const img16 = require("./Resources/Gourmet.png");
const product1 = require("./Resources/product1.jpg");
const product2 = require("./Resources/product2.jpg");
const product3 = require("./Resources/product3.jpg")
const product4 = require("./Resources/product4.jpg")
const product5 = require("./Resources/product5.jpg");
const product6 = require("./Resources/product6.jpg");
const product7 = require("./Resources/product7.jpg")
const product8 = require("./Resources/product8.jpg")
const product9 = require("./Resources/product9.jpg");
const product10 = require("./Resources/product10.jpg");
const product11 = require("./Resources/product11.jpg");
const product12 = require("./Resources/product12.jpg");
const product13 = require("./Resources/product13.jpg")
export const articleImage = require("./Resources/AI.png")



export const PresaleProducts = [
    {name: "Mantuitorul Dunei",author:"Frank Herbert", price:"64.00. lei", img:product1, status: 'PRECOMANDA'},
    {name: "Cruciada Masinilor", author:"Frank Herbert", price:"64.00. lei", img:product2, status: 'PRECOMANDA'},
    {name:"Jihadul Budlerian", author:"Frank Herbert", price:"64.00. lei", img:product3, status: 'PRECOMANDA'},
    {name: "Batalia Corinului",author:"Frank Herbert", price:"64.00. lei", img:product4, status: 'PRECOMANDA'}
]

export const ReduceProducts = [
    {name: "Urzeala Tronurilor",author:"George R.R. Martin", price:"64.00. lei", img:product5,status: 'IN STOC'},
    {name: "Inclestarea Regilor", author:"George R.R. Martin", price:"64.00. lei", img:product6,status: 'IN STOC'},
    {name:"Iuresul Sabiilor", author:"George R.R. Martin", price:"64.00. lei", img:product7,status: 'IN STOC'},
    {name: "Festinul Ciorilor",author:"George R.R. Martin", price:"64.00. lei", img:product8,status: 'IN STOC'}
]

export const ComicMagazines = [
    {name: "Injustice Gods Among Us",author:"George R.R. Martin", price:"64.00. lei", img:product9,status: 'IN STOC'},
    {name: "Deadpool the greatest hero", author:"George R.R. Martin", price:"64.00. lei", img:product10,status: 'IN STOC'},
    {name:"Deadpool and Cable", author:"George R.R. Martin", price:"64.00. lei", img:product11,status: 'IN STOC'},
    {name: "Deadpool",author:"George R.R. Martin", price:"64.00. lei", img:product12,status: 'IN STOC'}
]

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
    {name:"JUCARII", source:img12},
    {name:"JOCURI", source:img13},
    {name:"APPLE", source:img14},
    {name:"DESENE", source:img15},
    {name:"GOURMET", source:img16},

]

export const TopSalesData = [
    {name: "Mantuitorul Dunei", img:product1, position:"1"},
    {name: "Iuresul Sabiilor", img:product7, position:"2"},
    {name: "Deadpool the greatest hero", img:product11, position:"3"},
    {name: "Red Dead Redemption 2", img:product13, position:"4"},
]
export const ArticlesData = [
    {title:"Wake up America",author:"Candace Owens", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ", img:articleImage},
    {title:"Mistakes that we do everyday",author:"Jordan Peterson", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", img:articleImage},
    {title:"ChatGPT will take over", author:"Jordan Peterson", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",img:articleImage},
    {title:"The unseen face of pornografy",author:"Candace Owens", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",img:articleImage},
    {title:"Fata nevazuta homosexualitatii",author:"Virgiliu Gheorghe", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",img:articleImage},
    
]