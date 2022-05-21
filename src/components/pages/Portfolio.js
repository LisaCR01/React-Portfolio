import React from 'react';
import health from "./Assets/City-Health.jpeg";
import daily from "./Assets/Daily-Planner.jpeg";
import jate from "./Assets/Jate.jpeg";
import mood from "./Assets/Mood-Tracker.jpeg";
import note from "./Assets/Note-Taker.jpeg";
import weather from "./Assets/Weather-Dashboard.jpeg";
import { BsGithub } from "react-icons/bs";

var ProjectsData=[
  {title:"Text Editor",
  gitlink:"https://github.com/LisaCR01/Text-Editor.git",
  deploylink:"https://fierce-dawn-38653.herokuapp.com/",
  img:jate,
  altext:"Image of a code editor."},
  {
  title:"Mood Tracker",
  gitlink:"https://github.com/GrantRT/Mood-Tracker.git",
  deploylink:"https://mood-tracker-gkl.herokuapp.com/",
  img:mood,
  altext:"Image of application which has graph to track your mood over the week."
  },
  {title:"Daily Planner",
  gitlink:"https://github.com/LisaCR01/Daily-Planner.git",
  img:daily,
altext:"Image of a daily planner application that is colour co-ordinated to whether times are in the: past, present or future."
  },
  {title:"Note Taker",
gitlink:"https://github.com/LisaCR01/Note-Taker.git",
deploylink:"https://limitless-brook-10698.herokuapp.com/",
img:note,
alttext:"Image of an application that can be used to write and save notes."},
{title:"City Health",
gitlink:"https://github.com/DYL4N1997/City-Health.git",
deploylink:"https://dyl4n1997.github.io/City-Health/",
img:health,
altext:"Image of an application to determine a city's health."},
{title:"Weather Dashboard",
gitlink:"https://github.com/LisaCR01/Weather-Dashboard.git",
deploylink:"https://lisacr01.github.io/Weather-Dashboard/",
img:weather,
altext:"Image of an application which for a searched place gives the current weather and a five day forecast."}
]

class SingleProject extends React.Component {
  render () {
      return (
        <div className="text-center col ">
        <div className="card m-2">
            <div className="card-body">
              <h5 className="card-title">{this.props.title}</h5>
              <div className="card-text">
                <a className="link-light" href={this.props.gitlink} >
                  <BsGithub size={25}/>
                </a>
              </div>
            </div>
            <a className="image" href={this.props.deploylink}>
                <img className="img-fluid" src={this.props.img} alt={this.props.alttext}/>
            </a>
        </div>
        </div>
      )
}
}
class SingleProjectWrapper extends React.Component {
  render () {
      var projects = [];
      this.props.projects.forEach(function(project, i){
          projects.push(<SingleProject title={project.title}  
                           gitlink={project.gitlink}
                           deploylink={project.deploylink}
                           img={project.img}
                           alttext={project.alttext}
                           key={i} />);
      });
      return (
        <div className="container mt-5">
        <div className="row align-items-center">{projects[0]}{projects[1]}{projects[2]}</div>
        <div className="row align-items-center">{projects[3]}{projects[4]}{projects[5]}
        </div></div>
       
              
              
      
      )
  }
}
class Portfolio extends React.Component {
  render () {
    return (
      <div>
            <SingleProjectWrapper projects={ProjectsData} />
       
        </div>
    );
  }
}
  export default Portfolio;