
import Footer from "../../components/components/Footer/footer"
import Header from "../../components/components/Header/header"
import { Container, ContatoLink, HistoryContainer, HistoryImg, HistoryList, HistoryText, HistoryTitle } from "./history.styles"
import { Link } from "react-router-dom"


function History() {
    return (
        <>
        <Header/>
           <Container>
                <HistoryContainer>
                    <HistoryList>
        <HistoryTitle>Nossa História</HistoryTitle>
        <HistoryText>O <b>Instituto G4</b> foi fundado em 2022 por um grupo de professores encantados por tecnologia e educação com um objetivo em comum: criar um espaço que oferecesse cursos de tecnologia e programação de <b>alta qualidade</b> e com grande foco em <b>acessibilidade</b> e <b>inclusão</b>.</HistoryText>
            


        <HistoryText>Desde o início, o <b>Instituto G4</b> teve um forte compromisso com a inovação. Acreditamos que a tecnologia pode ser uma ferramenta poderosa para promover a inclusão social para crianças e jovens de todo o Brasil. Por isso, nosso foco é oferecer cursos que preparem os alunos para as demandas do mercado de trabalho atual.</HistoryText>


        <HistoryText>Em 2023, lançamos nosso site, como uma forma de ampliar nosso alcance e levar nossos cursos a um público ainda maior.</HistoryText>


        <HistoryText>Aqui, é possível encontrar informações sobre nossos eventos, professores, central de contato e muito mais. Em breve, também ofereceeremos recursos para fomentar ainda mais o aprendizado, como artigos, vídeos e tutoriais.</HistoryText>


        <HistoryText>Estamos sempre trabalhando para melhorar nosso Instituto, tornando-o um espaço <b>seguro, receptivo e inclusivo</b>. Nosso objetivo é criar um canal online que inspire e apoie nossos alunos em suas jornadas de aprendizado.</HistoryText>


        <HistoryText><b>Para nos ajudar a continuar com nossos eventos beneficentes,</b> <ContatoLink to="/contact">clique aqui.</ContatoLink></HistoryText>
            </HistoryList>
            <HistoryList>
                <HistoryImg src="./images/instituto.png"/>
            </HistoryList>
                
             </HistoryContainer>
        </Container>
        <Footer/>
        </>
    )
}

export default History