import { Component } from "react";
import Navbar from "../components/Navbar";
import ProfilePic from '../assets/profile_picture.png';
import Mail from '../assets/mail.png';
import GitHub from '../assets/github.png';
import LinkedIn from '../assets/linkedin.png';
import './about.css';

class About extends Component {
  render()  {
    return (
      <>
        <Navbar />
        <body>
        <div id="about" className="mt-4">
            <img id="profile_pic" src={ProfilePic} alt="error"/>
            <h3>Didrik Næss</h3>
            <p>
              Student of M.Sc. Industrial Economics and 
              Technology Management at NTNU. Currently 
              exchanging to UC Berkeley. 
            </p>
        </div>
        </body>
        <footer>
            <a href="https://www.linkedin.com/in/didriknaess/"><img src={LinkedIn} height="32px"/></a>
            <a href="https://github.com/didriknaess"><img src={GitHub} height="32px"/></a>
            <a href="mailto:didriknaess@hotmail.com"><img src={Mail} height="32px"/></a>
        </footer>
      </>
    );
  }
};

export default About;