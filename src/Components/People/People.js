import React from 'react'
import { Card, Col, Row, Container } from 'react-bootstrap'
import members_info from '../../members.json'

const People = () => {
  const img = process.env.PUBLIC_URL + "/girl.png";
  return (
    <div style={{ paddingTop: "3%", paddingBottom: "3%" }}>
      <Container>
        <h3 className='text-center mb-3'><b>PEOPLE</b></h3>
        <Row>
          {members_info.map((member) => {
            return (
              <Col className='mb-4' md={12} key={member.member_id}>
                <Card className='shadow rounded'>
                  <Card.Body>
                    <Row>
                      <Col md={2}>
                        <Card.Img  src={img} />
                      </Col>
                      <Col>
                        <h4>{member.member_name}</h4>
                        <p className='text-muted'>{member.description}</p>
                        <p className='' style={{fontSize: '0.95rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit, lacus nec convallis commodo, odio nibh pretium nulla, id molestie quam mauris in dui. Quisque sagittis suscipit sem, sed laoreet quam maximus in. Sed maximus, sapien at fringilla posuere, lectus justo feugiat tellus, ut ullamcorper tellus lorem quis augue. Vestibulum sit amet nisi euismod, ullamcorper mi vel, dictum dolor. Nam eu ex non ipsum lacinia viverra. Aliquam rutrum posuere enim, vel interdum neque congue vel. Sed euismod augue risus, quis mollis leo commodo vel.</p>
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