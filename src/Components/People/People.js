import React from 'react'
import { Card, Col, Row, Container } from 'react-bootstrap'
import members_info from '../../members.json'
import past_members_info from '../../past_members.json'

const People = () => {
  const img = process.env.PUBLIC_URL + "/girl.png";
  return (
    <div id="action3" style={{ paddingTop: "3%", paddingBottom: "3%" }}>
      <Container>
        <h2 className='mb-3'><b className='garmond'>Our Team</b></h2>
        <Row>
          {members_info.map((member) => {
            return (
              <Col className='mb-2' md={12} key={member.member_id}>
                {/* <Card className='shadow rounded'>
                  <Card.Body> */}
                <Row>
                  {/* <Col md={2}>
                        <Card.Img  src={img} />
                      </Col> */}
                  <Col>
                    <h5 ><a className='csueb_red' href={member.link}>{member.member_name}</a></h5>
                    <p className='text-muted'>{member.description}</p>
                    {/* <p className='' style={{ fontSize: '0.95rem' }}><a href="https://www.csueastbay.edu/directory/profiles/cs/lihongmin.html">Profile</a></p> */}
                  </Col>
                </Row>
                {/* </Card.Body>
                </Card> */}
              </Col>
            );
          })}
        </Row>
        <h2 className='mb-3 mt-3'><b className='garmond'>Past Members</b></h2>
        <Row>
          {past_members_info.map((member) => {
            return (
              <Col className='mb-2' md={12} key={member.member_id}>
                {/* <Card className='shadow rounded'>
                  <Card.Body> */}
                <Row>
                  {/* <Col md={2}>
                        <Card.Img  src={img} />
                      </Col> */}
                  <Col>
                    <h5 className='csueb_red'>  {member.member_name}</h5>
                    <p className='text-muted'>{member.description}</p>
                    {/* <p className='' style={{ fontSize: '0.95rem' }}><a href="https://www.csueastbay.edu/directory/profiles/cs/lihongmin.html">Profile</a></p> */}
                  </Col>
                </Row>
                {/* </Card.Body>
                </Card> */}
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  )
}

export default People