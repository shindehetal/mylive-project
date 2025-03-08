import { HashRouter, Routes, Route, Link } from "react-router-dom";
import FinalPreview from "./preview";
import Basic from "./basic";
import Contact from "./contact";
import Education from "./eduction";
import Experience from "./experience"
import Project from "./project";
import Skill from "./skill";


function App() {
  return (
    // <>
    //   <Basic/>
    //   <Contact/>
    //   <Education/>
    //   <Experience/>
    //   <Project/>
    //   <Skill/>
    //   <FinalPreview/>
    // </>
    <HashRouter>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
        <div className="container">
          <Link className="navbar-brand"><i className="fa fa-users"></i> Profile Management</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-3">
                <Link className="nav-link active" to="/"> <i className="fa fa-home"></i> My Home</Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link" to="/basic"> <i className="fa fa-user"></i> Basic</Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link" to="/contact"> <i className="fa fa-headset"></i> Contact</Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link" to="/education"> <i className="fa fa-book"></i> Education</Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link" to="/skill"> <i className="fa fa-desktop"></i> Skills</Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link" to="/project"> <i className="fa fa-suitcase"></i> Project</Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link" to="/experience"> <i className="fa fa-file"></i> Experience</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route exact path="/basic" element={<Basic />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/education" element={<Education />} />
        <Route exact path="/experience" element={<Experience />} />
        <Route exact path="/project" element={<Project />} />
        <Route exact path="/skill" element={<Skill />} />
        <Route exact path="/" element={<FinalPreview />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
