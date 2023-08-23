import { Component } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div id="navbar">
                <Link to="/"><p id="signature">Didrik Næss</p></Link>
                <ol>
                    <Link to="/contact" className="nav-element">Contact</Link>
                    <Link to="/resume" className="nav-element">Resumé</Link>
                    <Link to="/about" className="nav-element">About</Link>
                </ol>
            </div>
        );
    }
}

export default Navbar;