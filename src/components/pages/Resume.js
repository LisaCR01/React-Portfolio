import React from 'react';
import Pdf from "./Assets/LisaCRGunn.pdf";

export default function Resume() {
    return (
    <div className="container">
        <div className=" fs-4 text-center mt-4 pt-4 fw-bold">Resume</div>
        <div className="row justify-content-center">
        <div className="col-md-4">
        <div className="card my-5">
            <div className="card-body">
              <h5 className="card-title fs-4 text-center">Front-end Proficiencies</h5>
              <ul className="card-text fs-5 list-group list-group-flush">
                <li className="list-group-item">HTML</li>
                <li className="list-group-item">CSS</li>
                <li className="list-group-item">JavaScript</li>
                <li className="list-group-item">jQuery</li>
                <li className="list-group-item">Responsive Design</li>
                <li className="list-group-item">React</li>
                <li className="list-group-item">Bootstrap</li>
                <li className="list-group-item">Tailwind</li>
                <li className="list-group-item" >Bulma</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card my-5">
            <div className="card-body">
              <h5 className="card-title fs-4 text-center">Back-end Proficiencies</h5>
              <ul className="card-text fs-5 list-group list-group-flush">
                <li className="list-group-item">API</li>
                <li className="list-group-item">Node</li>
                <li className="list-group-item">Express</li>
                <li className="list-group-item">MySQL, Sequelize</li>
                <li className="list-group-item">Mongoose</li>
                <li className="list-group-item">Webpack</li>
              </ul>
            </div>
          </div>
          <div>
            <a className='btn btn-secondary px-5 mb-4 fs-4' href={Pdf} target = "_blank" >Downloadable Resume</a>
          </div>
        </div>
</div>
</div>
    );
  }