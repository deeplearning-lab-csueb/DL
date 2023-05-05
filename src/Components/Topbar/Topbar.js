import React from 'react'
import { Container, Navbar, Nav, Offcanvas } from 'react-bootstrap'
import '../Style.css'

const Topbar = () => {
    const img = process.env.PUBLIC_URL + "/csueb_one.png";
    return (
        <div>
            <>
                {[false].map((expand) => (
                    <Navbar key={expand} expand={expand} bg='dark' variant="dark" fixed="top">
                        <Container fluid>
                            <Navbar.Brand href="#">
                                <img className='brand_logo' role="button" alt='...' src={img} />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title 
                                    className='text-center'
                                    id={`offcanvasNavbarLabel-expand-${expand}`}
                                    style={{backgroundColor: '#000000', width: '100%', color: '#ffffff'}}
                                    >
                                        <b>MENU</b>
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-end flex-grow-1 pe-3" >
                                        <Nav.Link href="#action1">Home</Nav.Link>
                                        <Nav.Link href="#action2">Projects</Nav.Link>
                                        <Nav.Link href="#action3">Our Team</Nav.Link>
                                        <Nav.Link href="#action4">Helpful Resources</Nav.Link>
                                        <Nav.Link href="#action5">Contact</Nav.Link>
                                    </Nav>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                ))}
            </>
        </div>
    )
}

export default Topbar