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
  NavbarText
} from 'reactstrap';

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  
  return (
    <div>
      <Navbar style={{background:"#2F4F4F !important"}} color="light" light expand="md">
        <NavbarBrand href="/">Troubleshooting Guide</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Introduction</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components">Basic Framework</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components">ToolsInformation</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components">Steps to use a tool</NavLink>
            </NavItem>
          </Nav>
          <NavLink href="https://github.com/TroubleshootingGuide/TroubleshootingGuide">GitHub</NavLink>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default TopNav;