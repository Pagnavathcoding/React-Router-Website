import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import '../index.css'
import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';
function Header() {
    const [toggle, setToggle] = useState(false);
    function toggleBar() {
        setToggle(!toggle);
    }
    return (
        <Router>
            <header>
                <h1><Link to="/" className="link" id="logo">LOGO</Link></h1>
                <ul className={toggle ? "menu toggle" : "menu"}>
                    <li><Link to="/home" className="link" onClick={toggleBar}>Home</Link></li>
                    <li><Link to="/about" className="link" onClick={toggleBar}>About</Link></li>
                    <li><Link to="/gallery" className="link" onClick={toggleBar}>Gallery</Link></li>
                    <li><Link to="/contact" className="link" onClick={toggleBar}>Contact</Link></li>
                    <div className="closes" onClick={() => { setToggle(!toggle) }}>
                        <div className="close"></div>
                        <div className="close"></div>
                        <div className="close"></div>
                    </div>
                </ul>
                <div className="bar" onClick={toggleBar}>
                    <div className="lines">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </div>
            </header>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/gallery">
                    <Gallery />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}
export default Header;