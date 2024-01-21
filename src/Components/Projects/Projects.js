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
                {project.tech_stack && <div style={{ marginTop:"20px" }}><strong>Technology Stack :</strong> {project.tech_stack}</div>}
                <div className='project_desc'>{project.desc}</div>
                {project.link && <div style={{ lineHeight: 1.6 }}><strong>Take a look :</strong> <a className='csueb_red' href={project.link} target="_blank" rel="noopener noreferrer">Demo </a></div>}
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  )
}

export default Projects
