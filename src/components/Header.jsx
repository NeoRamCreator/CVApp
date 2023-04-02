import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Projects } from "./Projects";
import MyApp from "../MyApp";

export const Header = () => {
    console.log("Header")

    const [contact, setContact] = useState(false)

    return (
        <>
            <div className="header">
                <div className="header_lincs">
                    <Link to="/" className="a">About me</Link>
                    <Link to="/projects" className="a">My projects</Link>
                </div>

                {contact ? (
                    <div className="header_contact"
                    >
                        <p>8-920-133-51-08</p>
                        <p>gawriil.mu@yandex.ru</p>
                    </div>
                ) : (
                    <div className="header_contact"
                        onClick={() => { setContact(true) }}

                    >
                        <p>КАК МЕНЯ НАЙТИ</p>
                    </div>
                )
                }

            </div>
        </>
    )
}