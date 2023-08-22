import { Component } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div id="navbar" className="navbar sticky">
                <p id="signature">Didrik Næss</p>
                <ol>
                    <Link to="/contact">Contact</Link>
                    <Link to="/resume">Resumé</Link>
                    <Link to="/about">About</Link>
                </ol>
            </div>
        );
    }
}

export default Navbar;