import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import './App.css';


export default function About() {
  return ( <>
   
    <Container>
      <Row>
        <Col>
          <Image
            src={require("../img/me2.jpg")}
            roundedCircle
            width="350vw"
            height="300vw"/>
        </Col>
        <Col>
            <h1 className="display-4 text-center text-lg-left text-light p-0-lg pt-4">
              Hello!</h1>
            <p className="text-light text-center text-md-left h3">
            I'm Edwin Santiago, a senior at STEM Academy of Hollywood.
            </p>
        </Col>
      </Row>
    </Container>
    
    
    <Container fluid className="shadow mb-5">
    <Container className="p-5 about">
      <h3>About Me</h3>
      <p>
      Academic pre-raphaelites conceptual art neo-geo deformalism academic, video game art street art gothic art color field painting cobra, manierism new objectivity minimalism jugendstil.
      </p>
      <p>
      Neo-geo manierism hudson river school idealism scuola romana incoherents neo-minimalism neoclassicism pointilism, art deco postmodern art young british artists dadaism der blaue reiter baroque de stijl.
      </p>
      <p>
      Carolingian lettrism geometric abstraction action painting new objectivity, superflat pre-raphaelites performance art ottonian young british artists, neoism romanesque abstract expressionism.
      </p>
    </Container>
    </Container>
    </>
  );
}





