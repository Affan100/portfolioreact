import React from 'react';
import portfolioicon from '../portfolioicon.png';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar } from 'react-bootstrap';

const navbar = () => {
    return (
        <div>
            <Navbar bg="secondary" variant="dark" expand='sm' collapseOnSelect>
                <Navbar.Brand>
                    <img src={portfolioicon} className="nevbar-logo" alt="logo" />
                </Navbar.Brand>

                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav>
                        <Navbar.Collapse>
                            <Nav.Link href='#home'>Home</Nav.Link>
                            <Nav.Link href='#about'>About</Nav.Link>
                            <Nav.Link href='#education'>Education</Nav.Link>
                            <Nav.Link href='#skill'>Skill</Nav.Link>
                            <Nav.Link href='#contact'>Contact</Nav.Link>
                        </Navbar.Collapse>
                    </Nav>
                </Navbar.Collapse>



            </Navbar>
        </div>
    )
}
export default navbar;