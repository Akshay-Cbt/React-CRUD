import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/");
                setProducts(response.data);
            } catch (error) {
                console.error("There was an error fetching the data", error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">Shoe Store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/add">Add</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
            <Container className="mt-4">
                <Row className="justify-content-center">
                    {products.map((product) => (
                        <Col key={product.id} sm={12} md={6} lg={4} className="d-flex justify-content-center">
                            <Card style={{ width: '18rem', textAlign: 'center', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
                                <Card.Img 
                                    variant="top" 
                                    src={`http://127.0.0.1:8000/${product.image}`} 
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{product.brand}</Card.Subtitle>
                                    <Card.Text>{product.description || "No description available."}</Card.Text>
                                    <Link to={`/viewmore/${product.id}`}>
                                        <Button variant="primary">View More</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default Home;
