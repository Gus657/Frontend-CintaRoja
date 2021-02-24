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
  NavbarText
} from 'reactstrap';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Proyecto</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/suscribers">Suscribers</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/donations">Donations</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                  <Link to="/new-donation">New Donation</Link>
                </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>BIKEBOO</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
