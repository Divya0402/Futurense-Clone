import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";

const yellow = { backgroundColor: "#FDBA2F", color: "#000000" };
const transparent = { backgroundColor: "transparent", color: "#ffffff", borderColor: "#ffffff", borderRadius: "7px" };

export default function Navbar({reference}) {

  const handleToggler = ()=>{
    if (toggler === false) {
      setToggler(true);
    } else {
      setToggler(false);
    }
  }

  const handleTogglerContent = ()=>{
    setToggler(false);
  }

  const handleTogglerAboutContent = ()=>{
    setToggler(false);
    reference.current.scrollIntoView({behavior:"smooth"});
    
  }

  const [color, setColor] = useState(yellow);
  const [colour, setColour] = useState(transparent);
  const [toggler, setToggler] =useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#05010E" }}>
      <div className="container-fluid">
        <Link className="navbar-brand mx-3" to="/" onClick={handleTogglerContent}>
          <img src="logo.jpg" alt="logo" style={{ height: "40px", width: "40px" }} />
        </Link>
        <button onClick={handleToggler} style={{marginRight:"20px"}} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="#navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="#navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" >
              <Link className="nav-link active" aria-current="page" to="/" style={{ color: "#ffffff" }}>Home</Link>
            </li>
            <li className="nav-item" onClick={handleTogglerAboutContent}>
              <Link className="nav-link" to="#" style={{ color: "#ffffff" }}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/blogs" style={{ color: "#ffffff" }}>Blogs</Link>
            </li>
          </ul>
          <div>
            <button className="btn me-2" type="button" onMouseEnter={() => setColor(transparent)} onMouseLeave={() => setColor(yellow)} style={color}>Upskill Now</button>
          </div>
          <div>
            <button className="btn me-2" type="button" onMouseEnter={() => setColour(yellow)} onMouseLeave={() => setColour(transparent)} style={colour}>Hire Now</button>
          </div>
        </div>
      </div>
      <div>
        {
          toggler?<div style={{width:"100vw"}}>
            <ul className="navbar-nav" style={{padding:"0 20px"}}>
              <li className="nav-item" onClick={handleTogglerContent}>
                <Link className="nav-link active" aria-current="page" to="/" style={{ color: "#ffffff" }}>Home</Link>
              </li>
              <li className="nav-item" onClick={handleTogglerAboutContent}>
                <Link className="nav-link" to="#" style={{ color: "#ffffff" }}>About</Link>
              </li>
              <li className="nav-item" onClick={handleTogglerContent}>
                <Link className="nav-link active" aria-current="page" to="/blogs" style={{ color: "#ffffff" }}>Blogs</Link>
              </li>
            </ul>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", textAlign:"center",padding:"0 20px"}}>
              <button className="btn togglerInsideBtn" type="button" onClick={handleTogglerContent} onMouseEnter={() => setColor(transparent)} onMouseLeave={() => setColor(yellow)} style={color}>Upskill Now</button>
              <button className="btn togglerInsideBtn" type="button" onClick={handleTogglerContent} onMouseEnter={() => setColour(yellow)} onMouseLeave={() => setColour(transparent)} style={colour}>Hire Now</button>
            </div>
          </div>:null
        }
      </div>
        
    </nav>
  );
}
