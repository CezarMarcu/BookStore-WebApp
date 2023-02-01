import Category from "./Sub-Components/Category"
import { CategoriesContainer, FirstRow, SecondRow,SectionName} from "./StyledComponents"

const books = require('./Resources/Books.png')
const tea =  require('./Resources/Tea.png')
const tutorial = require('./Resources/Tutorial.png')
const poster =  require('./Resources/Poster.png')
const print = require('./Resources/Imprimeu.png')

const categories = [
    {img:books, title:'Carti', description:'O gama variata de carti pentru a sadisface nevoile intelectuale ale oricui'},
    {img:tea, title:'Ceai', description:'Cele mai fine sortimente de ceai, atat pentru cunoscatori cat si pentru amatori'},
    {img:tutorial, title:'Cursuri', description:'Explicam pe intelesul tuturor enigmele diferitelor domenii'},
    {img:poster, title:'Postere', description:'Decoreza-ti camera in felul tau cu postere de cea mai buna calitate'},
    {img:print, title:'Imprimeuri', description:'Indraznes-te sa ai propriul stil'}
]

export default function Categories () {
    return(
        <div>
            <CategoriesContainer>
 
                <SectionName>Categorii</SectionName>
                <FirstRow>
                    <Category avatar={categories[0].img} title={categories[0].title} description={categories[0].description}></Category>
                    <Category avatar={categories[1].img} title={categories[1].title} description={categories[1].description}></Category>
                    <Category avatar={categories[2].img} title={categories[2].title} description={categories[2].description}></Category>
                </FirstRow>
 
                <SecondRow>
                    <Category avatar={categories[3].img} title={categories[3].title} description={categories[3].description}></Category>
                    <Category avatar={categories[4].img} title={categories[4].title} description={categories[4].description}></Category>
                </SecondRow>
 
            </CategoriesContainer>
        </div>
    )
}