import ProfilePic from '../assets/profile_picture.png';
import './about.css';

function About() {
  return (
    <>
      <body>
      <div id="about" className="mt-1">
          <img id="profile_pic" src={ProfilePic} alt="error"
          className="h-10"
          />
          <h3>Didrik Næss</h3>
          <p>
            Student of M.Sc. Industrial Economics and 
            Technology Management at NTNU. Currently 
            exchanging to UC Berkeley. 
          </p>
      </div>
      </body>
    </>
  );
};

export default About;