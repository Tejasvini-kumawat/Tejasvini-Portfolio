import React from 'react';
import { FaAws } from 'react-icons/fa';

import {
  SiExpress,
  SiNodedotjs,
  SiPython,
  SiMysql,
  SiAmazonaws,
  SiMongodb
} from 'react-icons/si';

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>
      <div className="skills__box">
        <div className="skills__group">

          <div className="skills__data">
            <SiExpress className="skills__icon" color="#000000" />
            <div>
              <h3 className="skills__name">Express.js</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <SiNodedotjs className="skills__icon" color="#68a063" />
            <div>
              <h3 className="skills__name">Node.js</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <SiPython className="skills__icon" color="#3776ab" />
            <div>
              <h3 className="skills__name">Python</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <SiMysql className="skills__icon" color="#00758f" />
            <div>
              <h3 className="skills__name">MySQL</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
       <FaAws className="skills__icon" color="#FF9900" />
            <div>
              <h3 className="skills__name">AWS</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <SiMongodb className="skills__icon" color="#47a248" />
            <div>
              <h3 className="skills__name">MongoDB</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Backend;
