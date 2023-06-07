import React, { useState } from 'react';
import logo from '../../images/Company-Logo_Top.png';
import { NavLink } from 'react-router-dom';
import Collapse from 'react-bootstrap/Collapse';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./header.css";

const Header = () => {

    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <header>
            <div className="container gap-2">

                <div className="logo">
                    <NavLink to='/'>
                        <img src={logo} alt="Artistic Communication" />
                    </NavLink>
                </div>
                <ul className='nav sm-w-100 justify-content-end justify-content-lg-between'>
                    <li className='hideNav'><NavLink to='/'>Home</NavLink></li>
                    <li className='hideNav'><NavLink to='/about'>About Us</NavLink></li>
                    <li className='hideNav'><NavLink to='/services'>Services</NavLink></li>
                    <li className='hideNav'><NavLink to='/portfolio'>Portfolio</NavLink></li>
                    <li className='hideNav'><NavLink to='/client'>Our Clients</NavLink></li>
                    <li className='hideNav'><NavLink to='/team'>artcom Team</NavLink></li>
                    <li className='hideNav'><NavLink to='/gallery'>Gallery</NavLink></li>
                    <li className='hideNav'><NavLink to='/getinvolved'>Get Involved</NavLink></li>
                    <li onClick={() => setOpen(!open)}><i class="bi bi-search"></i></li>
                    <li><NavLink to='/contact'><button className='shadow-sm btn-red'>Contact</button></NavLink></li>
                    <li className='hideNavMobile'><button onClick={handleShow} className='shadow-sm btn-red'><i class="bi bi-justify"></i></button></li>
                </ul>

            </div>
            <div className="container-sm">
                <div className="search-bar">
                    <Collapse in={open}>
                        <div>
                            <input type='text' />
                        </div>
                    </Collapse>
                </div>
            </div>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Artistic Communicationnpm</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className='mobile-nav'>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/about'>About Us</NavLink></li>
                        <li><NavLink to='/services'>Services</NavLink></li>
                        <li><NavLink to='/portfolio'>Portfolio</NavLink></li>
                        <li><NavLink to='/client'>Our Clients</NavLink></li>
                        <li><NavLink to='/team'>artcom Team</NavLink></li>
                        <li><NavLink to='/gallery'>Gallery</NavLink></li>
                        <li><NavLink to='/getinvolved'>Get Involved</NavLink></li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </header>
    );
};

export default Header;