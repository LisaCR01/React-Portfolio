import React from 'react';
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";


function Footer() {
  return (
      <div>
    <div><a href="https://github.com/LisaCR01">
    <BsGithub/>
    </a>
    </div>
    <div><a href="https://www.linkedin.com/in/LisaCR01">
    <BsLinkedin/>
    </a>
    </div>
    </div>
  );
}

export default Footer;