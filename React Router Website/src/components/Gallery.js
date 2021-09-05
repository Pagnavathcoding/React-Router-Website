import React, { useEffect, useState } from 'react';
import './gallery.css';
function Gallary() {
    const [value, setValue] = useState('business');
    const [enter, setEnter] = useState('');
    const [image, setImage] = useState([]);
    useEffect(() => {
        async function gallery() {
            const res = await fetch(`https://api.pexels.com/v1/search/?page=1&per_page=80&query=${value}`, {
                headers: {
                    Authorization: "563492ad6f9170000100000130a88795a5a340878acced9968df5477"
                }
            });
            return res.json().then((data) => {
                setImage(data.photos)
            }).catch((err) => {
                console.log(err)
            })
        }
        gallery();
    }, [enter]);
    function handleSubmit(e) {
        e.preventDefault();
        if (value === '') {
            return;
        }
        setEnter(value);
    }
    return (
        <section className="gallery">
            <div className="gallery-title">
                <h1>Gallery</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search images..." value={value} onChange={e => {
                    setValue(e.target.value)
                }} />
                <button>Search</button>
            </form>
            <div className="gallery-container">
                {
                    image.map((data) => {
                        return <div className="gallery-infos" key={data.id}>
                            <img src={data.src.portrait} height="400px" />
                        </div>
                    })
                }
            </div>
            <div className="text">
                <h1>Our Gallery</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </section>
    )
}
export default Gallary;