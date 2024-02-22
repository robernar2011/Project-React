
import styled from "styled-components";
import { Link } from 'react-router-dom'

const MenuContainer = styled.div`
    width: calc(100% - 250px);
    height: 120px;
    display: flex;
    justify-content: right;
    align-items: center;
    `
    const MenuList = styled.ul`
    display: flex;
`

const MenuItem = styled.li`
    list-style-type: none;
`

const MenuLink = styled(Link)`
    color: #FBEE0F;    
    text-decoration: none;
    padding: 0 15px;
    &:hover {
        color: #6F9F9C;
    }
`
function Menu() {
    return (
            <MenuContainer>
                <MenuList>
                    <MenuItem>
                        <MenuLink to="/">Login</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink to="/contact">Contato</MenuLink>
                    </MenuItem>
                </MenuList>
            </MenuContainer>
    )
}
export default Menu