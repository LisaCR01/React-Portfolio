import React from 'react';
import './pages.css';
import me from "./Assets/Photo-Me.jpeg";


export default function AboutMe() {
  return (
    <div className="card m-5">
        <div className="card-body p-5 shadow-lg ">
        <img className="card-img-top w-25 my-5 shadow-lg img-thumbnail" src={me} alt="image of me"/>
        <div className="about-me">
        <header className="card-title fs-4 mb-0 p-1 ps-2 fw-bold">About Me</header>
        </div>
        <p className="card-text fw-light text-dark text-opacity-75 p-2 shadow-lg">I’m an accomplished digital artist with a background in both STEM and art related fields; embarking on a design career in both physical and virtual spaces. I have experience in frontend and backend development, with a particular interest in using CSS frameworks to create aesthetic applications. My knowledge within web development means I am able to create fully responsive applications with polished interfaces. I will complete the Birmingham coding bootcamp in May.I’m based in the Midlands, and open to remote part-time working, to fit in with my architectural studies.</p>
        </div>
    </div>
  );
}