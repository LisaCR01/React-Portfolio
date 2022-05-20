import React from 'react';
import Pdf from "./Assets/LisaCRGunn.pdf";

export default function Resume() {
    return (
        <div className="container">
        <div className="row justify-content-center">
        <div className="col-md-4">
        <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title fs-4">Front-end Proficiencies</h5>
              <ul className="card-text fs-6">
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
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <a className='btn btn-secondary my-3 fs-4' href={Pdf} target = "_blank" >Downloadable Resume</a>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title fs-4">Back-end Proficiencies</h5>
              <ul className="card-text fs-6">
                <li>API</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>Mongoose</li>
                <li>Webpack</li>
              </ul>
            </div>
          </div>
        </div>
       </div>
    </div>
    );
  }