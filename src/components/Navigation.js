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
        <NavbarBrand href="/">Proyectoefdg</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/suscribers">Test12wer</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/donations">Test</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                  <Link to="/new-donation">New Donation</Link>
                </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>EXAMPLE 2.0</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
