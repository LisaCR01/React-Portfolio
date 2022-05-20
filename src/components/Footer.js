import React from 'react';
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";


function Footer() {
  return (
<footer className="container m-0 text-center ">
    <div className="row">
        <div className="col-md-4">
        <a className="link-secondary fa-lg p-4" href="https://github.com/LisaCR01">
            <BsGithub size={50}/>
         </a>
        </div>
         <div className="col-md-4 ms-auto">
         <a className="link-secondary" href="https://www.linkedin.com/in/LisaCR01">
             <BsLinkedin size={50}/>
         </a>
         </div>
    </div>
    </footer>
  );
}

export default Footer;