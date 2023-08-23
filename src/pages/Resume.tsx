import { Component } from "react";
import Navbar from "../components/Navbar";

class Resume extends Component {
    render()  {
      return (
        <>
          <Navbar />
          <div id="cv"><h1>Curriculum Vitae</h1></div>
          <div id="education">
            <h2>Education</h2>
            <div id="berkeley" className="school">
                    <span className="organization">University of California, Berkeley</span>
                    <span className="location">Berkeley, CA, United States</span>
                    <span className="title">Exchange Student</span>
                    <span className="duration">Aug 2023 - May 2024</span>
                    <p className="info"><b>Courses: </b>Currently unknown (Space Available Basis), but planning to focus on AI, Data Science and Economic Optimization.</p>
            </div>
            <div id="ntnu" className="school">
                    <span className="organization">Norwegian University of Science and Technology</span>
                    <span className="location">Trondheim, Norway</span>
                    <span className="title">M.Sc. Industrial Economics and Technology Management</span>
                    <span className="duration">Aug 2021 - June 2026</span>
                    <p className="info"><b>Field of study: </b>Computer Science with a specialization in Artifical Intelligence.</p>
                    <p className="info">Average grade: B</p>
            </div>
            <div id="thvgs" className="school">
                <span className="organization">Thor Heyerdahl VGS</span>
                <span className="location">Larvik, Norway</span>
                <span className="title">Upper Secondary School</span>
                <span className="duration">Aug 2018 - June 2021</span>
                <p className="info"><b>Field of study: </b>Mathematics, Physics, Biology, and Chemistry.</p>
                <p className="info">Average grade: 5.9/6.0</p>
            </div>
          </div>
          <footer>
              <a href="https://www.linkedin.com/in/didriknaess/"><img src="../resources/linkedin.png" height="32px"/></a>
              <a href="https://github.com/didriknaess"><img src="../resources/github.png" height="32px"/></a>
              <a href="mailto:didriknaess@hotmail.com"><img src="../resources/mail.png" height="32px"/></a>
          </footer>
        </>
      );
    }
  };
  
  export default Resume;