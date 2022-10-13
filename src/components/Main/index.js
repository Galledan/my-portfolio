import React, { useState, useEffect } from "react";
import "./main.css";
import AboutMe from "../AboutMe";
import videoBg from "../../assets/videoBg.mp4";
import Projects from "../Projects";
import Skills from "../Skills";
import Interests from "../Interests";
import Contact from "../Contact";

function Main() {
  const [isLoading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4001);
  }, []);

  return (
    <div className="main">
      <video src={videoBg} autoPlay loop muted />

      {/* Content */}

      <div className="content">
        {isLoading && (
          <div className="loading">
            <h1>Welcome to my web page</h1>
          </div>
        )}

        {/* Main Page */}

        {!isLoading && page === 0 && (
          <div className="main-container">
            {/* Boxes */}

            <div className="boxes">
              <div onClick={() => setPage(1)} className="box">
                <div className="top-box">
                  <i class="fas fa-user"></i>
                </div>
                <div className="under-box">About Me</div>
              </div>
              <div onClick={() => setPage(2)} className="box">
                <div className="top-box">
                  <i class="fas fa-laptop-code"></i>
                </div>
                <div className="under-box">Projects</div>
              </div>
              <div onClick={() => setPage(3)} className="box">
                <div className="top-box">
                  <i class="fas fa-code"></i>
                </div>
                <div className="under-box">Skills</div>
              </div>
              <div onClick={() => setPage(4)} className="box">
                <div className="top-box">
                  <i class="fas fa-laugh"></i>
                </div>
                <div className="under-box">Interests</div>
              </div>
              <div onClick={() => setPage(5)} className="box">
                <div className="top-box">
                  <i class="fas fa-envelope"></i>
                </div>
                <div className="under-box">Contact</div>
              </div>
            </div>
          </div>
        )}

        {/* Pages*/}

        {page !== 0 && (
          <div className="page-container">
              {page === 1 && <AboutMe />}
              {page === 2 && <Projects />}
              {page === 3 && <Skills />}
              {page === 4 && <Interests />}
              {page === 5 && <Contact />}
              <button onClick={() => setPage(0)} className="back-btn">
              Back
            </button>
           
          </div>
        )}
      </div>
    </div>
  );
}

export default Main;
