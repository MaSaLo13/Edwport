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
            src={require("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-lfaAbFff_eFynCqRTUMDU1Ok2BEkEMCjuabsGTKhP0A2Ukue9zy_Fco_xCGg2aCSy1w&usqp=CAU")}
            roundedCircle
            width="350vw"
            height="300vw"/>
        </Col>
        <Col>
            <h1 className="display-4 text-center text-lg-left text-dark p-0-lg pt-4">
              Hello!</h1>
            <p className="text-dark text-center text-md-left h3">
            I'm Edwin Santiago, a senior at STEM Academy of Hollywood.
            </p>
        </Col>
      </Row>
    </Container>
    
    
    <Container fluid className="shadow mb-5">
    <Container className="p-5 about text-dark">
      <h3 className="text-dark">About Me</h3>
      <p className="text-dark">
      Academic pre-raphaelites conceptual art neo-geo deformalism academic, video game art street art gothic art color field painting cobra, manierism new objectivity minimalism jugendstil.
      </p>
      <p className="text-dark">
      Neo-geo manierism hudson river school idealism scuola romana incoherents neo-minimalism neoclassicism pointilism, art deco postmodern art young british artists dadaism der blaue reiter baroque de stijl.
      </p>
      <p className="text-dark">
      Carolingian lettrism geometric abstraction action painting new objectivity, superflat pre-raphaelites performance art ottonian young british artists, neoism romanesque abstract expressionism.
      </p>
    </Container>
    </Container>
    </>
  );
}





