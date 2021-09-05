import React, { useState } from 'react';
import './about.css';
function About() {
    const title = "About";
    const [toggle, setToggle] = useState(false);
    return (
        <section className="about">
            <div className="about-us">
                <h1>{title}</h1>
            </div>
            <div className="about-items">
                <div className="about-item">
                    <div className="about-image1"></div>
                    <div className="about-content">
                        <h1>About One</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <div className="about-item">
                    <div className="about-image2"></div>
                    <div className="about-content">
                        <h1>About Two</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <button onClick={() => { setToggle(!toggle) }} style={{ display: toggle ? "none" : "block" }}>Show More</button>
                <div className="about-item" style={{ display: toggle ? "flex" : "none" }}>
                    <div className="about-image3"></div>
                    <div className="about-content">
                        <h1>About Three</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;