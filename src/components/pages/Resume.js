import React from 'react';
import Pdf from "./Assets/LisaCRGunn.pdf";

export default function Resume() {
    return (
      <div>
          <div>
          <header>Resume</header>
          Download my
            <a className='text-Secondary' href={Pdf} target = "_blank" > Resume</a>
          </div>
          <header>Front-end Proficiencies</header>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Responsive Design</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Tailwind</li>
            <li>Bulma</li>
          </ul>
          <header>Back-end Proficiencies</header>
          <ul>
            <li>API</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>Mongoose</li>
            <li>Webpack</li>
          </ul>

      </div>
    );
  }