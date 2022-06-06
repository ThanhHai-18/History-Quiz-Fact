import React, { useContext } from "react";
import "../../css/NavbarHistory.css";
import { Container, Navbar as BSNavbar, Nav, Button, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import RegisterHistory from "./RegisterHistory";
import LoginHistory from "./LoginHistory";
import { AuthContext } from "../models/user";

export default function NavbarHistory() {
  const activeClassName = ({isActive}) => isActive ? 'nav-link text-dark' : 'nav-link' 
  const auth = useContext(AuthContext);
  return (
    <BSNavbar className="navbar-history">
      <Container fluid>
        <BSNavbar.Brand href="/" className="ms-5">History Quiz & Fact</BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="my-navbar" />
        <BSNavbar.Collapse id="my-navbar">
          <Nav className="ms-auto me-5">
            {
              auth.currentUser
              ? <>
              <NavLink className={activeClassName} to="/">Trang Chủ</NavLink>
              <NavLink className={activeClassName} to="/HomeTest">Test</NavLink>
              <NavDropdown align="end" menuVariant="dark" title={auth.currentUser.username}>
                <NavDropdown.Item href="#">Đăng xuất</NavDropdown.Item>
              </NavDropdown>
              </>
              : <>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <LoginHistory />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <RegisterHistory />
              </>
            }
          </Nav>
        </BSNavbar.Collapse> 
      </Container>
    </BSNavbar>
  );
}
