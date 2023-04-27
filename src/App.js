import { useState } from 'react';
import './App.css';
import { Col, Row, Navbar, Container, Nav } from 'react-bootstrap';
import data from './data.js';
import { Routes, Route, Link } from 'react-router-dom';

function App() {

  let [shoes] = useState(data)
  
  return (
    
    
    
    <div className="App"> 

   
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Shop&Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    <Link to="/">홈</Link>
    <Link to="/detail">상세페이지</Link>


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
    } />
      <Route path='/detail' element={<div>상세페이지 입니다</div>} />
    </Routes>



{/* 대문사진 넣기 */}
    

    </div>
  );
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