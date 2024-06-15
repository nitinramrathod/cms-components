"use client";

import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Wrapper = styled.div`
  display: flex;
  gap: 30px;
`;

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">NextJS 14</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Wrapper>
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
          </Wrapper>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
