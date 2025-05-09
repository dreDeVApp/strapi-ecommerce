import React, { useState } from "react";
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
} from "reactstrap";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";


const CustomNav = ({ basketItems, isLoggedIn, username }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const loginLogout = isLoggedIn ? (
    <NavLink tag={Link} to="/logout">
      Logout
    </NavLink>
  ) : (
    <NavLink tag={Link} to="/login" fontFamily="Tropical Orange" >
      Login
    </NavLink>
  );

  return (
    <div className="custom-nav">
      <Navbar color="light" light expand="md" container>
        <NavbarBrand tag={Link} to="/" className="mr-auto" fontFamily="Tropical Orange"  >
          <img src="/client/public/DREHENDZ.svg" alt="drehendz" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className="mr-2" />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <UncontrolledDropdown nav inNavbar>
              {isLoggedIn ? (
                <>
                  <DropdownToggle nav caret>
                    {username} 
                  </DropdownToggle>
                  <DropdownMenu end>
                    <DropdownItem>Your account</DropdownItem>
                    <DropdownItem>
                      <NavLink tag={Link} to="/orders">
                        Your orders
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink tag={Link} to="/profile">
                        Your profile
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>{loginLogout}</DropdownItem>
                  </DropdownMenu>
                </>
              ) : (
                loginLogout
              )}
            </UncontrolledDropdown>
            <NavItem>
              <NavLink tag={Link} to="/basket" className="basket-icon-wrapper">
                <span className="basket-items">{basketItems}</span>
                < BsCart2 className="basket-icon" />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default CustomNav;
