import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Prototipo</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/suscribers">Reportar Nuevo</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/donations">Errores Reportados</Link>
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>CMI</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;