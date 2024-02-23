import styled from "styled-components";

const LogoContainer = styled.div`
    width: 250px;
    
`
const LogoImage = styled.img`
    height: 125px;
    width: 150px;
`
function Logo() {
    return (
            <LogoContainer>
                <LogoImage src=".\images\logo.png" alt="Logomarca da casa de eventos" />
            </LogoContainer>
    )
}

export default Logo