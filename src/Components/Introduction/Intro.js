import React from 'react';
import './intro.css'
import { Row, Col, Container, Card } from 'react-bootstrap';

const Intro = () => {
    const img = process.env.PUBLIC_URL + "/deep_learning.gif";
    return (
        <div className='introduction' id="action1">
            {/* <div className="card-overlay mt-5"> */}
            <div className="mt-5">
                <div className='intro-image'
                    style={{
                        backgroundImage: `url(${img})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center', 
                        height: '50vh',
                        // marginRight:'15%',
                        // marginLeft:'15%',
                    }}></div>
                {/* <div className='card-img-overlay text-white text-center mt-5'> */}
                <Container>
                    <div className='mt-5'>
                        {/* <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br /> */}
                        <br />
                        {/* <h1 className='intro-header mt-5'>Deep Learning Lab</h1>
                        <h5 className='intro-text'>Department of Computer Science</h5> */}
                        <h1 className=' garmond mt-5'><b className='garmond'>DEEP LEARING LAB</b></h1>
                        <h4 className=' garmond csueb_red'><b className='garmond'>Department of Computer Science</b></h4>
                    </div>
                </Container>
                
            </div>
        </div>
    )
}

export default Intro