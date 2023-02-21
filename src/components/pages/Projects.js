import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import '../pages/App.css';


export default function Projects() {
  return (
    <Container>
    <Row xs={1} md={2} className="g-4">
    <Col className="projects">
        <Card className="project-card">
          <Card.Img className="project-img" variant="top" src="https://www.rc.virginia.edu/images/accord/project.png" />
          <Card.Body>
            <Card.Title>SLO 1</Card.Title>
            <Card.Text>
              SLO 1 information
            </Card.Text>
            {/* <a className="button" href="https://github.com/GSiggins/ingredients" role="button"
            ><i className="fab fa-github"></i></a>
            <a className="buttong" href="https://gsiggins.github.io/ingredients/" role="button"
            ><iconify-icon icon="simple-icons:githubpages" class="icon"></iconify-icon></a> */}
          </Card.Body>
        </Card>
      </Col>
      <Col className="projects">
        <Card className="project-card">
          <Card.Img className="project-img" variant="top" src="https://www.rc.virginia.edu/images/accord/project.png" />
          <Card.Body>
            <Card.Title>SLO 2</Card.Title>
            <Card.Text>
            SLO 2 information
            </Card.Text>
            {/* <a className="button" href="https://github.com/MaSaLo13/Weather-Dash" role="button"
            ><i className="fab fa-github"></i></a>
            <a className="button2" href="https://masalo13.github.io/Weather-Dash/" role="button"
            ><iconify-icon inline icon="simple-icons:heroku" class="icon"></iconify-icon></a> */}
          </Card.Body>
        </Card>
      </Col>
      <Col className="projects">
      <Card className="project-card">
          <Card.Img className="project-img" variant="top" src="https://www.rc.virginia.edu/images/accord/project.png" />
          <Card.Body>
            <Card.Title>SLO 3</Card.Title>
            <Card.Text>
            SLO 43 Information
            </Card.Text>
            {/* <a className="button" href="https://github.com/oconnorjohnson/cream-finder" role="button"
            ><i className="fab fa-github"></i></a>
            <a className="button2" href="https://enthousiaste-monsieur-80020.herokuapp.com/" role="button"
            ><iconify-icon inline icon="simple-icons:heroku" class="icon"></iconify-icon></a> */}
          </Card.Body>
        </Card>
      </Col>
      <Col className="projects">
        <Card className="project-card">
          <Card.Img className="project-img" variant="top" src="https://www.rc.virginia.edu/images/accord/project.png" />
          <Card.Body>
            <Card.Title>SLO 4</Card.Title>
            <Card.Text>
            SLO 4 information
            </Card.Text>
            {/* <a className="button" href="https://github.com/puppetup/plenty-of-hanks" role="button"
            ><i className="fab fa-github"></i></a>
            <a className="button2" href="https://afternoon-cliffs-40393.herokuapp.com/" role="button"
            ><iconify-icon inline icon="simple-icons:heroku" class="icon"></iconify-icon></a> */}
          </Card.Body>
        </Card>
      </Col>
    
     </Row>

  

    </Container>
  );
}