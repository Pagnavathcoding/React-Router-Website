import React from 'react';
import './contact.css';
function Contact() {
    return (
        <section className="contact">
            <div className="contact-title">
                <h1>Contact</h1>
            </div>
            <div className="contact-infos">
                <div className="contact-1">
                    <div className="contact-image-1"></div>
                    <div className="contact-data">
                        <h1>Username</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button>Contact Her</button>
                    </div>
                </div>
                <div className="contact-2">
                    <div className="contact-image-2"></div>
                    <div className="contact-data">
                        <h1>Username</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button>Contact Him</button>
                    </div>
                </div>
                <div className="contact-3">
                    <div className="contact-image-3"></div>
                    <div className="contact-data">
                        <h1>Username</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button>Contact Her</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact;