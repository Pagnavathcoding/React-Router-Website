import React, { useState } from 'react';
import './home.css';
import image1 from './Images/activity.svg';
import image2 from './Images/book-opened.svg';
import image3 from './Images/coffee.svg';
function Home() {
    const [data] = useState([
        {
            id: 1,
            image: image1,
            title: "Content One",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            id: 2,
            image: image2,
            title: "Content Two",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            id: 3,
            image: image3,
            title: "Content Three",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }
    ])
    return (
        <main>
            <section className="container">
                <h1>👋 Welcome!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="https://www.google.com"><button>Learn More</button></a>
            </section>
            <section className="content">
                <div className="title">
                    <h1>Contents</h1>
                </div>
                <div className="items">
                    {
                        data.map((data) => {
                            return (
                                <div className="item">
                                    <div className="image">
                                        <img src={data.image} />
                                    </div>
                                    <h1>{data.title}</h1>
                                    <p>{data.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </main>
    )
}
export default Home;