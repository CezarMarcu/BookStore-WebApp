import { Container } from "./StyledComponents"
import { Title } from "./StyledComponents"
import { ArticlesContainer } from "./StyledComponents"
import Article from "../../../../UniversalComponents/Article_Card"
import { Section1, Section2 } from "./StyledComponents"
import { articleImage } from "../../../../Database/DummyDatabase"
const Articles= () => {
    return(
        <Container>
            <Title>ARTICOLE</Title>
            <ArticlesContainer>
                <Section1>
                    <Article title="CANDACE OWENS| WAKE UP AMERICA" description="bla BLA SJADHSAOIDAOKAORJASDO" img={articleImage}></Article>
                    <Article title="CANDACE OWENS| WAKE UP AMERICA" description="bla BLA SJADHSAOIDAOKAORJASDO" img={articleImage}></Article>
                    <Article title="CANDACE OWENS| WAKE UP AMERICA" description="bla BLA SJADHSAOIDAOKAORJASDO" img={articleImage}></Article>
                    <Article title="CANDACE OWENS| WAKE UP AMERICA" description="bla BLA SJADHSAOIDAOKAORJASDO" img={articleImage}></Article>
                    <Article title="CANDACE OWENS| WAKE UP AMERICA" description="bla BLA SJADHSAOIDAOKAORJASDO" img={articleImage}></Article>
                </Section1>
                <Section2>
                        <Article title="CANDACE OWENS| WAKE UP AMERICA" description="bla BLA SJADHSAOIDAOKAORJASDO" img={articleImage}></Article>
                        <Article title="CANDACE OWENS| WAKE UP AMERICA" description="bla BLA SJADHSAOIDAOKAORJASDO" img={articleImage}></Article>
                        <Article title="CANDACE OWENS| WAKE UP AMERICA" description="bla BLA SJADHSAOIDAOKAORJASDO" img={articleImage}></Article>
                        <Article title="CANDACE OWENS| WAKE UP AMERICA" description="bla BLA SJADHSAOIDAOKAORJASDO" img={articleImage}></Article>
                   
                </Section2>
            </ArticlesContainer>
        </Container>
    )
}
export default Articles