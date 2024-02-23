import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuContainer = styled.div`
  width: calc(100% - 250px);
  height: 120px;
  display: flex;
  justify-content: right;
  align-items: center;
`;
const MenuList = styled.ul`
  display: flex;
`;

const MenuItem = styled.li`
  list-style-type: none;
`;

const MenuLink = styled(Link)`
  color: #fbee0f;
  text-decoration: none;
  padding: 0 15px;
  &:hover {
    color: #6f9f9c;
  }
`;
function Menu() {
  return (
    <MenuContainer>
      <MenuList>
        <MenuItem>
          <MenuLink to="/homepage">Homepage</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/contact">Contato</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/history">Nossa História</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/about">Sobre nós</MenuLink>
        </MenuItem>
        <MenuItem>
                        <MenuLink to="/login">Login</MenuLink>
                    </MenuItem>
      </MenuList>
    </MenuContainer>
  );
}
export default Menu;
