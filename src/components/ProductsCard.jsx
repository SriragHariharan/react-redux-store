import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProductsCard() {
    const products = useSelector(state => state?.products)
  return (
    <Container>
    <Row className="d-flex justify-content-center align-items-center"> 
        {
          products.map(product => (
                <Col xs={6} sm={6} md={3} lg={3} xl={3}>
                    <Card style={{ boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' ,marginTop:'20px', height:'350px'}} key={product.id}>
                    <Link to={`/product/${product.id}`}>
                        <h1  className='text-center'>
                        <Card.Img style={{marginTop:'15px',width:'7rem', height:'9rem'}} variant="top" src={product.image} />
                        </h1>
                    </Link>
                        <Card.Body>
                            <p style={{textDecoration:'none', fontSize:'15px'}}>{product.title.slice(0,30)}.....</p>
                            <p style={{color:'grey', fontSize:'13px'}}>{product.category}</p>
                        </Card.Body>
                        <p className="text-secondary text-center">$ {product.price}</p>
                    </Card>
             </Col>
                    ))
        }
    </Row>
    </Container>
    );
}

export default ProductsCard;
