import React from 'react';
import './codingprofiles.css';

const CodingProfiles = () => {
  return (
    <section className="coding section" id="coding">
      <h2 className="section__title">Coding Profiles</h2>
      <span className="section__subtitle">Where I Practice Problem Solving</span>

      <div className="coding__container container grid">

        <div className="coding__box">
          <i className="bx bx-code-alt coding__icon"></i>
          <h3 className="coding__title">
            <a href="https://www.codechef.com/users/tejasvinikumaw" target="_blank" rel="noopener noreferrer">
              CodeChef
            </a>
          </h3>
          <span className="coding__subtitle">1⭐ | 125+ Problems Solved</span>
        </div>

        <div className="coding__box">
          <i className="bx bx-code-block coding__icon"></i>
          <h3 className="coding__title">
            <a href="https://leetcode.com/u/Tejasvini_Kumawat/" target="_blank" rel="noopener noreferrer">
              LeetCode
            </a>
          </h3>
          <span className="coding__subtitle">350+ Questions | Rating: 1300+ |5+ Badges</span>
        </div>

        <div className="coding__box">
           <i className="bx bx-code-block coding__icon"></i>
          <h3 className="coding__title">
            <a href="https://www.hackerrank.com/profile/tejasvini_kumaw1" target="_blank" rel="noopener noreferrer">
              HackerRank
            </a>
          </h3>
          <span className="coding__subtitle">4⭐ in C++</span>
        </div>

        <div className="coding__box">
          <i className="bx bx-terminal coding__icon"></i>
          <h3 className="coding__title">
            <a href="https://www.naukri.com/code360/profile/Tejasvini_05" target="_blank" rel="noopener noreferrer">
              Coding Ninjas
            </a>
          </h3>
          <span className="coding__subtitle"> 550+ Problems</span>
        </div>

      </div>
    </section>
  );
};

export default CodingProfiles;
