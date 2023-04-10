import React from 'react'
import { Row, Col, Container, Card } from 'react-bootstrap';
import projects_info from '../../projects.json'

const Projects = () => {
  return (
    <div className='mb-5'>
      <Container>
        <br></br>
        <h3 className='text-center mb-3'><b>PROJECTS</b></h3>
        <Row>
          {projects_info.map((project) => {
            return (
              <Col md={12} key={project.project_id}>
                <Card className='shadow-lg rounded mb-3'>
                  <Card.Body>
                    <h4 className='text-center mb-3'>{project.project_name}</h4>
                    <div>{project.desc}</div>
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

export default Projects