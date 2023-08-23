import { Component } from 'react';
import Mail from '../assets/mail.png';
import GitHub from '../assets/github.png';
import LinkedIn from '../assets/linkedin.png';
import './footer.css';

class Footer extends Component {
    render() {
        return (
            <div id='footer'>
                <p>© Didrik Næss 2023</p>
                <a href="https://www.linkedin.com/in/didriknaess/"><img src={LinkedIn} height="32px"/></a>
                <a href="https://github.com/didriknaess"><img src={GitHub} height="32px"/></a>
                <a href="mailto:didriknaess@hotmail.com"><img src={Mail} height="32px"/></a>
            </div>
        );
    }
}

export default Footer;