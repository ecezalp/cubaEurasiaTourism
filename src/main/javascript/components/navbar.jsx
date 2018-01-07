import React from 'react';
import {Link} from 'react-router-dom';

export default function NavBar() {
    return (<ul className="navbar">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/tr">turkce</Link></li>
        <li><Link to="/en">english</Link></li>
    </ul>)
}