import React, { useState, useEffect } from "react";
import Form1 from "../hcomponent/Form1";
import axios from "axios";

// Simple frontend cache for city images to reduce API calls
const cityImageCache = {};

function Dsection1({ city }) {
    const [bgImage, setBgImage] = useState('');

    useEffect(() => {
        function random() {
            return (Math.ceil(Math.random() * 6));
        }
        const defaultBg = `../../../images/background-${random()}.jpg`;

        if (city) {
            // Check cache first
            if (cityImageCache[city]) {
                setBgImage(cityImageCache[city]);
                return;
            }

            // Fetch main image from Wikipedia for the city
            const wikiApiUrl = `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles=${encodeURIComponent(city)}&origin=*`;

            axios.get(wikiApiUrl)
                .then(response => {
                    const pages = response.data.query.pages;
                    const pageId = Object.keys(pages)[0];
                    if (pageId !== "-1" && pages[pageId].original) {
                        const imgUrl = pages[pageId].original.source;
                        cityImageCache[city] = imgUrl; // Cache it
                        setBgImage(imgUrl);
                    } else {
                        setBgImage(defaultBg);
                    }
                })
                .catch(err => {
                    console.error("Wiki Image Error:", err);
                    setBgImage(defaultBg);
                });
        } else {
            setBgImage(defaultBg);
        }
    }, [city]);

    return (
        <section className="dsection1" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.503),rgba(0, 0, 0, 0.503)),url(${bgImage})` }}>
            <Form1 />
        </section>
    );
};
export default Dsection1;
