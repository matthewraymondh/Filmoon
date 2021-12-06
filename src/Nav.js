import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo"
            src="https://i.imgur.com/t5Z2DFA.png"
            alt="Filmoon Logo"
            />
            <img className="nav__avatar"
            src="https://i.imgur.com/N4eR1dN.png"
            alt="Filmoon Logo"
            />
        </div>
    )
}

export default Nav
