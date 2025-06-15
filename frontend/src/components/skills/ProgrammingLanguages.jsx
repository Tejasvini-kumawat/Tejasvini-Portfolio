import React from 'react';
import { SiCplusplus, SiC, SiJavascript, SiPython } from 'react-icons/si';

const ProgrammingLanguages = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Programming Languages</h3>
      <div className="skills__box">
        <div className="skills__group">

          <div className="skills__data">
            <SiCplusplus className="skills__icon" color="#00599C" />
            <div>
              <h3 className="skills__name">C++</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <SiC className="skills__icon" color="#A8B9CC" />
            <div>
              <h3 className="skills__name">C</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <SiJavascript className="skills__icon" color="#F0DB4F" />
            <div>
              <h3 className="skills__name">JavaScript</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <SiPython className="skills__icon" color="#306998" />
            <div>
              <h3 className="skills__name">Python</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProgrammingLanguages;
