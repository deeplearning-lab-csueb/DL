import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import '../Style.css'

const Topbar = () => {
    const img = process.env.PUBLIC_URL + "/csueb_one.png";
    return (
        <div>
            <Navbar className='top-bar' fixed="top">
                <Container>
                    <Navbar.Brand>
                        <img className='brand_logo' role="button" alt='...' src={img} />
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default Topbar