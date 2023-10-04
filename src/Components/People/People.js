import React from 'react'
import { Card, Col, Row, Container } from 'react-bootstrap'
import members_info from '../../members.json'

const People = () => {
  const img = process.env.PUBLIC_URL + "/girl.png";
  return (
    <div id="action3" style={{ paddingTop: "3%", paddingBottom: "3%" }}>
      <Container>
        <h3 className='text-center mb-3'><b>Our Team</b></h3>
        <Row>
          {members_info.map((member) => {
            return (
              <Col className='mb-4' md={12} key={member.member_id}>
                <Card className='shadow rounded'>
                  <Card.Body>
                    <Row>
                      {/* <Col md={2}>
                        <Card.Img  src={img} />
                      </Col> */}
                      <Col>
                        <h4><a href={member.link}>{member.member_name}</a></h4>
                        <p className='text-muted'>{member.description}</p>
                        {/* <p className='' style={{ fontSize: '0.95rem' }}><a href="https://www.csueastbay.edu/directory/profiles/cs/lihongmin.html">Profile</a></p> */}
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  )
}

export default People