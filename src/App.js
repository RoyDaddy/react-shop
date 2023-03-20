import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link, Route, Routes, useNavigate, Outlet} from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import About from "./pages/about/About";
import Event from "./pages/event/About";
import {createContext, useEffect, useState} from "react";
import data from "./data";
import Cart from "./pages/Cart";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";

function App() {
    useEffect(() => {
        localStorage.setItem('watched', JSON.stringify([]));
    }, []);
    let navigate = useNavigate();
    let [shoesList, setShoesList] = useState(data);
    let [quantity, setQuantity] = useState([10, 11, 12]);

    return (
        <div className="App">
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand onClick={() => navigate('/')}>Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
                        <Nav.Link onClick={() => navigate('/cart')}>Cart</Nav.Link>
                        <Nav.Link onClick={() => navigate('/about')}>About</Nav.Link>
                        <Nav.Link onClick={() => navigate('/event')}>Event</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        반가워요
                    </Nav>
                </Container>
            </Navbar>

            <Routes>
                <Route path="/" element={<Main shoesList={shoesList} setShoesList={setShoesList}/>} />
                <Route path="/detail/:id" element={<Detail shoesList={shoesList}/>} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/about" element={<About/>} >
                    <Route path="member" element={<>멤버임</>}/>
                    <Route path="location" element={<>지도임</>}/>
                </Route>
                <Route path="/event" element={<Event/>} >
                    <Route path="one" element={<>첫주문시 양배추됨</>}/>
                    <Route path="two" element={<>생쿠받아라</>}/>
                </Route>

                <Route path="*" element={<>없어요</>} />
            </Routes>
        </div>
    );
}

export default App;
