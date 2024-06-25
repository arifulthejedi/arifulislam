import { useState } from "react";
import Knight from "../assets/knight.svg";
import Feather from "../assets/feather.svg";
import "../assets/styles/header.css";


export default function Header( props ){



    return <>
    <header>
        <div className="logo">
            <a href="#">
            <div>
                <span>Ariful</span>
                <span className="header-knight"><img src={Knight} /></span>
                <span>Islam</span>
            </div>
            </a>
        </div>
        <div className="navBar">
            <ul className="nav-list">
                <li><a href="#">HOME</a></li>
                <li><a href="#">SKILLS</a></li>
                <li><a href="#">TESTIMONIALS</a></li>
            </ul>
        </div>
        <button className="contact-button">
                <img src={Feather} />
                Make Contact
        </button>
    </header>
    </>
}