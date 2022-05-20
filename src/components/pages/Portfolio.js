import React from 'react';
import health from "./Assets/City-Health.jpeg";
import daily from "./Assets/Daily-Planner.jpeg";
import jate from "./Assets/Jate.jpeg";
import mood from "./Assets/Mood-Tracker.jpeg";
import note from "./Assets/Note-Taker.jpeg";
import weather from "./Assets/Weather-Dashboard.jpeg";
import { BsGithub } from "react-icons/bs";

export default function Portfolio() {
    return (
        <div className="container">
        <div className="row align-items-center">
            <div className="text-center col ">
                <div className="card m-2">
                    <div className="card-body">
                      <h5 className="card-title">Text Editor</h5>
                      <div className="card-text">
                        <a className="link-light" href="https://github.com/LisaCR01/Text-Editor.git">
                          <BsGithub size={25}/>
                        </a>
                      </div>
                    </div>
                    <a href="https://fierce-dawn-38653.herokuapp.com/">
                        <img className="img-fluid" src={jate} alt="Image of a code editor."/>
                    </a>
                </div>
            </div>
            <div className="text-center col">
                <div className="card card m-2">
                    <div className="card-body">
                      <h5 className="card-title">Mood Tracker</h5>
                      <div className="card-text">
                          <a className="link-light" href="https://github.com/GrantRT/Mood-Tracker.git">
                          <BsGithub size={25}/>
                          </a>
                    </div>
                    </div>
                    <a href="https://mood-tracker-gkl.herokuapp.com/">
                        <img className="img-fluid" src={mood} alt="Image of application which has graph to track your mood over the week."/>
                    </a>
                </div>
            </div>
            <div className="text-center col">
                <div className="card m-2">
                    <div className="card-body">
                      <h5 className="card-title">Daily Planner</h5>
                      <div>
                        <a className="link-light" href="https://github.com/LisaCR01/Daily-Planner.git">
                        <BsGithub size={25}/>
                        </a>
                      </div>
                    </div>
                    <a href="https://lisacr01.github.io/Daily-Planner/">

                        <img className="img-fluid" src={daily} alt="Image of a daily planner application that is colour co-ordinated to whether times are in the: past, present or future."/>
                     </a>
                </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="text-center col ">
                <div className="card m-2">
                    <div className="card-body">
                      <h5 className="card-title">Note Taker</h5>
                      <div>
                        <a className="link-light" href="https://github.com/LisaCR01/Note-Taker.git">
                        <BsGithub size={25}/>
                        </a>
                      </div>
                    </div>
                    <a href="https://limitless-brook-10698.herokuapp.com/">
                        <img className="img-fluid" src={note} alt="Image of an application that can be used to write and save notes."/>
                     </a>
                </div>
            </div>
            <div className="text-center col">
                <div className="card m-2">
                    <div className="card-body">
                      <h5 className="card-title">City Health</h5>
                      <div>
                        <a className="link-light" href="https://github.com/DYL4N1997/City-Health.git">
                        <BsGithub size={25}/>
                        </a>
                      </div>
                    </div>
                    <a href="https://dyl4n1997.github.io/City-Health/">
                        <img className="img-fluid" src={health} alt="Image of an application that can be used to write and save notes."/>
                    </a>
                </div>
            </div>
            <div className="text-center col">
                <div className="card m-2">
                    <div className="card-body">
                      <h5 className="card-title">Weather Dashboard</h5>
                      <div>
                        <a className="link-light" href="https://github.com/LisaCR01/Weather-Dashboard.git">
                        <BsGithub size={25} />
                        </a>
                      </div>
                    </div>
                    <a href="https://lisacr01.github.io/Weather-Dashboard/">
                        <img className="img-fluid" src={weather} alt="Image of an application which for a searched place gives the current weather and a five day forecast."/>
                    </a>
                </div>
            </div>
          </div>
          </div>
    );
  }