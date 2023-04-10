import React from 'react'
import { Row, Col } from 'react-bootstrap'
import '../Style.css'

const Footer = () => {
  const env = process.env.PUBLIC_URL;
  const logo = ["/facebook_icon.png", "/twitter_icon.png", "/linkedin_icon.png", "/instagram_icon.png"]
  return (
    <div>
      <div className='footer_one'>
        <Row>
          <Col md={4}>
            <div className='text-center'>
              <img className='uni_logo' role="button" alt='...' src={env + "/eb_logo.png"} />
            </div>
          </Col>
          <Col md={4} />
          <Col md={4}>
            <div className='text-center'>
              {logo.map((logo) => {
                return (
                  <img className='social_media_icon' role="button" alt='...' src={env + logo} />);
              })}
            </div>
          </Col>
        </Row>
      </div>
      <div className='footer_two'>
        <div className='text-center'>
          <footer>&copy; Copyright 2023</footer>
        </div>
      </div>
    </div>
  )
}

export default Footer