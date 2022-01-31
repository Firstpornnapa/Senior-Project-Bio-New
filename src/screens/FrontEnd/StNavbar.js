import React from 'react'
import { Button, Nav, NavDropdown, Navbar, NavItem, Container, ContainerFluid, ModalFooter, } from 'react-bootstrap';
import { useState, useEffect, useMemo } from 'react'
import axios from 'axios'
import '../FrontEnd/css/home.css'
import { Link } from 'react-router-dom'
import connection from '../FrontEnd/img/connection.png'

const i = JSON.parse(localStorage.getItem("user"));

const StNavbar = () => {
  function logout() {
    localStorage.removeItem('user')
    window.location.reload();
  }
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" >
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={connection}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            BioRmutt
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link href="/StHome">หน้าเเรก</Nav.Link>
              <Nav.Link href="/StChemicalList">สารเคมี</Nav.Link>
              <Nav.Link href="/StToolsList">อุปกรณ์</Nav.Link>
              <Nav.Link href="/StPickingListChemical">รายการเบิกสารเคมี</Nav.Link>
              <Nav.Link href="/StPickingListTool">รายการเบิกอุปกรณ์</Nav.Link>
              <NavDropdown title="ตะกร้าสารเคมีและอุปกรณ์" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/StCartChemical">เบิกสารเคมี</NavDropdown.Item>
                <NavDropdown.Item href="/StCartTools">ยืมอุปกรณ์</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">{i.std_name}</Nav.Link>
              <Nav.Link eventKey={2} onClick={logout} href="#memes">
                ออกจากระบบ
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </>

  );
}

export default StNavbar
