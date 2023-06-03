import { createContext, useState } from 'react';
import './App.css';
import { Col, Row, Navbar, Container, Nav } from 'react-bootstrap';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail.js';
import axios from 'axios';
import Cart from './routes/Cart.js';


// Context API 만드는 3 step
// 1. createContext()
// 2. <Context>로 원하는 컴포넌트 감싸기
// 3. value={{state1, state2 ...}}

export let Context1 = createContext() // Context API, step 1

function App() {

  let [shoes, setShoes] = useState(data);
  let [재고] = useState([10, 11, 12])

  let navigate = useNavigate();

  return (
    <div className="App"> 

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Shop&Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}} href="#home">Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }} href="0#">Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    <Routes>
      <Route path='/' element={
        <>
        <div className='main-bg'></div>
        <Container>
          <Row>
          {
            shoes.map((a, i)=>{
              return (
                <Card shoes={shoes[i]} i={i} key={i}></Card>
              )}
          )}
          
        </Row>
      </Container>

        <button onClick={()=>{
          axios.get('https://codingapple1.github.io/shop/data2.json')
          .then((결과)=>{ 
            let copy = [...shoes, ...결과.data];
            setShoes(copy);
          })

        }}>더보기</button>
      </>
      }/>
        <Route path="/detail/:id" element={
        // 2. <Context>로 원하는 컴포넌트 감싸기
        // 3. value={{state1, state2 ...}}
         <Detail shoes={shoes}/>
        }/>

        <Route path='/cart' element={ <Cart/> }></Route>

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

function Card(props) {
  let navigate = useNavigate();
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


