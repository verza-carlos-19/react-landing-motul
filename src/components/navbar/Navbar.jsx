import { ListItem, NavbarBox, NavbarList } from "./navbarStyles";

function Navbar() {
  return (
    <NavbarBox>
      <NavbarList>
        <ListItem>Inicio</ListItem>
        <ListItem>Productos</ListItem>
      </NavbarList>
    </NavbarBox>
  );
}

export default Navbar;
