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
  NavbarText,Input
} from 'reactstrap';

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  
  return (
    <div>
      <Navbar style={{background:"#2F4F4F !important"}} color="light" light expand="md">
        <NavbarBrand href="/TroubleshootingGuide#">Troubleshooting Guide</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        <Input style={{width:"50%", marginLeft:"20%"}}
          type="search"
          name="search"
          id="exampleSearch"
          placeholder="Tell me about your issue"
        />
          <Nav className="mr-auto" navbar>
            {/* <NavItem>
              <NavLink href="/TroubleshootingGuide#/">Introduction</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/TroubleshootingGuide#/Framework/">Basic Framework</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/TroubleshootingGuide#/Tools/">ToolsInformation</NavLink>
            </NavItem> */}
          
          </Nav>
          <NavLink href="https://github.com/TroubleshootingGuide/TroubleshootingGuide">GitHub</NavLink>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default TopNav;