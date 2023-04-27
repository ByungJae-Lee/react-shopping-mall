import { useState } from 'react';
import './App.css';
import { Col, Row, Navbar, Container, Nav } from 'react-bootstrap';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail.js';

function App() {

  let [shoes] = useState(data)
  let navigate = useNavigate();

  return (
    <div className="App"> 

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Shop&Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}} href="#home">Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }} href="#features">Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    <Routes>
      <Route path='/' element={
        <>
        <div className='main-bg'></div>
        <Container>
          <Row>
          {/* <Card shoes ={shoes[0]} i={1}></Card>
          <Card shoes ={shoes[1]} i={2}></Card>
          <Card shoes ={shoes[2]} i={3}></Card> */}
          {
            shoes.map((a, i)=>{
              return (
                <Card shoes={shoes[i]} i={i}></Card>
              )
            }
          )}
          {/* <Col sm>
            <img src='https://codingapple1.github.io/shop/shoes2.jpg' width='80%'/>
            <h4>{shoes[1].title}</h4>
            <p>{shoes[1].price}</p>
          </Col>
          <Col sm>
            <img src='https://codingapple1.github.io/shop/shoes3.jpg' width='80%'/>
            <h4>{shoes[2].title}</h4>
            <p>{shoes[2].price}</p>
          </Col> */}
        </Row>
      </Container>
      </>
      }/>
      <Route path="/detail/:id" element={<Detail shoes={shoes}/>}/>
      
      
    </Routes>
    </div>
  );
}

function About(){
  return(
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Card (props) {
  return (
    <Col sm>
      <img src={'https://codingapple1.github.io/shop/shoes'+ (props.i+1) +'.jpg'}
      width="80%"/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </Col>
  )
}

export default App;