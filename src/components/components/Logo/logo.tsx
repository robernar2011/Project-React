import styled from "styled-components";

const LogoContainer = styled.div`
    width: 250px;
`
const LogoImage = styled.img`
    height: 100px;
    max-width: 100%;
    flex-grow:1
`
function Logo() {
    return (
            <LogoContainer>
                <LogoImage src=".\images\logo.png" alt="Logomarca da casa de eventos" />
            </LogoContainer>
    )
}

export default Logo