import React from 'react';
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";


function Footer() {
  return (
<footer className="container m-0 text-center p-4">
    <div className="row align-items-center">
        <div className="col-md-4">
        <a className="link-secondary text-center" href="https://github.com/LisaCR01">
            <BsGithub size={50}/>
         </a>
        </div>
         <div className="col-md-4 ms-auto">
         <a className="link-secondary text-center" href="https://www.linkedin.com/in/LisaCR01">
             <BsLinkedin size={50}/>
         </a>
         </div>
         <div className="col-md-4 ms-auto">
             <a className="link-secondary text-center" href="https://www.facebook.com/people/Lisa-Gunn/100071346941609/">
             <BsFacebook size={50}/>
             </a>
         </div>
    </div>
    </footer>
  );
}

export default Footer;