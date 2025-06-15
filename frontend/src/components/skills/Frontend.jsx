import React from 'react';
import { SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiGit, SiReact } from 'react-icons/si';

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Developer</h3>
      <div className="skills__box">
        <div className="skills__group">

          <div className="skills__data">
            <SiHtml5 className="skills__icon" color="#e34c26" />
            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <SiCss3 className="skills__icon" color="#264de4" />
            <div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <SiJavascript className="skills__icon" color="#f0db4f" />
            <div>
              <h3 className="skills__name">JavaScript</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <SiTailwindcss className="skills__icon" color="#38bdf8" />
            <div>
              <h3 className="skills__name">Tailwind CSS</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <SiGit className="skills__icon" color="#f1502f" />
            <div>
              <h3 className="skills__name">Git</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <SiReact className="skills__icon" color="#61dafb" />
            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Frontend;
