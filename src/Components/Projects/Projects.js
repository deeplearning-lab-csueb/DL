import React from 'react'
import { Row, Col, Container, Card } from 'react-bootstrap';
import projects_info from '../../projects.json'

const Projects = () => {
  return (
    <div className='mb-3' id="action2">
      <Container>
        <br></br>
        <br></br>
        <h2 className=''><b className='garmond'>Projects</b></h2>
        <Row>
          {/* <Card className='shadow-lg rounded mb-3'>
            <Card.Body> */}
              {projects_info.map((project) => {
                return (
                  <Col md={12} key={project.project_id}>
                    <h5 className='csueb_red  mt-4 mr-3'>{project.project_name}</h5>
                    <div className=' '>{project.desc}</div>
                  </Col>
                );
              })}
            {/* </Card.Body>
          </Card> */}
        </Row>
      </Container>
    </div>
  )
}

export default Projects
