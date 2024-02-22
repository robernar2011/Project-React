import styled from "styled-components";

const FooterContainer = styled.div`
background-color: #7F4AA4; 
color: white; 
width: 100%;
height: 120px;
align-items: center;
justify-content: left;
display: flex
`

const FooterText = styled.p`
    padding: 0 15px;
`

const Slogan = styled.span`
font-style: italic;`

function Footer() {
    return (
        <FooterContainer>
            <FooterText>  <Slogan>"Ninguém educa ninguém, ninguém educa a si mesmo, as pessoas se educam entre si, mediadas
                pelo mundo."</Slogan> - Paulo Freire 
            <p> Copyright &copy; 2023 | Site desenvolvido por G4</p></FooterText>
        </FooterContainer>
    )
}
export default Footer