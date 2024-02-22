import styled from "styled-components";
import Menu from "../Menu/menu";
import Logo from "../Logo/logo";

const HeaderContainer = styled.div`
width: 100%;
height: 120px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 15px;
background-color: #7F4AA4; 
color: white;
`;

function Header() {
    return (
        <HeaderContainer>
            
             <Logo/>
             <Menu/>
              
          
        </HeaderContainer>
    )
}

export default Header