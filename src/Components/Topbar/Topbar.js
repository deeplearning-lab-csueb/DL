import React from 'react'
import { Container, Navbar, Nav, Offcanvas } from 'react-bootstrap'
import '../Style.css'

const Topbar = () => {
    const img = process.env.PUBLIC_URL + "/csueb_one.png";
    return (
        <div>
            <>
                {[false].map((expand) => (
                    <Navbar className='pt-4 pb-4 blur' key={expand} expand={expand} data-bs-theme="dark"
                        style={{
                            // backgroundColor: 'rgba(255, 255, 255, 0.7)',
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            // backdropFilter: 'blur(15px) brightness(75%) saturate(70%)'
                        }}
                        variant="dark" fixed="top">
                        <Container fluid>

                            <Container> 
                                <Navbar.Brand href="#" >
                                    <img className='brand_logo' role="button" alt='...' src={img} />
                                </Navbar.Brand>
                            </Container>
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
                                        style={{ backgroundColor: '#000000', width: '100%', color: '#ffffff' }}
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