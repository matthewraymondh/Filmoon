import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false);
    const history = useHistory();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
                handleShow(true);
        } else {
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img onClick={() => history.push("/")} className="nav__logo"
            src="https://i.imgur.com/t5Z2DFA.png"
            alt="Filmoon Logo"
            />
            <img onClick={() => history.push("/profile")} className="nav__avatar"
            src="https://i.imgur.com/N4eR1dN.png"
            alt="Filmoon Logo"
            />
        </div>
    );
}

export default Nav
