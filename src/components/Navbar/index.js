import './index.css'
import {NavLink} from "react-router-dom";
import React from "react";

const Navbar = () => (
    <nav className={'nav'}>
        <NavLink className={'title'} to={'/'}>
            Tim Bracht
        </NavLink>
        <ul>
            <li>
                <NavLink className={'links'} to={'/about'}>About</NavLink>
            </li>
            <li>
                <NavLink className={'links'} to={'/skills'}>Skills</NavLink>
            </li>
            <li>
                <NavLink className={'links'} to={'/contact'}>Contact</NavLink>
            </li>
        </ul>
    </nav>
)
export default Navbar