import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container,
} from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand href="/">Startups!</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Admin</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  Dashboard
                </NavLink>
              </NavItem>
            </Nav>
            <NavbarText>Welcome, Huzaifah</NavbarText>
          </Collapse>
        </Container>
      </Navbar>

      <header id="header">
        <div className="container">
          <div className="row">
            <div className="header-content col-md-10">
              <h1>
                <i className="fas fa-cog"></i>
                Dashboard <small className="msg">Manage Your Site</small>
              </h1>
            </div>
            <div className="col-md-2">
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="dropToggle">
                  Add Startups
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
