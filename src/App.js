import React from 'react';
// Importation des composants spécifiques depuis react-bootstrap
import { Navbar, Container, Nav, Card, Row, Col, Form, NavDropdown, Button } from 'react-bootstrap';

function App() {
  return (
    <>
      {/* Structure de base de l'application */}
      <div className="App">
        {/* Barre de navigation */}
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            {/* Marque de la barre de navigation */}
            <Navbar.Brand href="#">JerseyStore</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              {/* Liens de navigation */}
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                {/* Liens et éléments de menu */}
                <Nav.Link href="#">Home</Nav.Link>
                {/* Menu déroulant dans la barre de navigation */}
                <NavDropdown title="Team" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Arsenal</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Manchester United
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Premier League
                  </NavDropdown.Item>
                </NavDropdown>
                {/* Lien désactivé */}
                <Nav.Link href="#" disabled>
                  Jersey
                </Nav.Link>
              </Nav>
              {/* Formulaire de recherche */}
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search a jersey..."
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Conteneur principal */}
        <Container className="mt-4">
          {/* Lignes et colonnes pour les cartes */}
          <Row>
            <Col>
              {/* Première carte */}
              <Card style={{ width: '18rem' }} className="mb-3">
                <Card.Img variant="top" src="./stash/manujersey.png" />
                <Card.Body>
                  <Card.Title>Manchester United Jersey</Card.Title>
                  <Card.Text>
                    {/* Contenu --  description */}
                    Ce maillot de football homme confectionné en tissu doux est destiné aux supporters inconditionnels de Manchester United. 
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              {/* Deuxième carte */}
              <Card style={{ width: '18rem' }} className="mb-3">
                <Card.Img variant="top" src="./stash/livjersey.jpg" />
                <Card.Body>
                  <Card.Title>Liverpool</Card.Title>
                  <Card.Text>
                    {/* Contenu -- description  */}
                    Technologie Nike Dri-FIT évacuant la transpiration, vous permettant ainsi de rester au sec et de bénéficier d'un maximum de confort.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              {/* Troisième carte */}
              <Card style={{ width: '18rem' }} className="mb-3">
                <Card.Img variant="top" src="./stash/arsenaljersey.jpg" />
                <Card.Body>
                  <Card.Title>Arsenal</Card.Title>
                  <Card.Text>
                    {/* Contenu -- description */}
                    Célèbre l'anniversaire des Gunners avec le maillot domicile Arsenal 23/24, équipé de la technologie AEROREADY et des détails dorés.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
